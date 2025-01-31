import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, ScrollText, Plus, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ResourceForm } from "@/components/ResourceForm";

const Resources = () => {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>("blogs");

  const { data: session } = await supabase.auth.getSession();
  const userId = session?.session?.user?.id;

  const { data: userRole } = useQuery({
    queryKey: ['userRole', userId],
    queryFn: async () => {
      if (!userId) return null;
      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();
      return data?.role;
    },
    enabled: !!userId
  });

  const isAdmin = userRole === 'admin';

  const { data: resources, refetch } = useQuery({
    queryKey: ['resources', selectedType],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('type', selectedType)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('resources')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error("Failed to delete resource");
      return;
    }

    toast.success("Resource deleted successfully");
    refetch();
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-valencia-brown">Resources</h1>
            {isAdmin && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-valencia-orange hover:bg-valencia-terracotta">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Resource
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Resource</DialogTitle>
                  </DialogHeader>
                  <ResourceForm onSuccess={() => {
                    refetch();
                    toast.success("Resource added successfully");
                  }} />
                </DialogContent>
              </Dialog>
            )}
          </div>
          
          <Tabs defaultValue="blogs" className="w-full" onValueChange={setSelectedType}>
            <TabsList className="mb-8">
              <TabsTrigger value="blogs" className="flex items-center gap-2">
                <ScrollText className="h-4 w-4" />
                Blogs
              </TabsTrigger>
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Courses
              </TabsTrigger>
            </TabsList>

            {['blogs', 'guides', 'courses'].map((type) => (
              <TabsContent key={type} value={type} className="space-y-6">
                {resources?.filter(r => r.type === type).map((resource) => (
                  <Card key={resource.id}>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>
                          {new Date(resource.created_at).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      {isAdmin && (
                        <div className="flex gap-2">
                          <Dialog open={isEditing === resource.id} onOpenChange={(open) => setIsEditing(open ? resource.id : null)}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="icon">
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Resource</DialogTitle>
                              </DialogHeader>
                              <ResourceForm 
                                resource={resource}
                                onSuccess={() => {
                                  setIsEditing(null);
                                  refetch();
                                  toast.success("Resource updated successfully");
                                }} 
                              />
                            </DialogContent>
                          </Dialog>
                          <Button 
                            variant="destructive" 
                            size="icon"
                            onClick={() => handleDelete(resource.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{resource.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Resources;