import { Navbar } from "@/components/Navbar";
import { useLanguage, LanguageProvider } from "@/contexts/LanguageContext";

const GroupsContent = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("groups.title")}</h1>
      <p className="text-xl text-gray-600">{t("groups.comingSoon")}</p>
    </div>
  );
};

const Groups = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <GroupsContent />
      </div>
    </LanguageProvider>
  );
};

export default Groups;