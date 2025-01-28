import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Law() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-valencia-brown mb-4">Legal Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting legal professionals and innovating Valencia's legal sector
            </p>
          </div>

          {/* Content sections can be added here */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-valencia-brown mb-4">Legal Network</h2>
              <p className="text-gray-600">
                Connect with legal professionals specializing in various areas of law, from business and immigration to property and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-valencia-brown mb-4">Legal Resources</h2>
              <p className="text-gray-600">
                Access guides, documents, and resources to help you navigate legal processes in Valencia.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}