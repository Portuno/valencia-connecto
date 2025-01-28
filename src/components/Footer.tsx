import { Globe, Mail, Phone, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-valencia-brown text-white mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Terreta Hub</h3>
            <p className="text-sm text-gray-300">
              Valencia's International Community Platform connecting residents, digital nomads, and locals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/verticals/law" className="text-gray-300 hover:text-valencia-orange">Law</Link>
              </li>
              <li>
                <Link to="/verticals/tech" className="text-gray-300 hover:text-valencia-orange">Tech</Link>
              </li>
              <li>
                <Link to="/verticals/education" className="text-gray-300 hover:text-valencia-orange">Education + Art</Link>
              </li>
              <li>
                <Link to="/verticals/business" className="text-gray-300 hover:text-valencia-orange">Business</Link>
              </li>
              <li>
                <Link to="/verticals/health" className="text-gray-300 hover:text-valencia-orange">Health + Wellness</Link>
              </li>
              <li>
                <Link to="/verticals/hospitality" className="text-gray-300 hover:text-valencia-orange">Hospitality</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-valencia-orange">{t("footer.resources")}</Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-300 hover:text-valencia-orange">{t("footer.documentation")}</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-valencia-orange">{t("footer.events")}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-2">
              <a href="mailto:info@terretahub.com" className="flex items-center text-gray-300 hover:text-valencia-orange">
                <Mail className="w-4 h-4 mr-2" />
                info@terretahub.com
              </a>
              <a href="tel:+34600000000" className="flex items-center text-gray-300 hover:text-valencia-orange">
                <Phone className="w-4 h-4 mr-2" />
                +34 600 000 000
              </a>
              <a href="https://terretahub.com" className="flex items-center text-gray-300 hover:text-valencia-orange">
                <Globe className="w-4 h-4 mr-2" />
                terretahub.com
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/terretahub" className="text-gray-300 hover:text-valencia-orange">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/terretahub" className="text-gray-300 hover:text-valencia-orange">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Terreta Hub. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}