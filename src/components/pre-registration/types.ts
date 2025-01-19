export interface PreRegistrationFormData {
  first_name: string;
  last_name: string;
  age: number;
  nationality: string;
  languages: string[];
  interests: string[];
  other_interests?: string;
  about?: string;
  contact_method: "email" | "whatsapp" | "telegram" | "other";
  other_contact_details?: string;
  email: string;
}