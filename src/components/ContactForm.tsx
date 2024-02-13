import { Mail, MapPinIcon, Phone } from "lucide-react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/schema";
import FormInput from "./FormInput";
import { ConfirmFormData, ContactFormData } from "@/lib/types";
import { toast } from "sonner";
import FormTextArea from "./FormTextArea";
import { Button } from "./ui/button";

const ContactForm = () => {
  const form = useForm<ContactFormData | ConfirmFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (data: ConfirmFormData) => {
    toast.success("your message has been sent");
    form.reset();
    console.log(data);
  };
  return (
    <div className="py-28 px-10 flex flex-col md:flex-row bg-[url(assets/bg-contact.png)] gap-10 bg-center">
      <div className="flex-1 md:pr-28">
        <h3 className="font-poppins text-4xl font-bold mb-6 text-center md:text-start">Need additional information?</h3>
        <p className="text-base font-poppins font-medium text-gray-600 text-center md:text-start md:w-[80%] mb-8">
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <a className="flex gap-2 pb-4 text-[1.125rem] font-medium" href="callto:123456789">
          <Phone /> (123) 456-78-90
        </a>
        <a className="flex gap-2 pb-4 text-[1.125rem] font-medium" href="mailto:123456789">
          <Mail /> carrental@carmail.com
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
          <FormInput form={form} label={"Full name"} name="fullname" />
          <FormInput form={form} label={"Email"} name="email" />
          <FormTextArea form={form} label={"Tell us about it"} name="text" />
          <Button className="w-full">Send a mesage</Button>

        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
