import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, Palette, GraduationCap, Users } from "lucide-react";

export default function Education() {
  const services = [
    {
      title: "Educational Programs",
      icon: BookOpen,
      items: [
        "Language Courses",
        "Cultural Exchange",
        "Academic Support",
        "Study Groups",
        "Educational Tours"
      ]
    },
    {
      title: "Art & Culture",
      icon: Palette,
      items: [
        "Art Workshops",
        "Cultural Events",
        "Exhibition Spaces",
        "Creative Projects",
        "Cultural Integration"
      ]
    },
    {
      title: "Academic Services",
      icon: GraduationCap,
      items: [
        "University Guidance",
        "Research Support",
        "Academic Writing",
        "Exam Preparation",
        "Career Counseling"
      ]
    },
    {
      title: "Community Learning",
      icon: Users,
      items: [
        "Skill Sharing",
        "Mentorship Programs",
        "Community Projects",
        "Educational Events",
        "Learning Networks"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Education & Art</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fostering learning, creativity, and cultural exchange in Valencia's diverse community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-valencia-orange mr-3" />
                <h2 className="text-2xl font-bold text-valencia-brown">{service.title}</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}