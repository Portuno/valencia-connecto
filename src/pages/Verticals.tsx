import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building, Gavel, Code, BookOpen, Heart, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export default function Verticals() {
  const verticals = [
    {
      title: "Law",
      description: "Legal services and innovation in Valencia's legal sector",
      icon: Gavel,
      path: "/verticals/law",
      color: "text-valencia-orange",
    },
    {
      title: "Tech",
      description: "Technology innovation and digital transformation",
      icon: Code,
      path: "/verticals/tech",
      color: "text-valencia-orange",
    },
    {
      title: "Education + Art",
      description: "Educational initiatives and artistic endeavors",
      icon: BookOpen,
      path: "/verticals/education",
      color: "text-valencia-orange",
    },
    {
      title: "Business",
      description: "Entrepreneurship and business development",
      icon: Building,
      path: "/verticals/business",
      color: "text-valencia-orange",
    },
    {
      title: "Health + Wellness",
      description: "Healthcare innovation and wellness programs",
      icon: Heart,
      path: "/verticals/health",
      color: "text-valencia-orange",
    },
    {
      title: "Hospitality",
      description: "Tourism and hospitality services",
      icon: UtensilsCrossed,
      path: "/verticals/hospitality",
      color: "text-valencia-orange",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Our Verticals</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the diverse sectors where Terreta Hub is making an impact in Valencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {verticals.map((vertical) => (
            <Link
              key={vertical.title}
              to={vertical.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <vertical.icon className={`w-16 h-16 ${vertical.color} mb-4`} />
                <h2 className="text-2xl font-bold text-valencia-brown mb-2">{vertical.title}</h2>
                <p className="text-gray-600">{vertical.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}