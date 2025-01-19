import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "@/contexts/LanguageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function RegistrationForm() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      languages: [],
      interests: [],
      contactMethod: "email",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      if (signUpError) throw signUpError;

      const { error: profileError } = await supabase.from("profiles").upsert({
        id: (await supabase.auth.getUser()).data.user?.id,
        first_name: values.firstName,
        last_name: values.lastName,
        age: values.age,
        nationality: values.nationality,
        languages: values.languages,
        interests: values.interests,
        other_interests: values.otherInterests,
        about: values.about,
        contact_method: values.contactMethod,
        other_contact_details: values.otherContactDetails,
      });

      if (profileError) throw profileError;

      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const interestOptions = [
    "Outdoor events",
    "Entrepreneurship",
    "Art",
    "Sports",
    "Music",
    "Travel",
    "Food & Drinks",
    "Gaming",
  ];

  const languageOptions = ["English", "Spanish", "French", "Valencian", "Other"];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name / Nombre</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name / Apellido</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age / Edad</FormLabel>
                <FormControl>
                  <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality / Nacionalidad</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="languages"
            render={() => (
              <FormItem>
                <FormLabel>Languages / Idiomas</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {languageOptions.map((language) => (
                    <label key={language} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={language}
                        onChange={(e) => {
                          const value = e.target.value;
                          const currentValues = form.getValues("languages");
                          if (e.target.checked) {
                            form.setValue("languages", [...currentValues, value]);
                          } else {
                            form.setValue(
                              "languages",
                              currentValues.filter((v) => v !== value)
                            );
                          }
                        }}
                      />
                      <span>{language}</span>
                    </label>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interests"
            render={() => (
              <FormItem>
                <FormLabel>Interests / Intereses</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={interest}
                        onChange={(e) => {
                          const value = e.target.value;
                          const currentValues = form.getValues("interests");
                          if (e.target.checked) {
                            form.setValue("interests", [...currentValues, value]);
                          } else {
                            form.setValue(
                              "interests",
                              currentValues.filter((v) => v !== value)
                            );
                          }
                        }}
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otherInterests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Interests / Otros Intereses</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About You / Sobre Ti</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Contact Method / Método de Contacto Preferido</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal">Email</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="whatsapp" />
                      </FormControl>
                      <FormLabel className="font-normal">WhatsApp</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="telegram" />
                      </FormControl>
                      <FormLabel className="font-normal">Telegram</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="other" />
                      </FormControl>
                      <FormLabel className="font-normal">Other / Otro</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="otherContactDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Contact Details / Otros Detalles de Contacto</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password / Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-valencia-orange hover:bg-valencia-terracotta">
            Sign Up / Registrarse
          </Button>
        </form>
      </Form>
    </div>
  );
}