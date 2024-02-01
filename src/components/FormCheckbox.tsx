import { FormInputProps } from "@/lib/types";
import { Checkbox } from "./ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";

const FormCheckbox = ({ label, form, name }: FormInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center space-x-3 space-y-0 ">
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="font-poppins text-base text-gray-600 font-medium">
              {label}
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
};

export default FormCheckbox;
