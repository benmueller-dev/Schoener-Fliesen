// Städte-Konfiguration für lokale SEO-Seiten
export interface City {
  slug: string;
  name: string;
  region: string;
  distance: string;
  postalCodes?: string[];
  keywords: string[];
}

export const cities: City[] = [
  {
    slug: "bonn",
    name: "Bonn",
    region: "Bundesstadt",
    distance: "8 km",
    postalCodes: ["53111", "53113", "53115", "53117", "53119", "53121", "53123", "53125", "53127", "53129"],
    keywords: ["Fliesenleger Bonn", "Badsanierung Bonn", "Badezimmer Renovierung Bonn", "Naturstein Bonn", "Heizung Bonn"],
  },
  {
    slug: "siegburg",
    name: "Siegburg",
    region: "Kreisstadt",
    distance: "6 km",
    postalCodes: ["53721"],
    keywords: ["Fliesenleger Siegburg", "Badsanierung Siegburg", "Bad Siegburg", "Fliesen Siegburg"],
  },
  {
    slug: "troisdorf",
    name: "Troisdorf",
    region: "Stadt",
    distance: "7 km",
    postalCodes: ["53840", "53842", "53844"],
    keywords: ["Fliesenleger Troisdorf", "Badsanierung Troisdorf", "Badezimmer Troisdorf", "Heizung Troisdorf"],
  },
  {
    slug: "hennef",
    name: "Hennef",
    region: "Stadt",
    distance: "12 km",
    postalCodes: ["53773"],
    keywords: ["Fliesenleger Hennef", "Badsanierung Hennef", "Bad Hennef", "Fliesen Hennef"],
  },
  {
    slug: "koenigswinter",
    name: "Königswinter",
    region: "Stadt",
    distance: "15 km",
    postalCodes: ["53639"],
    keywords: ["Fliesenleger Königswinter", "Badsanierung Königswinter", "Bad Königswinter"],
  },
  {
    slug: "bad-honnef",
    name: "Bad Honnef",
    region: "Stadt",
    distance: "18 km",
    postalCodes: ["53604"],
    keywords: ["Fliesenleger Bad Honnef", "Badsanierung Bad Honnef", "Badezimmer Bad Honnef"],
  },
  {
    slug: "niederkassel",
    name: "Niederkassel",
    region: "Stadt",
    distance: "10 km",
    postalCodes: ["53859"],
    keywords: ["Fliesenleger Niederkassel", "Badsanierung Niederkassel", "Bad Niederkassel"],
  },
  {
    slug: "bornheim",
    name: "Bornheim",
    region: "Stadt",
    distance: "10 km",
    postalCodes: ["53332"],
    keywords: ["Fliesenleger Bornheim", "Badsanierung Bornheim", "Badezimmer Bornheim"],
  },
  {
    slug: "alfter",
    name: "Alfter",
    region: "Gemeinde",
    distance: "12 km",
    postalCodes: ["53347"],
    keywords: ["Fliesenleger Alfter", "Badsanierung Alfter", "Bad Alfter"],
  },
  {
    slug: "meckenheim",
    name: "Meckenheim",
    region: "Stadt",
    distance: "14 km",
    postalCodes: ["53340"],
    keywords: ["Fliesenleger Meckenheim", "Badsanierung Meckenheim", "Badezimmer Meckenheim"],
  },
  {
    slug: "rheinbach",
    name: "Rheinbach",
    region: "Stadt",
    distance: "16 km",
    postalCodes: ["53359"],
    keywords: ["Fliesenleger Rheinbach", "Badsanierung Rheinbach", "Bad Rheinbach"],
  },
  {
    slug: "swisttal",
    name: "Swisttal",
    region: "Gemeinde",
    distance: "18 km",
    postalCodes: ["53913"],
    keywords: ["Fliesenleger Swisttal", "Badsanierung Swisttal", "Badezimmer Swisttal"],
  },
  {
    slug: "wachtberg",
    name: "Wachtberg",
    region: "Gemeinde",
    distance: "11 km",
    postalCodes: ["53343"],
    keywords: ["Fliesenleger Wachtberg", "Badsanierung Wachtberg", "Bad Wachtberg"],
  },
  {
    slug: "much",
    name: "Much",
    region: "Gemeinde",
    distance: "20 km",
    postalCodes: ["53804"],
    keywords: ["Fliesenleger Much", "Badsanierung Much", "Badezimmer Much"],
  },
  {
    slug: "lohmar",
    name: "Lohmar",
    region: "Stadt",
    distance: "15 km",
    postalCodes: ["53797"],
    keywords: ["Fliesenleger Lohmar", "Badsanierung Lohmar", "Bad Lohmar"],
  },
  {
    slug: "ruppichteroth",
    name: "Ruppichteroth",
    region: "Gemeinde",
    distance: "22 km",
    postalCodes: ["53809"],
    keywords: ["Fliesenleger Ruppichteroth", "Badsanierung Ruppichteroth"],
  },
  {
    slug: "eitorf",
    name: "Eitorf",
    region: "Gemeinde",
    distance: "20 km",
    postalCodes: ["53783"],
    keywords: ["Fliesenleger Eitorf", "Badsanierung Eitorf", "Badezimmer Eitorf"],
  },
  {
    slug: "neunkirchen-seelscheid",
    name: "Neunkirchen-Seelscheid",
    region: "Gemeinde",
    distance: "18 km",
    postalCodes: ["53819"],
    keywords: ["Fliesenleger Neunkirchen-Seelscheid", "Badsanierung Neunkirchen"],
  },
];

// Funktion um Stadt per Slug zu finden
export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

// Alle Stadt-Slugs für static generation
export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
