import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Calendar, Group, Activity } from "lucide-react";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t("features.community"),
      color: "text-valencia-orange",
      bgColor: "bg-valencia-orange/10",
    },
    {
      icon: Calendar,
      title: t("features.events"),
      color: "text-valencia-blue",
      bgColor: "bg-valencia-blue/10",
    },
    {
      icon: Group,
      title: t("features.groups"),
      color: "text-valencia-terracotta",
      bgColor: "bg-valencia-terracotta/10",
    },
    {
      icon: Activity,
      title: t("features.activities"),
      color: "text-valencia-sage",
      bgColor: "bg-valencia-sage/10",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`p-4 rounded-full ${feature.bgColor} ${feature.color} mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}