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
    slug: "sankt-augustin",
    name: "Sankt Augustin",
    region: "Stadt",
    distance: "0 km",
    postalCodes: ["53757"],
    keywords: ["Fliesenleger Sankt Augustin", "Badsanierung Sankt Augustin", "Badezimmer Sankt Augustin", "Heizung Sankt Augustin"],
  },
  {
    slug: "bonn",
    name: "Bonn",
    region: "Bundesstadt",
    distance: "8 km",
    postalCodes: ["53111", "53113", "53115", "53117", "53119", "53121", "53123", "53125", "53127", "53129"],
    keywords: ["Fliesenleger Bonn", "Badsanierung Bonn", "Badezimmer Renovierung Bonn", "Naturstein Bonn", "Heizung Bonn"],
  },
  // Stadtteile Sankt Augustin
  { slug: "menden", name: "Menden", region: "Stadtteil Sankt Augustin", distance: "2 km", keywords: ["Fliesenleger Menden", "Badsanierung Menden"] },
  { slug: "niederpleis", name: "Niederpleis", region: "Stadtteil Sankt Augustin", distance: "3 km", keywords: ["Fliesenleger Niederpleis", "Badsanierung Niederpleis"] },
  { slug: "hangelar", name: "Hangelar", region: "Stadtteil Sankt Augustin", distance: "4 km", keywords: ["Fliesenleger Hangelar", "Badsanierung Hangelar"] },
  { slug: "muelldorf", name: "Mülldorf", region: "Stadtteil Sankt Augustin", distance: "2 km", keywords: ["Fliesenleger Mülldorf", "Badsanierung Mülldorf"] },
  { slug: "birlinghoven", name: "Birlinghoven", region: "Stadtteil Sankt Augustin", distance: "3 km", keywords: ["Fliesenleger Birlinghoven", "Badsanierung Birlinghoven"] },

  // Stadtteile Bonn
  { slug: "beuel", name: "Beuel", region: "Stadtbezirk Bonn", distance: "5 km", keywords: ["Fliesenleger Beuel", "Badsanierung Beuel"] },
  { slug: "bad-godesberg", name: "Bad Godesberg", region: "Stadtbezirk Bonn", distance: "10 km", keywords: ["Fliesenleger Bad Godesberg", "Badsanierung Bad Godesberg"] },
  { slug: "poppelsdorf", name: "Poppelsdorf", region: "Stadtteil Bonn", distance: "9 km", keywords: ["Fliesenleger Poppelsdorf", "Badsanierung Poppelsdorf"] },
  { slug: "duisdorf", name: "Duisdorf", region: "Stadtteil Bonn", distance: "11 km", keywords: ["Fliesenleger Duisdorf", "Badsanierung Duisdorf"] },
  { slug: "mehlem", name: "Mehlem", region: "Stadtteil Bonn", distance: "14 km", keywords: ["Fliesenleger Mehlem", "Badsanierung Mehlem"] },
  { slug: "vilich", name: "Vilich", region: "Stadtteil Bonn", distance: "6 km", keywords: ["Fliesenleger Vilich", "Badsanierung Vilich"] },
  { slug: "holzlar", name: "Holzlar", region: "Stadtteil Bonn", distance: "4 km", keywords: ["Fliesenleger Holzlar", "Badsanierung Holzlar"] },
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
  // Köln Stadtbezirke und Stadtteile (Auswahl)
  { slug: "porz", name: "Porz", region: "Stadtbezirk Köln", distance: "15 km", keywords: ["Fliesenleger Porz", "Badsanierung Porz"] },
  { slug: "rodenkirchen", name: "Rodenkirchen", region: "Stadtbezirk Köln", distance: "20 km", keywords: ["Fliesenleger Rodenkirchen", "Badsanierung Rodenkirchen"] },
  { slug: "ensen", name: "Ensen", region: "Stadtteil Köln", distance: "18 km", keywords: ["Fliesenleger Ensen", "Badsanierung Ensen"] },
  { slug: "innenstadt", name: "Innenstadt", region: "Stadtbezirk Köln", distance: "25 km", keywords: ["Fliesenleger Köln Innenstadt", "Badsanierung Köln Innenstadt"] },
  { slug: "lindenthal", name: "Lindenthal", region: "Stadtbezirk Köln", distance: "28 km", keywords: ["Fliesenleger Lindenthal", "Badsanierung Lindenthal"] },
  { slug: "ehrenfeld", name: "Ehrenfeld", region: "Stadtbezirk Köln", distance: "30 km", keywords: ["Fliesenleger Ehrenfeld", "Badsanierung Ehrenfeld"] },
  { slug: "nippes", name: "Nippes", region: "Stadtbezirk Köln", distance: "30 km", keywords: ["Fliesenleger Nippes", "Badsanierung Nippes"] },
  { slug: "chorweiler", name: "Chorweiler", region: "Stadtbezirk Köln", distance: "37 km", keywords: ["Fliesenleger Chorweiler", "Badsanierung Chorweiler"] },
  { slug: "muelheim", name: "Mülheim", region: "Stadtbezirk Köln", distance: "33 km", keywords: ["Fliesenleger Mülheim", "Badsanierung Mülheim"] },
  { slug: "kalk", name: "Kalk", region: "Stadtbezirk Köln", distance: "30 km", keywords: ["Fliesenleger Kalk", "Badsanierung Kalk"] },
  { slug: "deutz", name: "Deutz", region: "Stadtteil Köln", distance: "27 km", keywords: ["Fliesenleger Deutz", "Badsanierung Deutz"] },
  { slug: "suelz", name: "Sülz", region: "Stadtteil Köln", distance: "27 km", keywords: ["Fliesenleger Sülz", "Badsanierung Sülz"] },
  { slug: "klettenberg", name: "Klettenberg", region: "Stadtteil Köln", distance: "28 km", keywords: ["Fliesenleger Klettenberg", "Badsanierung Klettenberg"] },
  { slug: "bayenthal", name: "Bayenthal", region: "Stadtteil Köln", distance: "26 km", keywords: ["Fliesenleger Bayenthal", "Badsanierung Bayenthal"] },
  { slug: "marienburg", name: "Marienburg", region: "Stadtteil Köln", distance: "26 km", keywords: ["Fliesenleger Marienburg", "Badsanierung Marienburg"] },

  // Rand Köln / Region
  { slug: "huerth", name: "Hürth", region: "Stadt", distance: "32 km", keywords: ["Fliesenleger Hürth", "Badsanierung Hürth"] },
  { slug: "frechen", name: "Frechen", region: "Stadt", distance: "35 km", keywords: ["Fliesenleger Frechen", "Badsanierung Frechen"] },
  { slug: "bruehl", name: "Brühl", region: "Stadt", distance: "28 km", keywords: ["Fliesenleger Brühl", "Badsanierung Brühl"] },
  { slug: "pulheim", name: "Pulheim", region: "Stadt", distance: "40 km", keywords: ["Fliesenleger Pulheim", "Badsanierung Pulheim"] },

  // Eifel / Kreis Euskirchen (Auswahl)
  { slug: "euskirchen", name: "Euskirchen", region: "Kreisstadt", distance: "35 km", keywords: ["Fliesenleger Euskirchen", "Badsanierung Euskirchen"] },
  { slug: "mechernich", name: "Mechernich", region: "Stadt", distance: "45 km", keywords: ["Fliesenleger Mechernich", "Badsanierung Mechernich"] },
  { slug: "bad-muenstereifel", name: "Bad Münstereifel", region: "Stadt", distance: "45 km", keywords: ["Fliesenleger Bad Münstereifel", "Badsanierung Bad Münstereifel"] },
  { slug: "zuelpich", name: "Zülpich", region: "Stadt", distance: "40 km", keywords: ["Fliesenleger Zülpich", "Badsanierung Zülpich"] },
  { slug: "kall", name: "Kall", region: "Gemeinde", distance: "55 km", keywords: ["Fliesenleger Kall", "Badsanierung Kall"] },
  { slug: "weilerswist", name: "Weilerswist", region: "Gemeinde", distance: "30 km", keywords: ["Fliesenleger Weilerswist", "Badsanierung Weilerswist"] },
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
