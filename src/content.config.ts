import { defineCollection } from "astro:content";

import { Datum } from "./models";

const contribs = defineCollection({
  loader: async () => {
    const repo = encodeURIComponent("joaommpalmeiro/os-contribs");
    const filePath = encodeURIComponent("data/contribs.json");
    const ref = "main";
    const url = `https://gitlab.com/api/v4/projects/${repo}/repository/files/${filePath}/raw?ref=${ref}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  },
  schema: Datum,
});

export const collections = { contribs };
