import { NextResponse } from 'next/server'
import { getAllCitySlugs } from '@/lib/cities'
import { getAllServiceSlugs } from '@/lib/services'

export const runtime = 'nodejs'
export const revalidate = 60 * 60 * 6 // 6h

function xmlEscape(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export async function GET() {
  const baseUrl = 'https://www.schoener-fliesen.com'

  const base: { loc: string; changefreq: string; priority: string }[] = [
    { loc: `${baseUrl}`, changefreq: 'monthly', priority: '1.0' },
    { loc: `${baseUrl}/ueber-uns`, changefreq: 'monthly', priority: '0.9' },
    { loc: `${baseUrl}/leistungen`, changefreq: 'monthly', priority: '0.9' },
    { loc: `${baseUrl}/referenzen`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/showroom`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/hersteller`, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/servicegebiet`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/kontakt`, changefreq: 'yearly', priority: '0.6' },
    { loc: `${baseUrl}/impressum`, changefreq: 'yearly', priority: '0.2' },
    { loc: `${baseUrl}/datenschutz`, changefreq: 'yearly', priority: '0.2' },
  ]

  const cities = getAllCitySlugs().map((slug) => ({
    loc: `${baseUrl}/${slug}`,
    changefreq: 'monthly',
    priority: '0.9',
  }))

  const services = getAllServiceSlugs().map((slug) => ({
    loc: `${baseUrl}/leistungen/${slug}`,
    changefreq: 'monthly',
    priority: '0.85',
  }))

  const urls = [...base, ...cities, ...services]

  const now = new Date().toISOString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map((u) => `\n  <url>\n    <loc>${xmlEscape(u.loc)}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('') +
    `\n</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=21600, max-age=21600, stale-while-revalidate=86400',
    },
  })
}

