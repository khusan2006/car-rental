import { CalendarIcon, MapPin, Car } from "lucide-react";
import FormDate from "./FormDate";
import FormSelect from "./FormSelect";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { locations } from "@/data/locations";
import { carNames } from "@/data/CarData";
import { Button } from "./ui/button";
import { BookFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useBookCarContext } from "@/context/BookCarContext";


type FormData = z.infer<typeof BookFormSchema>;
const BookForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(BookFormSchema),
  });

  const { setPayload, setIsAlertOpen } = useBookCarContext();
  // handling form submission
  const onSubmit = (data: FormData) => {
    setPayload(data);
    setIsAlertOpen(true);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4"
      >
        <FormSelect
          form={form}
          data={carNames}
          name="car"
          label={
            <>
              <Car className="h-6 w-6 mr-2" /> Select Your Car Type
            </>
          }
        />
        <FormSelect
          form={form}
          name="pickup"
          data={locations}
          label={
            <>
              <MapPin className="h-6 w-6 mr-2" /> Pick-up
            </>
          }
        />
        <FormSelect
          label={
            <>
              <MapPin className="h-6 w-6 mr-2" /> Drop-of
            </>
          }
          data={locations}
          form={form}
          name="dropof"
        />
        <FormDate
          label={
            <>
              <CalendarIcon className="h-6 w-6 mr-2" /> Pick-up
            </>
          }
          form={form}
          name="pickupDate"
        />
        <FormDate
          label={
            <>
              <CalendarIcon className="h-6 w-6 mr-2" /> Drop of
            </>
          }
          name="dropofDate"
          form={form}
        />
        <Button className="self-end">Search</Button>
      </form>
    </Form>
  );
};

export default BookForm;
