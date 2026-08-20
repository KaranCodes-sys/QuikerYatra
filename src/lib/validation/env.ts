import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().optional(), REDIS_URL: z.string().optional(), MAPS_API_KEY: z.string().optional(), PAYMENT_API_KEY: z.string().optional(), STORAGE_URL: z.string().optional(), NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
});
export type AppEnv = z.infer<typeof envSchema>;
export function validateEnv(env: NodeJS.ProcessEnv): AppEnv { return envSchema.parse(env); }
