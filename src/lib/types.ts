import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

export type FormData = {
    pickup: string;
    car: string;
    dropof: string;
    pickupDate: Date;
    dropofDate: Date;
  };

 export type SelectInputProps = {
    form: UseFormReturn<FormData, undefined>;
    label: ReactNode;
    data: string[];
    name: "car" | "pickup" | "dropof" | "pickupDate" | "dropofDate";
  };
 export type DateInputProps = {
    form: UseFormReturn<FormData, undefined>;
    label: ReactNode;
    name: "car" | "pickup" | "dropof" | "pickupDate" | "dropofDate";
  };