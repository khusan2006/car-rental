import { z } from "zod";

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
