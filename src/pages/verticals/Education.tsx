import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Education + Art</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fostering creativity and learning through educational initiatives and artistic endeavors in Valencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Education Programs</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Language exchange programs</li>
              <li>• Professional development workshops</li>
              <li>• Cultural integration courses</li>
              <li>• Digital skills training</li>
              <li>• Creative workshops</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Art Initiatives</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Art exhibitions and galleries</li>
              <li>• Artist residency programs</li>
              <li>• Public art projects</li>
              <li>• Cultural events and festivals</li>
              <li>• Creative collaborations</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}