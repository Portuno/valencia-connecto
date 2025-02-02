import React from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Code, Building2, Gavel, Heart, GraduationCap, Users, Globe, Calendar, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Resources: React.FC = () => {
  const categories = [
    {
      title: "Technology",
      icon: Code,
      description: "Digital innovation and tech resources",
      link: "/resources/tech",
      color: "text-blue-500",
    },
    {
      title: "Finance",
      icon: Building2,
      description: "Business and financial guidance",
      link: "/resources/finance",
      color: "text-green-500",
    },
    {
      title: "Law",
      icon: Gavel,
      description: "Legal resources and documentation",
      link: "/resources/law",
      color: "text-valencia-orange",
    },
    {
      title: "Health",
      icon: Heart,
      description: "Health and wellness resources",
      link: "/resources/health",
      color: "text-red-500",
    },
    {
      title: "Art & Education",
      icon: GraduationCap,
      description: "Educational content and artistic resources",
      link: "/resources/education",
      color: "text-purple-500",
    },
    {
      title: "Community",
      icon: Users,
      description: "Local events and social connections",
      link: "/resources/community",
      color: "text-valencia-sage",
    },
  ];

  const featuredContent = [
    {
      category: "Technology",
      title: "Digital Innovation Guide",
      description: "Comprehensive guide to tech transformation",
      icon: Globe,
      color: "bg-blue-500",
    },
    {
      category: "Community",
      title: "Local Events Calendar",
      description: "Upcoming gatherings and meetups",
      icon: Calendar,
      color: "bg-valencia-sage",
    },
    {
      title: "Valencia Tech Talks",
      category: "Education",
      description: "Weekly podcast featuring local tech leaders",
      icon: Mic,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-16">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-valencia-brown mb-2">Explore Categories</h1>
          <p className="text-gray-600 mb-6">Discover resources across different areas</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.title}
                to={category.link}
                className="block hover:transform hover:scale-105 transition-all duration-300"
              >
                <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gray-100 ${category.color}`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-valencia-brown mb-2">
                          {category.title}
                        </h3>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-valencia-brown mb-2">Featured Content</h2>
          <p className="text-gray-600 mb-6">Latest resources and highlights</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <Card 
                key={content.title}
                className="group relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${content.color} opacity-10 rounded-bl-full`} />
                  <div className="relative">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${content.color} bg-opacity-10 mb-4`}>
                      {content.category}
                    </span>
                    <h3 className="text-xl font-semibold text-valencia-brown mb-2">
                      {content.title}
                    </h3>
                    <CardDescription>{content.description}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;