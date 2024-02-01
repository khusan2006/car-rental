import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { DateInputProps } from "@/lib/types";

const disablePastDays = {
    before: new Date(),
  };

const DateInput = ({ label, form, name }: DateInputProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className=" pl-0 pb-[0.7rem] flex items-center font-semibold text-base">
              {label}
              <span className="text-orange-600">*</span>
            </FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value as Date}
                  onSelect={field.onChange}
                  initialFocus
                  disabled={disablePastDays}
                  modifiers={disablePastDays}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default DateInput;
