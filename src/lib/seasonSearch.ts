import { z } from "zod";
import { DEFAULT_SEASON_ID, getSeason } from "@/data/seasons";

export const seasonSearchSchema = z.object({
  season: z
    .string()
    .optional()
    .transform((id) => (id && getSeason(id) ? id : DEFAULT_SEASON_ID)),
});

export type SeasonSearch = z.infer<typeof seasonSearchSchema>;
