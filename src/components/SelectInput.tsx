import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "./ui/select";
import { SelectInputProps } from "@/lib/types";

const SelectInput = ({ form, label, data, name }: SelectInputProps) => {
  return (
    <>
      <FormField
        control={form?.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className=" pl-0 pb-[0.7rem] flex items-center font-semibold text-base">
              {label}
              <span className="text-orange-600">*</span>
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value as string}
            >
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {data.map((item) => (
                  <SelectItem value={item}>{item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default SelectInput;
