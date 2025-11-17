import { Mail, MapPinIcon, Phone } from "lucide-react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/schema";
import FormInput from "./FormInput";
import { ContactFormData } from "@/lib/types";
import { toast } from "sonner";
import FormTextArea from "./FormTextArea";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const sanitizeForHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const sendTelegramMessage = async (data: ContactFormData) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error("Telegram credentials are not configured");
    }

    const message = [
      "🚗 <b>New Contact Request</b>",
      `<b>Name:</b> ${sanitizeForHtml(data.fullname)}`,
      `<b>Phone:</b> ${sanitizeForHtml(data.phone)}`,
      `<b>Description:</b> ${sanitizeForHtml(data.description)}`,
    ].join("\n");

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send Telegram message");
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendTelegramMessage(data);
      toast.success(t("contact.messageSent"));
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(t("contact.messageError"));
    }
  };

  const {
    formState: { isSubmitting },
  } = form;
  return (
    <div className="py-28 px-10 flex flex-col md:flex-row bg-[url(assets/bg-contact.png)] gap-10 bg-center">
      <div className="flex-1 md:pr-28">
        <h3 className="font-poppins text-4xl font-bold mb-6 text-center md:text-start">{t('contact.needInfo')}</h3>
        <p className="text-base font-poppins font-medium text-gray-600 text-center md:text-start md:w-[80%] mb-8">
          {t('contact.infoDescription')}
        </p>
        <a className="flex gap-2 pb-4 text-[1.125rem] font-medium" href="callto:123456789">
          <Phone /> (123) 456-78-90
        </a>
        <a className="flex gap-2 pb-4 text-[1.125rem] font-medium" href="mailto:123456789">
          <Mail /> sales@cardealer.com
        </a>
        <a className="flex gap-2 pb-4 text-[1.125rem] font-medium" href="https://googlemap.com">
          <MapPinIcon /> Tashkent Uzbekistan{" "}
        </a>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex flex-col gap-4">
          <FormInput form={form} label={t("contact.fullName")} name="fullname" />
          <FormInput form={form} label={t("contact.phone")} name="phone" />
          <FormTextArea form={form} label={t("contact.description")} name="description" />
          <Button className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t("contact.sending") : t("contact.sendMessage")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
