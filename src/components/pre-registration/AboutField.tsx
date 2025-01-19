import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { PreRegistrationFormData } from "./types";

interface AboutFieldProps {
  form: UseFormReturn<PreRegistrationFormData>;
}

export function AboutField({ form }: AboutFieldProps) {
  return (
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
  );
}