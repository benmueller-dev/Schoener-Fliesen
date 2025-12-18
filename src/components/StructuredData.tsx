import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.schoener-fliesen.com/#organization",
    "name": "Schöner Fliesen GmbH",
    "legalName": "Meisterbetrieb Schöner Fliesen GmbH Bad & Heizung",
    "url": "https://www.schoener-fliesen.com",
    "logo": "https://www.schoener-fliesen.com/favicon.jpg",
    "image": "https://www.schoener-fliesen.com/laden.jpg",
    "description": "Meisterbetrieb für Badsanierung, Fliesen & Heizung in Sankt Augustin. 25+ Jahre Erfahrung im Rhein-Sieg-Kreis.",
    "email": "info@schoener-fliesen.com",
    "telephone": "+491754018760",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hennefer Straße 25",
      "addressLocality": "Sankt Augustin",
      "addressRegion": "NRW",
      "postalCode": "53757",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.7731",
      "longitude": "7.1847"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+491754018760",
      "contactType": "customer service",
      "areaServed": "DE",
      "availableLanguage": ["German"]
    },
    "sameAs": [
      "https://www.facebook.com/schoener.fliesen",
      "https://www.instagram.com/schoener_fliesen"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Sankt Augustin"
      },
      {
        "@type": "City",
        "name": "Bonn"
      },
      {
        "@type": "City",
        "name": "Siegburg"
      },
      {
        "@type": "City",
        "name": "Troisdorf"
      },
      {
        "@type": "City",
        "name": "Hennef"
      },
      {
        "@type": "City",
        "name": "Königswinter"
      },
      {
        "@type": "City",
        "name": "Bad Honnef"
      },
      {
        "@type": "City",
        "name": "Niederkassel"
      },
      {
        "@type": "City",
        "name": "Bornheim"
      },
      {
        "@type": "City",
        "name": "Alfter"
      },
      {
        "@type": "City",
        "name": "Meckenheim"
      },
      {
        "@type": "City",
        "name": "Rheinbach"
      },
      {
        "@type": "City",
        "name": "Swisttal"
      },
      {
        "@type": "City",
        "name": "Wachtberg"
      },
      {
        "@type": "City",
        "name": "Much"
      },
      {
        "@type": "City",
        "name": "Lohmar"
      },
      {
        "@type": "City",
        "name": "Ruppichteroth"
      },
      {
        "@type": "City",
        "name": "Eitorf"
      },
      {
        "@type": "City",
        "name": "Neunkirchen-Seelscheid"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "50.7731",
          "longitude": "7.1847"
        },
        "geoRadius": "50000"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Leistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Badsanierung & Bäderbau",
            "description": "Komplette Badsanierung von der Planung bis zur Fertigstellung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fliesen & Naturstein",
            "description": "Präzise Verlegung von Wand- und Bodenfliesen, Naturstein und Mosaiken"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heizungsmodernisierung",
            "description": "Heizungsplanung, Montage und Modernisierung bestehender Anlagen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sanitärinstallation",
            "description": "Sanitär- und Klima-Installationen, Armaturentausch, Reparatur & Wartung"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Ramin Rostamitorab"
    },
    "foundingDate": "1999",
    "slogan": "Komplettrenovierung vom Badprofi"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.schoener-fliesen.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Über uns",
        "item": "https://www.schoener-fliesen.com/ueber-uns"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Leistungen",
        "item": "https://www.schoener-fliesen.com/leistungen"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Referenzen",
        "item": "https://www.schoener-fliesen.com/referenzen"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Kontakt",
        "item": "https://www.schoener-fliesen.com/kontakt"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Schöner Fliesen GmbH",
    "url": "https://www.schoener-fliesen.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.schoener-fliesen.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
