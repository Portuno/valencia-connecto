import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, ScrollText } from "lucide-react";

const Resources = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-8 mt-16">
          <h1 className="text-3xl font-bold text-valencia-brown mb-8">Resources</h1>
          
          <Tabs defaultValue="blogs" className="w-full">
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

            <TabsContent value="blogs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started in Valencia's Tech Scene</CardTitle>
                  <CardDescription>Learn about the growing tech ecosystem in Valencia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Discover the opportunities and challenges of joining Valencia's vibrant tech community...</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Legal Guide for Startups in Spain</CardTitle>
                  <CardDescription>Essential legal information for entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Understanding the legal framework for starting a business in Spain...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guides" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Entrepreneur's Guide to Valencia</CardTitle>
                  <CardDescription>Your comprehensive guide to starting up in Valencia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Everything you need to know about establishing your business in Valencia...</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Networking Guide</CardTitle>
                  <CardDescription>How to build meaningful connections in the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tips and strategies for effective networking in Valencia's business ecosystem...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spanish for Business</CardTitle>
                  <CardDescription>Essential Spanish language skills for professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Learn business Spanish to better integrate into the local ecosystem...</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Valencia Startup Fundamentals</CardTitle>
                  <CardDescription>Core knowledge for entrepreneurs in Valencia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Understanding the local business environment and startup ecosystem...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Resources;