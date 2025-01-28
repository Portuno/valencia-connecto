import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Code } from "lucide-react";

export default function Tech() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Code className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Tech Innovation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building Valencia's tech ecosystem through collaboration, innovation, and knowledge sharing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Focus Areas</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Software Development</li>
              <li>• Artificial Intelligence</li>
              <li>• Blockchain Technology</li>
              <li>• Digital Transformation</li>
              <li>• Cybersecurity</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Community</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Tech meetups and conferences</li>
              <li>• Coding workshops</li>
              <li>• Startup incubation</li>
              <li>• Hackathons</li>
              <li>• Tech talent networking</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}