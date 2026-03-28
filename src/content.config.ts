import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const Datum = z.object({
  repo: z.string(),
  url: z.string().url(),
  title: z.string(),
  mr_pr: z.string().url(),
  merged_at: z.coerce.date(),
});

const contribs = defineCollection({
  loader: async () => {
    const repo = encodeURIComponent("joaommpalmeiro/os-contribs");
    const filePath = encodeURIComponent("data/contribs.json");
    const ref = "main";
    const url = `https://gitlab.com/api/v4/projects/${repo}/repository/files/${filePath}/raw?ref=${ref}`;

    const response = await fetch(url);
    const data: z.infer<typeof Datum>[] = await response.json();

    return data.map((item) => ({ id: item.mr_pr, ...item }));
  },
  schema: Datum,
});

export const collections = { contribs };
