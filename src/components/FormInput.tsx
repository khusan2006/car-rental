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
          <FormLabel className=" pl-0 pb-[0.7rem] flex items-center font-semibold text-base capitalize">{label}</FormLabel>
          <FormControl>
            <Input type={name === 'age' ? 'number' : ''} placeholder="" {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
