
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const sponsorFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  contactNumber: z.string().min(6, "Please enter a valid contact number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Please provide a brief message about your interest"),
});

export default function Sponsor() {
  const form = useForm<z.infer<typeof sponsorFormSchema>>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      name: "",
      contactNumber: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof sponsorFormSchema>) => {
    try {
      // Format the message to include all the sponsor information
      const formattedMessage = `Sponsor Interest:
Name: ${values.name}
Contact: ${values.contactNumber}
Company: ${values.company}
Message: ${values.message}`;

      const { error } = await supabase
        .from("feedback")
        .insert([{ message: formattedMessage }]);

      if (error) throw error;

      toast.success("Thank you for your interest! We'll contact you soon.");
      form.reset();
    } catch (error) {
      console.error("Error submitting sponsor form:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valencia-cream/30 to-valencia-sage/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-valencia-brown">
              Sponsor Our Events
            </h1>
            <p className="text-xl text-valencia-brown/80">
              Join us in building Valencia's international community! By sponsoring our events, 
              you'll connect with a diverse group of professionals and make a meaningful impact 
              in our growing ecosystem.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="+34 XXX XXX XXX" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your interest in sponsoring our events..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-valencia-orange hover:bg-valencia-terracotta"
                >
                  Submit Sponsorship Interest
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
