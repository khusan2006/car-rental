import { CalendarIcon, MapPin, Car } from "lucide-react";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { locations } from "@/data/locations";
import { carNames } from "@/data/CarData";
import { Button } from "./ui/button";
import { schema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormComponentProps = {
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = z.infer<typeof schema>;
const FormComponent = ({ setIsAlertOpen }: FormComponentProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission logic here
    setIsAlertOpen(true);
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4"
      >
        <SelectInput
          form={form}
          data={carNames}
          name="car"
          label={
            <>
              <Car className="h-6 w-6 mr-2" /> Select Your Car Type
            </>
          }
        />
        <SelectInput
          form={form}
          name="pickup"
          data={locations}
          label={
            <>
              <MapPin className="h-6 w-6 mr-2" /> Pick-up
            </>
          }
        />
        <SelectInput
          label={
            <>
              <MapPin className="h-6 w-6 mr-2" /> Drop-of
            </>
          }
          data={locations}
          form={form}
          name="dropof"
        />
        <DateInput
          label={
            <>
              <CalendarIcon className="h-6 w-6 mr-2" /> Pick-up
            </>
          }
          form={form}
          name="pickupDate"
        />
        <DateInput
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

export default FormComponent;
