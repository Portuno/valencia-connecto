import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  type: z.enum(["blogs", "guides", "courses"], {
    required_error: "Please select a resource type",
  }),
});

interface ResourceFormProps {
  resource?: {
    id: string;
    title: string;
    content: string;
    type: string;
  };
  onSuccess: () => void;
}

export function ResourceForm({ resource, onSuccess }: ResourceFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: resource?.title || "",
      content: resource?.content || "",
      type: (resource?.type as "blogs" | "guides" | "courses") || "blogs",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (resource) {
        const { error } = await supabase
          .from("resources")
          .update(values)
          .eq("id", resource.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("resources").insert([values]);
        if (error) throw error;
      }
      onSuccess();
      form.reset();
    } catch (error) {
      console.error("Error submitting resource:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a resource type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="blogs">Blog</SelectItem>
                  <SelectItem value="guides">Guide</SelectItem>
                  <SelectItem value="courses">Course</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter content"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {resource ? "Update" : "Create"} Resource
        </Button>
      </form>
    </Form>
  );
}