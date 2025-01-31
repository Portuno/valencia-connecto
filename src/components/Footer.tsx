import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Valencia</h3>
            <p className="text-gray-400">
              Empowering entrepreneurs and innovators in Valencia to build the future together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.events")}
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.feedback")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Verticals */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{t("verticals.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/verticals/tech" className="text-gray-400 hover:text-white transition-colors">
                  {t("verticals.technology")}
                </Link>
              </li>
              <li>
                <Link to="/verticals/finance" className="text-gray-400 hover:text-white transition-colors">
                  {t("verticals.finance")}
                </Link>
              </li>
              <li>
                <Link to="/verticals/law" className="text-gray-400 hover:text-white transition-colors">
                  {t("verticals.law")}
                </Link>
              </li>
              <li>
                <Link to="/verticals/health" className="text-gray-400 hover:text-white transition-colors">
                  {t("verticals.health")}
                </Link>
              </li>
              <li>
                <Link to="/verticals/art" className="text-gray-400 hover:text-white transition-colors">
                  {t("verticals.art")}
                </Link>
              </li>
              <li>
                <Link to="/verticals/community" className="text-gray-400 hover:text-white transition-colors">
                  {t("verticals.community")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@valencia.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Valencia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}