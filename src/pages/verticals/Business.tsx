import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building } from "lucide-react";

export default function Business() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Building className="w-16 h-16 text-valencia-orange" />
          </div>
          <h1 className="text-4xl font-bold text-valencia-brown mb-4">Business</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting entrepreneurship and business development in Valencia's growing economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Business Services</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Business plan development</li>
              <li>• Market research and analysis</li>
              <li>• Funding and investment guidance</li>
              <li>• Business registration support</li>
              <li>• Marketing strategy consulting</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-valencia-brown mb-4">Networking</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Business networking events</li>
              <li>• Mentorship programs</li>
              <li>• Industry conferences</li>
              <li>• Pitch competitions</li>
              <li>• Collaborative workspaces</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}