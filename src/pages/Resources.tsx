import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Code, 
  Building2, 
  Gavel, 
  Heart, 
  GraduationCap, 
  Users, 
  Globe, 
  Calendar, 
  Mic,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const categories = [
    {
      title: "Technology",
      icon: Code,
      description: "Digital innovation and tech resources",
      link: "/verticals/tech",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Business",
      icon: Building2,
      description: "Business and financial guidance",
      link: "/verticals/business",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Law",
      icon: Gavel,
      description: "Legal resources and documentation",
      link: "/verticals/law",
      color: "text-valencia-orange",
      bgColor: "bg-valencia-cream",
    },
    {
      title: "Health & Wellness",
      icon: Heart,
      description: "Health and wellness resources",
      link: "/verticals/health",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      title: "Education & Art",
      icon: GraduationCap,
      description: "Educational content and artistic resources",
      link: "/verticals/education",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      title: "Community",
      icon: Users,
      description: "Local events and social connections",
      link: "/verticals/hospitality",
      color: "text-valencia-sage",
      bgColor: "bg-valencia-cream",
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
          <h1 className="text-3xl font-bold text-valencia-brown mb-2">Explore Resources</h1>
          <p className="text-gray-600 mb-6">Discover resources across different areas in Valencia</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.title}
                to={category.link}
                className="block group hover:transform hover:scale-105 transition-all duration-300"
              >
                <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${category.bgColor} ${category.color} group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-valencia-brown mb-2 flex items-center justify-between">
                          {category.title}
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
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
                    <Button variant="ghost" className="mt-4 p-0 hover:bg-transparent">
                      Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;