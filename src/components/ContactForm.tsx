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

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    toast.success(t('contact.messageSent'));
    form.reset();
    console.log(data);
  };
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 flex flex-col gap-4"
        >
          <FormInput form={form} label={t('contact.fullName')} name="fullname" />
          <FormInput form={form} label={t('contact.email')} name="email" />
          <FormTextArea form={form} label={t('contact.tellUs')} name="text" />
          <Button className="w-full">{t('contact.sendMessage')}</Button>

        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
