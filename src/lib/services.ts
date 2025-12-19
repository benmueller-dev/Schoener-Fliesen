import { Bath, Droplets, Wrench, Flame, Lightbulb, Palette, LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const services: Service[] = [
  {
    slug: "badsanierung-baederbau",
    icon: Bath,
    title: "Badsanierung & Bäderbau",
    subtitle: "Von der Planung bis zur Fertigstellung – alles aus einer Hand.",
    description: "Ihr Meisterbetrieb für komplette Badsanierung in Sankt Augustin und Umgebung. Von der ersten Planung bis zur schlüsselfertigen Übergabe sorgen wir für ein perfektes Ergebnis. Barrierefreie Lösungen, moderne Materialien und termingerechte Fertigstellung sind für uns selbstverständlich.",
    features: [
      "Beratung & Planung",
      "CAD-Visualisierung",
      "Barrierefreie Bäder",
      "Professionelle Bauleitung",
    ],
    process: [
      {
        step: 1,
        title: "Erstberatung & Aufmaß",
        description: "Wir besprechen Ihre Wünsche vor Ort in Sankt Augustin und nehmen exakte Maße auf.",
      },
      {
        step: 2,
        title: "Planung & Angebot",
        description: "Sie erhalten eine detaillierte Planung und ein transparentes Festpreis-Angebot.",
      },
      {
        step: 3,
        title: "Professionelle Umsetzung",
        description: "Unser Meisterteam setzt Ihr Bad termingerecht und mit höchster Präzision um.",
      },
      {
        step: 4,
        title: "Abnahme & Übergabe",
        description: "Nach gründlicher Endkontrolle übergeben wir Ihr neues Bad schlüsselfertig.",
      },
    ],
    benefits: [
      {
        title: "Alles aus einer Hand",
        description: "Ein Ansprechpartner für Ihr komplettes Bad – von Sanitär bis Elektrik.",
      },
      {
        title: "Transparente Festpreise",
        description: "Sie wissen von Anfang an, was Ihre Badsanierung kostet – keine versteckten Kosten.",
      },
      {
        title: "Termingerechte Fertigstellung",
        description: "Wir halten unsere Zusagen ein und übergeben pünktlich.",
      },
      {
        title: "Barrierefreie Lösungen",
        description: "Für jedes Alter: Wir planen und bauen Bäder, die ein Leben lang passen.",
      },
    ],
    seo: {
      title: "Badsanierung Sankt Augustin | Komplettbad vom Meisterbetrieb",
      description: "Badsanierung in Sankt Augustin ✓ Meisterbetrieb ✓ 25+ Jahre Erfahrung ✓ CAD-Planung ✓ Barrierefreie Bäder ✓ Festpreis ✓ Jetzt beraten lassen: 0175 4018760",
      keywords: [
        "Badsanierung Sankt Augustin",
        "Badumbau Rhein-Sieg-Kreis",
        "Barrierefreies Bad Sankt Augustin",
        "Komplettbad Meisterbetrieb",
        "Bad renovieren Bonn",
        "Bäder bauen Siegburg",
      ],
    },
  },
  {
    slug: "fliesen-naturstein",
    icon: Droplets,
    title: "Fliesen & Naturstein",
    subtitle: "Präzise Verlegung für langlebige Ergebnisse.",
    description: "Professionelle Fliesenverlegung in Sankt Augustin und Umgebung. Ob großformatige Fliesen, edle Natursteine oder aufwendige Mosaike – unser Meisterteam verlegt mit höchster Präzision. Perfekte Fugen, fachgerechte Abdichtung und jahrelange Haltbarkeit garantiert.",
    features: [
      "Wand- und Bodenfliesen",
      "Naturstein & Mosaike",
      "Untergrundvorbereitung",
      "Fugen- und Abdichtungsarbeiten",
    ],
    process: [
      {
        step: 1,
        title: "Materialberatung",
        description: "Wir zeigen Ihnen in unserem Showroom in Sankt Augustin verschiedene Fliesen und Natursteine.",
      },
      {
        step: 2,
        title: "Untergrundvorbereitung",
        description: "Wir prüfen den Untergrund und bereiten ihn fachgerecht vor – für perfekte Haftung.",
      },
      {
        step: 3,
        title: "Präzise Verlegung",
        description: "Millimetergenaue Arbeit mit Laser und Präzisionswerkzeug für ebene Flächen und perfekte Fugen.",
      },
      {
        step: 4,
        title: "Abnahme & Reinigung",
        description: "Wir übergeben Ihre neuen Fliesen sauber und bereit zur Nutzung.",
      },
    ],
    benefits: [
      {
        title: "Meisterhafte Präzision",
        description: "Perfekte Fugen, ebene Flächen – wir arbeiten mit höchster Genauigkeit.",
      },
      {
        title: "Hochwertige Materialien",
        description: "Wir verarbeiten nur erstklassige Fliesen und Natursteine.",
      },
      {
        title: "Fachgerechte Abdichtung",
        description: "Schutz vor Feuchtigkeit nach aktuellen DIN-Normen.",
      },
      {
        title: "Langlebige Ergebnisse",
        description: "Unsere Fliesenarbeiten halten ein Leben lang.",
      },
    ],
    seo: {
      title: "Fliesenverlegung Sankt Augustin | Meisterbetrieb für Fliesen & Naturstein",
      description: "Fliesenleger Sankt Augustin ✓ Meisterbetrieb ✓ Fliesen, Naturstein, Mosaik ✓ Präzise Verlegung ✓ 25+ Jahre Erfahrung ✓ Jetzt anfragen: 0175 4018760",
      keywords: [
        "Fliesenleger Sankt Augustin",
        "Naturstein verlegen Rhein-Sieg",
        "Fliesenverlegung Bonn",
        "Mosaik Fliesen Siegburg",
        "Bad Fliesen Meisterbetrieb",
        "Großformat Fliesen verlegen",
      ],
    },
  },
  {
    slug: "sanitaerinstallation-kundendienst",
    icon: Wrench,
    title: "Sanitärinstallation & Kundendienst",
    subtitle: "Zuverlässige Arbeit – sauber ausgeführt.",
    description: "Ihr Sanitär-Meisterbetrieb in Sankt Augustin für Neu- und Altbau. Von der kompletten Sanitärinstallation bis zum schnellen Kundendienst bei Notfällen – wir sind für Sie da. Professionelle Montage, zuverlässige Wartung und schnelle Reparaturen.",
    features: [
      "Sanitär- und Klima-Installationen",
      "Armaturentausch",
      "Reparatur & Wartung",
      "Kundendienst im Bestand",
    ],
    process: [
      {
        step: 1,
        title: "Bedarfsanalyse",
        description: "Wir besprechen Ihre Anforderungen und prüfen die bestehende Installation.",
      },
      {
        step: 2,
        title: "Planung & Angebot",
        description: "Sie erhalten ein detailliertes Angebot mit allen Positionen.",
      },
      {
        step: 3,
        title: "Fachgerechte Installation",
        description: "Montage aller Sanitärkomponenten nach aktuellen Standards.",
      },
      {
        step: 4,
        title: "Abnahme & Service",
        description: "Wir testen alle Leitungen und übergeben die Anlage funktionsbereit. Auf Wunsch übernehmen wir auch die Wartung.",
      },
    ],
    benefits: [
      {
        title: "Schneller Kundendienst",
        description: "Bei Notfällen sind wir schnell vor Ort in Sankt Augustin und Umgebung.",
      },
      {
        title: "Zuverlässige Arbeit",
        description: "Saubere Ausführung und termingerechte Fertigstellung.",
      },
      {
        title: "Faire Preise",
        description: "Transparente Kalkulation ohne versteckte Kosten.",
      },
      {
        title: "Kompetente Beratung",
        description: "Wir beraten Sie zu modernen Sanitärlösungen und Wassersparsystemen.",
      },
    ],
    seo: {
      title: "Sanitärinstallation Sankt Augustin | Meisterbetrieb für Sanitär",
      description: "Sanitärinstallation Sankt Augustin ✓ Meisterbetrieb ✓ Kundendienst ✓ Reparatur & Wartung ✓ Schneller Service ✓ Jetzt anrufen: 0175 4018760",
      keywords: [
        "Sanitärinstallation Sankt Augustin",
        "Sanitär Notdienst Rhein-Sieg",
        "Klempner Sankt Augustin",
        "Armaturentausch Bonn",
        "Sanitär Meisterbetrieb",
        "Wasserschaden Reparatur",
      ],
    },
  },
  {
    slug: "heizungsmodernisierung",
    icon: Flame,
    title: "Heizungsmodernisierung",
    subtitle: "Effiziente Technik für Wärme mit Zukunft.",
    description: "Heizungsmodernisierung vom Meisterbetrieb in Sankt Augustin. Wir planen und installieren moderne Heizsysteme für maximale Effizienz und niedrige Betriebskosten. Von der Gasheizung über Wärmepumpen bis zu Hybrid-Systemen – wir finden die beste Lösung für Sie.",
    features: [
      "Heizungsplanung & Montage",
      "Modernisierung bestehender Anlagen",
      "ATAG-Premiumsysteme",
      "Wartung & Inspektion",
    ],
    process: [
      {
        step: 1,
        title: "Bestandsaufnahme",
        description: "Wir analysieren Ihre aktuelle Heizung und Ihren Energiebedarf.",
      },
      {
        step: 2,
        title: "Planung & Beratung",
        description: "Gemeinsam wählen wir das optimale Heizsystem. Wir informieren Sie über Förderprogramme.",
      },
      {
        step: 3,
        title: "Professionelle Montage",
        description: "Fachgerechter Einbau und Anschluss aller Komponenten.",
      },
      {
        step: 4,
        title: "Einweisung & Wartung",
        description: "Wir erklären die Bedienung und bieten regelmäßige Wartung an.",
      },
    ],
    benefits: [
      {
        title: "Energieeffizient",
        description: "Moderne Heizsysteme senken Ihre Energiekosten deutlich.",
      },
      {
        title: "Zukunftssicher",
        description: "Wir setzen auf bewährte Technik und erneuerbare Energien.",
      },
      {
        title: "ATAG Premium-Partner",
        description: "Als ATAG-Partner bieten wir Ihnen hochwertige Premium-Heizsysteme.",
      },
      {
        title: "Komplett-Service",
        description: "Von der Planung über Installation bis zur Wartung – alles aus einer Hand.",
      },
    ],
    seo: {
      title: "Heizungsmodernisierung Sankt Augustin | Meisterbetrieb für Heizung",
      description: "Heizungsmodernisierung Sankt Augustin ✓ Meisterbetrieb ✓ ATAG-Partner ✓ Gasheizung, Wärmepumpe ✓ Förderberatung ✓ Jetzt anfragen: 0175 4018760",
      keywords: [
        "Heizungsmodernisierung Sankt Augustin",
        "Neue Heizung Rhein-Sieg",
        "Gasheizung austauschen Bonn",
        "Wärmepumpe installieren",
        "ATAG Heizung",
        "Heizung Meisterbetrieb",
      ],
    },
  },
  {
    slug: "spanndecken-beleuchtung",
    icon: Lightbulb,
    title: "Spanndecken & Beleuchtung",
    subtitle: "Licht schafft Atmosphäre.",
    description: "Spanndecken mit integrierter LED-Beleuchtung für Sankt Augustin und Umgebung. Perfekte Deckengestaltung für Bad und Wohnräume – schnell montiert, pflegeleicht und mit individuellen Lichtkonzepten. Schaffen Sie die perfekte Atmosphäre in Ihrem Zuhause.",
    features: [
      "Spanndecken mit LED-Technik",
      "Individuelle Lichtkonzepte",
      "Integration in Bad- und Wohnräume",
    ],
    process: [
      {
        step: 1,
        title: "Lichtplanung",
        description: "Wir entwickeln ein individuelles Beleuchtungskonzept für Ihre Räume.",
      },
      {
        step: 2,
        title: "Materialauswahl",
        description: "Auswahl der Spanndecke (matt, glänzend, bedruckt) und LED-Technik.",
      },
      {
        step: 3,
        title: "Schnelle Montage",
        description: "Staubfreie Installation in wenigen Stunden – inklusive LED-Integration und Verkabelung.",
      },
      {
        step: 4,
        title: "Einweisung",
        description: "Wir zeigen Ihnen die Bedienung Ihrer neuen Beleuchtung.",
      },
    ],
    benefits: [
      {
        title: "Schnelle Montage",
        description: "Spanndecken werden in wenigen Stunden montiert – fast ohne Schmutz.",
      },
      {
        title: "Perfekte Lichtgestaltung",
        description: "LED-Technik für individuelles Ambiente und niedrige Stromkosten.",
      },
      {
        title: "Pflegeleicht",
        description: "Abwaschbare Oberflächen – ideal für Badezimmer.",
      },
      {
        title: "Vielfältige Designs",
        description: "Matt, glänzend, bedruckt oder mit Sternenhimmel-Effekt.",
      },
    ],
    seo: {
      title: "Spanndecken & LED-Beleuchtung Sankt Augustin | Lichtkonzepte",
      description: "Spanndecken Sankt Augustin ✓ LED-Beleuchtung ✓ Individuelle Lichtkonzepte ✓ Schnelle Montage ✓ Bad & Wohnraum ✓ Jetzt beraten lassen: 0175 4018760",
      keywords: [
        "Spanndecken Sankt Augustin",
        "LED Beleuchtung Badezimmer",
        "Lichtkonzept Rhein-Sieg",
        "Spanndecke Bad Bonn",
        "Indirekte Beleuchtung",
        "Sternenhimmel Decke",
      ],
    },
  },
  {
    slug: "baddesign-beratung",
    icon: Palette,
    title: "Hochwertiges Baddesign & Beratung",
    subtitle: "Raumgestaltung mit Persönlichkeit.",
    description: "Individuelle Baddesign-Beratung in Sankt Augustin. Wir gestalten Ihr Bad als persönlichen Wohlfühlraum – mit hochwertigen Materialien, durchdachter Farbgestaltung und exklusiven Details. In Kooperation mit Swarovski Lighting für besondere Akzente.",
    features: [
      "Farb- und Materialberatung",
      "Individuelle Planung",
      "Dekor- und Ausstattungsauswahl",
      "Kooperation mit Swarovski Lighting",
    ],
    process: [
      {
        step: 1,
        title: "Design-Beratung",
        description: "Wir besprechen Ihren Stil und Ihre Vorstellungen in unserem Showroom.",
      },
      {
        step: 2,
        title: "Konzeptentwicklung",
        description: "Entwicklung eines harmonischen Farb- und Materialkonzepts für Ihr Bad.",
      },
      {
        step: 3,
        title: "Planung & Visualisierung",
        description: "Sie sehen Ihr neues Bad vorab in einer realistischen Planung.",
      },
      {
        step: 4,
        title: "Umsetzung",
        description: "Wir setzen das Design mit höchster Präzision um.",
      },
    ],
    benefits: [
      {
        title: "Individuelle Planung",
        description: "Jedes Bad wird nach Ihren persönlichen Wünschen gestaltet.",
      },
      {
        title: "Visualisierung",
        description: "Sie sehen Ihr Bad vorab und können Änderungen vornehmen.",
      },
      {
        title: "Exklusive Partner",
        description: "Zugang zu Premium-Marken wie Swarovski Lighting.",
      },
      {
        title: "Ganzheitliches Konzept",
        description: "Von der Farbwahl bis zur Beleuchtung – alles aus einem Guss.",
      },
    ],
    seo: {
      title: "Baddesign & Badplanung Sankt Augustin | Individuelle Planung vom Profi",
      description: "Baddesign Sankt Augustin ✓ Badplanung ✓ Individuelle Beratung ✓ Farb- & Materialkonzepte ✓ Swarovski Lighting ✓ Jetzt Termin: 0175 4018760",
      keywords: [
        "Baddesign Sankt Augustin",
        "Badplanung Rhein-Sieg",
        "Badgestaltung Bonn",
        "Luxusbad planen",
        "Swarovski Badezimmer",
        "Badberatung Meisterbetrieb",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
