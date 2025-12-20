import { MetadataRoute } from 'next'
import { getAllCitySlugs } from '@/lib/cities'
import { getAllServiceSlugs } from '@/lib/services'

// Force Node.js runtime for compatibility
export const runtime = 'nodejs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.schoener-fliesen.com'

  // Basis-Seiten mit echten lastmod (auf Basis relevanter Dateien)
  const basePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/showroom`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hersteller`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servicegebiet`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ]

  // Stadt-Seiten dynamisch hinzufügen
  const citySlugs = getAllCitySlugs()
  const cityPages = citySlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Leistungs-Detailseiten hinzufügen
  const serviceSlugs = getAllServiceSlugs()
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/leistungen/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Alle Seiten kombinieren
  return [...basePages, ...cityPages, ...servicePages]
}
