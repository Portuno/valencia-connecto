import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { PreRegistrationFormData } from "./types";

interface InterestFieldsProps {
  form: UseFormReturn<PreRegistrationFormData>;
}

export function InterestFields({ form }: InterestFieldsProps) {
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

  return (
    <>
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
    </>
  );
}