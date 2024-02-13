import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

export type BookFormData = {
  pickup: string;
  car: string;
  dropof: string;
  pickupDate: Date;
  dropofDate: Date;
};

export type ConfirmFormData = {
  firstname: string;
  lastname: string;
  email: string;
  zipcode: string;
  city: string;
  age: string;
  phone: string;
  address: string;
  newsletter: boolean;
};
export type FormSelectProps = {
  form: UseFormReturn<BookFormData, undefined>;
  label: ReactNode;
  data: string[];
  name: "car" | "pickup" | "dropof" | "pickupDate" | "dropofDate";
};
export type FormDateProps = {
  form: UseFormReturn<BookFormData, undefined>;
  label: ReactNode;
  name: "car" | "pickup" | "dropof" | "pickupDate" | "dropofDate";
};

export type ContactFormData = ConfirmFormData & {
    fullname: string;
    text: string;
    email: string
  }
export type FormInputProps = {
  form: UseFormReturn<ContactFormData | ConfirmFormData, undefined>;
  label: ReactNode;
  name:
    | "firstname"
    | "lastname"
    | "phone"
    | "age"
    | "email"
    | "address"
    | "city"
    | "zipcode"
    | "newsletter"
    | "fullname"
    | "text";
};

export type ContextType = {
  payload: BookFormData | object;
  setPayload: React.Dispatch<React.SetStateAction<object | FormData>>;
  isAlertOpen: boolean;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CarData = {
  name: string;
  price: string;
  img: string;
  model: string;
  mark: string;
  year: string;
  doors: string;
  air: string;
  transmission: string;
  fuel: string;
  mainImg: string;
};

export type TeamData = {
  img: string;
  name: string;
  position: string;
};
