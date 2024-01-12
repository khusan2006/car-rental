import { FC, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Car } from "lucide-react";

const BookCar: FC = () => {
  const [date, setDate] = useState<Date>();
  return (
    <section className="flex justify-center px-6 pt-6 font-poppins">
      <div className="w-full shadow-lg bg-white pb-20 p-12 rounded-md bg-[url(assets/book-bg.png)]">
        <h4 className="font-poppins font-bold text-2xl">Book a car</h4>
        <div className="grid grid-cols-3 gap-8 pt-4">
          <SelectGroup>
            <SelectLabel className=" pl-0 pb-[0.7rem] flex items-center font-semibold text-base">

              <Car className="h-6 w-6 mr-2" /> Select Your Car Type
              <span className="text-orange-600">*</span>
            </SelectLabel>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </SelectGroup>
          <SelectGroup>
            <Select>
              <SelectLabel className="pl-0 pb-[0.7rem] flex items-center font-semibold text-base">
                <MapPin className="h-6 w-6 mr-2" /> Pick-up
                <span className="text-orange-600">*</span>
              </SelectLabel>

              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </SelectGroup>
          <SelectGroup>
            <Select>
              <SelectLabel className="pl-0 pb-[0.7rem] flex items-center font-semibold text-base">
                <MapPin className="h-6 w-6 mr-2" /> Drop-of
                <span className="text-orange-600">*</span>
              </SelectLabel>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </SelectGroup>
          <SelectGroup>
          <SelectLabel className="pl-0 pb-[0.7rem] flex items-center font-semibold text-base">
                <CalendarIcon className="h-6 w-6 mr-2" /> Pick-up
                <span className="text-orange-600">*</span>
              </SelectLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </SelectGroup>
          <SelectGroup>
          <SelectLabel className="pl-0 pb-[0.7rem] flex items-center font-semibold text-base">
                <CalendarIcon className="h-6 w-6 mr-2" /> Drop-of 
                <span className="text-orange-600">*</span>
              </SelectLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </SelectGroup>
          <Button className="self-end">Search</Button>
        </div>
      </div>
    </section>
  );
};

export default BookCar;
