import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().min(1).optional(),
  REDIS_URL: z.string().min(1).optional(),
  MAPS_API_KEY: z.string().min(1).optional(),
  PAYMENT_API_KEY: z.string().min(1).optional(),
  STORAGE_URL: z.string().min(1).optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

export type AppEnv = z.infer<typeof envSchema>;

export function validateEnv(env: NodeJS.ProcessEnv): AppEnv {
  return envSchema.parse(env);
}
