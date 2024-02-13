import { FormInputProps } from "@/lib/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

const FormTextArea = ({ form, name, label }: FormInputProps) => {
  if (name === "newsletter") return;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="pl-0 pb-[0.7rem] flex items-center font-semibold text-base capitalize">{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Write here"
              className="resize-none"
              rows={10}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextArea;
