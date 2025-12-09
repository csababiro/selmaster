import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  email: z.string().email('Adresa de email nu este validă'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Mesajul trebuie să aibă cel puțin 10 caractere'),
});

export const quoteFormSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  email: z.string().email('Adresa de email nu este validă'),
  phone: z.string().min(10, 'Numărul de telefon este obligatoriu'),
  product: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(10, 'Mesajul trebuie să aibă cel puțin 10 caractere'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type QuoteFormData = z.infer<typeof quoteFormSchema>;

