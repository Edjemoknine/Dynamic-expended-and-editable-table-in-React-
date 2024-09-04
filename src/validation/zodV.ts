import { z } from "zod";

export const FormSchema = z.object({
  song: z.string().min(2, {
    message: "Song name must be at least 2 characters.",
  }),
  artist: z.string().min(2, {
    message: "Artist name must be at least 2 characters.",
  }),
  year: z.string(),
});
