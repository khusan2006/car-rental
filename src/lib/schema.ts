import { z } from "zod";

export const schema = z.object({
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
  }).refine(data => data.dropof !== data.pickup, {
    message: 'pickup location and dropof location cannot be the same',
    path: ['dropof']
  }).refine(data => data.pickupDate.toISOString() !== data.dropofDate.toISOString(), {
    message: 'You can not rent a car less than a day',
    path: ['dropofDate']
  });