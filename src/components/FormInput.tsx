import { FormInputProps } from "@/lib/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const FormInput = ({ form, label, name }: FormInputProps) => {
    if(name === 'newsletter') return
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-poppins text-base text-gray-600 font-medium capitalize">{label}</FormLabel>
          <FormControl>
            <Input placeholder="" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
