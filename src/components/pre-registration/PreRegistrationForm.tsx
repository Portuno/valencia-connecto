import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useLanguage } from "@/contexts/LanguageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { PersonalInfoFields } from "./PersonalInfoFields";
import { LanguageFields } from "./LanguageFields";
import { InterestFields } from "./InterestFields";
import { AboutField } from "./AboutField";
import { ContactFields } from "./ContactFields";
import { PreRegistrationFormData } from "./types";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  age: z.number().min(18, "Must be at least 18 years old"),
  nationality: z.string().min(2, "Please enter your nationality"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  otherInterests: z.string().optional(),
  about: z.string().min(10, "Tell us a bit more about yourself"),
  contactMethod: z.enum(["email", "whatsapp", "telegram", "other"]),
  otherContactDetails: z.string().optional(),
  email: z.string().email("Invalid email address"),
});

export function PreRegistrationForm() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const form = useForm<PreRegistrationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      languages: [],
      interests: [],
      contactMethod: "email",
    },
  });

  const onSubmit = async (values: PreRegistrationFormData) => {
    try {
      const { error } = await supabase.from("pre_registrations").insert([values]);

      if (error) throw error;

      toast.success("Pre-registration successful! We'll contact you soon.");
      navigate("/");
    } catch (error) {
      console.error("Pre-registration error:", error);
      toast.error("Pre-registration failed. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PersonalInfoFields form={form} />
          <LanguageFields form={form} />
          <InterestFields form={form} />
          <AboutField form={form} />
          <ContactFields form={form} />

          <Button type="submit" className="w-full bg-valencia-orange hover:bg-valencia-terracotta">
            Pre-Register / Pre-Registrarse
          </Button>
        </form>
      </Form>
    </div>
  );
}