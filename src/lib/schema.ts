import { z } from "zod";

export const BookFormSchema = z
  .object({
    pickup: z.string({
      required_error: "please select pickup location",
    }),
    car: z.string({
      required_error: "please select which car you want to get",
    }),
    dropof: z.string({
      required_error: "please select dropof location",
    }),
    pickupDate: z.date({
      required_error: "please select pickup date",
    }),
    dropofDate: z.date({
      required_error: "please select dropof date",
    }),
  })
  .refine((data) => data.dropof !== data.pickup, {
    message: "pickup location and dropof location cannot be the same",
    path: ["dropof"],
  })
  .refine(
    (data) => data.pickupDate.toISOString() !== data.dropofDate.toISOString(),
    {
      message: "You can not rent a car less than a day",
      path: ["dropofDate"],
    }
  );

export const ConfirmFormSchema = z.object({
  firstname: z.string({
    required_error: "please enter your first name",
  }),
  lastname: z.string({
    required_error: "please enter your last name",
  }),
  city: z.string({
    required_error: "please enter your city",
  }),
  email: z
    .string({
      required_error: "please enter your email address",
    })
    .email({
      message: "please enter valid email address",
    }),
  age: z.string({
    required_error: "Please enter your age",
  }),
  address: z.string({
    required_error: "please enter your address",
  }),
  phone: z
    .string({
      required_error: "please enter your phone number",
    })
    .refine((value) => /^[0-9]{10}$/g.test(value), {
      message: "Please enter valid 10-digit number without spaces or dashes.",
    }),
  zipcode: z
    .string({
      required_error: "please enter your phone number",
    })
    .refine((value) => /^[0-9]{5}(?:-[0-9]{4})?$/g.test(value), {
      message: "Please enter a valid ZIP code.",
    }),
  newsletter: z.boolean(),
});

export const ContactFormSchema = z.object({
  fullname: z.string({
    required_error: "please enter your first name",
  }),

  email: z
    .string({
      required_error: "please enter your email address",
    })
    .email({
      message: "please enter valid email address",
    }),
   text:  z.string({
    required_error: "please enter your text",
  }),
});
