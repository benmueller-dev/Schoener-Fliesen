# Google Analytics & Search Console Setup

## 📊 Google Analytics 4 Einrichtung

### Schritt 1: Google Analytics Konto erstellen
1. Gehen Sie zu https://analytics.google.com
2. Klicken Sie auf "Messung starten"
3. Erstellen Sie ein Konto:
   - **Kontoname**: Schöner Fliesen GmbH
   - Akzeptieren Sie die Datenfreigabe-Einstellungen

### Schritt 2: Property erstellen
1. **Property-Name**: Schöner Fliesen Website
2. **Zeitzone**: Deutschland (GMT+1)
3. **Währung**: EUR - Euro (€)
4. Klicken Sie auf "Weiter"

### Schritt 3: Unternehmensdetails
1. **Branche**: Handwerks- und Baugewerbe
2. **Unternehmensgröße**: Klein (1-10 Mitarbeiter)
3. **Verwendungszweck**: Auswählen nach Bedarf
4. Klicken Sie auf "Erstellen"

### Schritt 4: Datenstream einrichten
1. Wählen Sie **"Web"**
2. **Website-URL**: https://www.schoener-fliesen.com
3. **Stream-Name**: Schöner Fliesen Website
4. **Erweiterte Messoptionen aktivieren** (alle anklicken)
5. Klicken Sie auf "Stream erstellen"

### Schritt 5: Measurement ID kopieren
1. Sie sehen jetzt Ihre **Mess-ID** (Format: `G-XXXXXXXXXX`)
2. Kopieren Sie diese ID
3. Erstellen Sie eine `.env.local` Datei im Projekt-Root:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Ersetzen Sie `G-XXXXXXXXXX` mit Ihrer echten ID

### Schritt 6: Bei Vercel deployen
1. Gehen Sie zu https://vercel.com/schoener-fliesen
2. Klicken Sie auf Ihr Projekt
3. Gehen Sie zu **Settings** → **Environment Variables**
4. Fügen Sie hinzu:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Ihre `G-XXXXXXXXXX` ID
   - **Environment**: Production, Preview, Development
5. Klicken Sie auf "Save"
6. **Wichtig**: Redeploy das Projekt nach dem Hinzufügen

---

## 🔍 Google Search Console Einrichtung

### Schritt 1: Property hinzufügen
1. Gehen Sie zu https://search.google.com/search-console
2. Klicken Sie auf "Property hinzufügen"
3. Wählen Sie **"URL-Präfix"**
4. Geben Sie ein: `https://www.schoener-fliesen.com`
5. Klicken Sie auf "Weiter"

### Schritt 2: Inhaberschaft bestätigen (Empfohlene Methode)
**Option A: HTML-Tag-Methode**
1. Google zeigt Ihnen ein Meta-Tag wie:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXX" />
   ```
2. Kopieren Sie den `content` Wert
3. Fügen Sie in `src/app/layout.tsx` im Metadata hinzu:
   ```typescript
   export const metadata: Metadata = {
     // ... existing metadata
     verification: {
       google: 'XXXXXXXXXXXXXXXX', // Ihr Verification Code
     },
   };
   ```
4. Deploy die Änderungen zu Vercel
5. Gehen Sie zurück zu Search Console und klicken Sie auf "Bestätigen"

**Option B: Domain-Verifizierung über DNS**
1. Wählen Sie "Domain" statt "URL-Präfix"
2. Google gibt Ihnen einen TXT-Record
3. Fügen Sie diesen bei Ihrem Domain-Provider hinzu
4. Warten Sie 24-48 Stunden
5. Klicken Sie auf "Bestätigen"

### Schritt 3: Sitemap einreichen
1. Nach erfolgreicher Verifizierung gehen Sie zu **Sitemaps** (linke Seitenleiste)
2. Geben Sie ein: `sitemap.xml`
3. Klicken Sie auf "Senden"
4. Status sollte nach einigen Stunden auf "Erfolgreich" wechseln

### Schritt 4: Wichtige Einstellungen
1. **URL-Parameter**: Keine Änderung nötig
2. **Crawling-Geschwindigkeit**: Automatisch
3. **Internationale Ausrichtung**: Deutschland (de)
4. **Mobile Nutzerfreundlichkeit**: Prüfen nach 1-2 Wochen

---

## ✅ Checkliste nach Setup

- [ ] Google Analytics ID in `.env.local` und Vercel eingetragen
- [ ] Website neu deployed nach Umgebungsvariablen-Änderung
- [ ] Google Analytics zeigt Echtzeit-Daten (testen: Website besuchen)
- [ ] Google Search Console Property verifiziert
- [ ] Sitemap in Search Console eingereicht
- [ ] Nach 48h: Prüfen ob Sitemap erfolgreich gecrawlt wurde
- [ ] Nach 1 Woche: Erste SEO-Daten in Search Console verfügbar

---

## 🛡️ DSGVO-Konformität

Die Implementierung ist DSGVO-konform durch:
1. **IP-Anonymisierung**: `anonymize_ip: true` ist aktiviert
2. **Datenschutzerklärung**: Bereits auf /datenschutz vorhanden
3. **Cookie-Hinweis**: Optional ein Cookie-Banner hinzufügen
4. **Opt-Out Möglichkeit**: In Datenschutzerklärung erwähnt

### Optional: Cookie-Banner hinzufügen
Für volle DSGVO-Konformität empfehle ich ein Cookie-Banner wie:
- [Cookiebot](https://www.cookiebot.com)
- [Cookie Notice](https://cookie-notice.com)
- [Usercentrics](https://usercentrics.com)

---

## 📈 Nach 1 Woche prüfen

### Google Analytics Dashboard
- Echtzeitnutzer sichtbar
- Seiten/Sitzung > 1
- Absprungrate < 70%
- Durchschnittliche Sitzungsdauer > 1:00

### Search Console
- Impressionen steigen
- Klicks messbar
- Durchschnittliche Position wird getrackt
- Keine Crawling-Fehler

---

## 🔧 Troubleshooting

**Problem: Google Analytics zeigt keine Daten**
- Prüfen Sie die `.env.local` Datei
- Vercel Environment Variables korrekt gesetzt?
- Website neu deployed nach Variables-Änderung?
- Browser-Adblocker ausschalten zum Testen
- In der Browser-Konsole nach Fehlern schauen

**Problem: Search Console Verifizierung fehlgeschlagen**
- Meta-Tag korrekt in `layout.tsx` eingefügt?
- Änderungen deployed?
- 24h warten und erneut versuchen
- Browser-Cache leeren

**Problem: Sitemap wird nicht gefunden**
- Prüfen Sie: https://www.schoener-fliesen.com/sitemap.xml
- Sollte XML-Datei mit allen URLs zeigen
- Falls leer: Neu deployen und warten

---

## 📞 Support

Bei Problemen:
1. Google Analytics Hilfe: https://support.google.com/analytics
2. Search Console Hilfe: https://support.google.com/webmasters
3. Next.js Analytics Docs: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
