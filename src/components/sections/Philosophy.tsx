import { Gem, Droplets, PenTool } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group">
      <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-amber-500/50 transition-colors">
        <Icon className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const features: FeatureCardProps[] = [
  {
    icon: Gem,
    title: "Unkompromittierte Qualität",
    description:
      "Verwendung edelster Materialien. Von italienischem Marmor bis zu handgebürsteten Goldarmaturen.",
  },
  {
    icon: Droplets,
    title: "Nachhaltige Hydro-Technik",
    description:
      "Modernste Wasserspartechnologie integriert in zeitloses Design für ein reines Gewissen.",
  },
  {
    icon: PenTool,
    title: "Maßgeschneiderte Planung",
    description:
      "Jedes Projekt ist ein Unikat. Wir entwerfen Ihr Badezimmer basierend auf Ihrer persönlichen Routine.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="py-24 md:py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
