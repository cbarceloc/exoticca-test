import z from 'zod';

export const StopSchema = z.object({
  location: z.string().min(2, 'Location must be at least 2 characters long'),
  description: z.string().min(2, 'Description must be at least 2 characters long'),
  day: z.number().min(0, 'Day must be a positive number'),
});

export type Stop = z.infer<typeof StopSchema>;
