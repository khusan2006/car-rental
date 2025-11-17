import { z } from "zod";

export const ContactFormSchema = z.object({
  fullname: z.string({
    required_error: "please enter your first name",
  }),
  phone: z
    .string({
      required_error: "please enter your phone number",
    })
    .min(6, {
      message: "phone number should be at least 6 characters",
    }),

  description: z.string({
    required_error: "please enter description",
  }),
});
