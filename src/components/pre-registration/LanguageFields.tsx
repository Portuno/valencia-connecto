import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { PreRegistrationFormData } from "./types";

interface LanguageFieldsProps {
  form: UseFormReturn<PreRegistrationFormData>;
}

export function LanguageFields({ form }: LanguageFieldsProps) {
  const languageOptions = ["English", "Spanish", "French", "Valencian", "Other"];

  return (
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
  );
}