import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import FormInput from "./FormInput";
import { ConfirmFormData } from "@/lib/types";
import { Form } from "./ui/form";
import FormCheckbox from "./FormCheckbox";

const ConfirmForm = () => {
  const form = useForm<ConfirmFormData>();

  const onSubmit = (data: ConfirmFormData) => {
    console.log(data);
  };
  return (
    <div>
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
