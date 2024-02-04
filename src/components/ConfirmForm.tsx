import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import FormInput from "./FormInput";
import { Form } from "./ui/form";
import FormCheckbox from "./FormCheckbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfirmFormSchema } from "@/lib/schema";
import {  z } from "zod";
import { useBookCarContext } from "@/context/BookCarContext";
import { toast } from "sonner";

type ConfirmFormData = z.infer<typeof ConfirmFormSchema>;

const ConfirmForm = () => {
  const {setIsAlertOpen} = useBookCarContext() 
  const form = useForm<ConfirmFormData>({
    resolver: zodResolver(ConfirmFormSchema),
  });
  const onSubmit = (data: ConfirmFormData) => {
    setIsAlertOpen(false)
    toast.success('rent has succesfully booked')
    console.log(data)
  };
  return (
    <div className="px-4 md:px-0">
      <h3 className="font-poppins text-xl text-orange-600 font-bold">
        PERSONAL INFORMATION
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid sm:grid-cols-2 gap-8 pt-4"
        >
          <FormInput form={form} label={"First name"} name="firstname" />
          <FormInput form={form} label={"Last name"} name="lastname" />
          <FormInput form={form} label={"Phone number"} name="phone" />
          <FormInput form={form} label={"age"} name="age" />
          <FormInput form={form} label={"Email"} name="email" />
          <FormInput form={form} label={"address"} name="address" />
          <FormInput form={form} label={"city"} name="city" />
          <FormInput form={form} label={"Zip code"} name="zipcode" />
          <FormCheckbox
            form={form}
            label={"Please send me latest news and updates"}
            name="newsletter"
          />
          <Button className="self-end">Reserve now</Button>
        </form>
      </Form>
    </div>
  );
};

export default ConfirmForm;
