import { MetadataRoute } from 'next'
import { getAllCitySlugs } from '@/lib/cities'
import { getAllServiceSlugs } from '@/lib/services'
import fs from 'fs'
import path from 'path'

function getMTimeSafe(p: string): number {
  try {
    const stat = fs.statSync(p)
    return stat.mtimeMs
  } catch {
    return 0
  }
}

function lastModFrom(paths: string[]): Date {
  const root = process.cwd()
  const mtimes = paths.map((rel) => getMTimeSafe(path.join(root, rel)))
  const max = Math.max(0, ...mtimes)
  return max > 0 ? new Date(max) : new Date()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.schoener-fliesen.com'

  // Basis-Seiten mit echten lastmod (auf Basis relevanter Dateien)
  const basePages = [
    {
      url: baseUrl,
      lastModified: lastModFrom([
        'src/app/page.tsx',
        'src/components/sections/Hero.tsx',
        'src/components/sections/Stats.tsx',
      ]),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: lastModFrom(['src/app/ueber-uns/page.tsx']),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: lastModFrom(['src/app/leistungen/page.tsx', 'src/lib/services.ts']),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: lastModFrom(['src/app/referenzen/page.tsx']),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/showroom`,
      lastModified: lastModFrom(['src/app/showroom/page.tsx', 'src/app/showroom/ShowroomGrid.tsx']),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hersteller`,
      lastModified: lastModFrom(['src/app/hersteller/page.tsx']),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/servicegebiet`,
      lastModified: lastModFrom(['src/app/servicegebiet/page.tsx', 'src/lib/cities.ts']),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: lastModFrom(['src/app/kontakt/page.tsx']),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: lastModFrom(['src/app/impressum/page.tsx']),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: lastModFrom(['src/app/datenschutz/page.tsx']),
      changeFrequency: 'yearly' as const,
      priority: 0.2,
    },
  ]

  // Stadt-Seiten dynamisch hinzufügen
  const citySlugs = getAllCitySlugs()
  const cityPages = citySlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: lastModFrom(['src/app/[city]/page.tsx', 'src/lib/cities.ts']),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Leistungs-Detailseiten hinzufügen
  const serviceSlugs = getAllServiceSlugs()
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/leistungen/${slug}`,
    lastModified: lastModFrom(['src/app/leistungen/[slug]/page.tsx', 'src/lib/services.ts']),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Alle Seiten kombinieren
  return [...basePages, ...cityPages, ...servicePages]
}
