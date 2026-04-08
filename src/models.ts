import { z } from "astro/zod";

export const Datum = z.object({
  id: z.string(),
  repo: z.string(),
  url: z.string().url(),
  title: z.string(),
  mr_pr: z.string().url(),
  merged_at: z.coerce.date(),
});

export const Data = z.array(Datum);
