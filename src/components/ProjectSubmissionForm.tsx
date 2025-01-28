import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Globe, Users, FileText } from "lucide-react";

const projectFormSchema = z.object({
  projectName: z.string().min(2, "Project name must be at least 2 characters"),
  foundersCount: z.number().min(1, "Must have at least 1 founder").max(10, "Maximum 10 founders"),
  founderNames: z.array(z.string()).min(1, "At least one founder name is required"),
  website: z.string().url("Please enter a valid URL"),
  description: z.string().min(50, "Description must be at least 50 characters"),
});

export function ProjectSubmissionForm() {
  const [foundersCount, setFoundersCount] = useState(1);

  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      projectName: "",
      foundersCount: 1,
      founderNames: [""],
      website: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof projectFormSchema>) => {
    try {
      const { error } = await supabase.from("projects").insert({
        name: values.projectName,
        founders_count: values.foundersCount,
        founder_names: values.founderNames,
        website: values.website,
        description: values.description,
      });

      if (error) throw error;

      toast.success("Project submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting project:", error);
      toast.error("Failed to submit project. Please try again.");
    }
  };

  const handleFoundersCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value) || 1;
    setFoundersCount(Math.min(Math.max(count, 1), 10));
    form.setValue("foundersCount", count);
    
    // Update founder names array based on new count
    const currentNames = form.getValues("founderNames");
    if (count > currentNames.length) {
      form.setValue("founderNames", [...currentNames, ...Array(count - currentNames.length).fill("")]);
    } else {
      form.setValue("founderNames", currentNames.slice(0, count));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Project Name
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="foundersCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Number of Founders
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    {...field}
                    onChange={handleFoundersCountChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {Array.from({ length: foundersCount }).map((_, index) => (
            <FormField
              key={index}
              control={form.control}
              name={`founderNames.${index}`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Founder {index + 1} Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Website URL
                </FormLabel>
                <FormControl>
                  <Input {...field} type="url" placeholder="https://" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Project Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Tell us about your project..."
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-valencia-orange hover:bg-valencia-terracotta">
            Submit Project
          </Button>
        </form>
      </Form>
    </div>
  );
}