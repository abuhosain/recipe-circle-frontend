// src/schemas/updateProfile.schema.ts
import { z } from "zod";

const updateProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  username: z.string().optional(),
  profilePicture: z.any().optional(),
});

export default updateProfileSchema;
