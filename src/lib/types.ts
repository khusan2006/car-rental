import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

export type ContactFormData = {
  fullname: string;
  email: string;
  text: string;
};

export type FormInputProps = {
  form: UseFormReturn<ContactFormData, undefined>;
  label: ReactNode;
  name: "fullname" | "email" | "text";
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
