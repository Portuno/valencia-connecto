export interface PreRegistrationFormData {
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
  languages: string[];
  interests: string[];
  otherInterests?: string;
  about?: string;
  contactMethod: "email" | "whatsapp" | "telegram" | "other";
  otherContactDetails?: string;
  email: string;
}