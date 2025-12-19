# Setup-Anleitung: Kontaktformular

Diese Anleitung hilft Ihnen bei der Einrichtung des Kontaktformulars mit File Upload und CAPTCHA-Schutz.

## Benötigte Services

1. **Cloudflare Turnstile** - CAPTCHA-Schutz (kostenlos)
2. **Uploadcare** - File Upload Service (kostenlos)
3. **Web3Forms** - E-Mail-Versand (bereits konfiguriert)

---

# 1. Cloudflare Turnstile Setup

## Was ist Cloudflare Turnstile?

Cloudflare Turnstile ist eine moderne, benutzerfreundliche CAPTCHA-Alternative, die Bots blockiert, ohne Benutzer mit lästigen Bild-Rätseln zu belästigen. In den meisten Fällen ist Turnstile komplett unsichtbar.

**Vorteile:**
- ✅ Kostenlos für bis zu 1 Million Anfragen/Monat
- ✅ Oft komplett unsichtbar (keine Puzzles)
- ✅ Bessere User Experience als traditionelle CAPTCHAs
- ✅ DSGVO-konform
- ✅ Einfache Integration

## Einrichtung

### 1. Cloudflare Account erstellen

Falls noch nicht vorhanden, erstellen Sie einen kostenlosen Cloudflare Account:
- Gehen Sie zu: https://dash.cloudflare.com/sign-up
- Registrieren Sie sich mit Ihrer E-Mail-Adresse

### 2. Turnstile Widget erstellen

1. Melden Sie sich in Ihrem Cloudflare Dashboard an
2. Navigieren Sie zu **Turnstile**: https://dash.cloudflare.com/?to=/:account/turnstile
3. Klicken Sie auf **"Add Site"** oder **"Widget hinzufügen"**
4. Füllen Sie das Formular aus:
   - **Site Name**: Schoener Fliesen Kontaktformular
   - **Domain**: Ihre Domain (z.B. `schoener-fliesen.com` oder `localhost` für lokale Entwicklung)
   - **Widget Mode**: Managed (empfohlen)
5. Klicken Sie auf **"Create"**

### 3. Site Key kopieren

Nach der Erstellung sehen Sie:
- **Site Key** (öffentlich, beginnt mit `0x4...`)
- **Secret Key** (privat, wird nur serverseitig benötigt)

Kopieren Sie den **Site Key**.

### 4. Environment Variable setzen

1. Öffnen Sie die Datei `.env.local` (erstellen Sie sie, falls sie nicht existiert)
2. Fügen Sie folgende Zeile hinzu:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=IHR_SITE_KEY_HIER
```

Ersetzen Sie `IHR_SITE_KEY_HIER` mit Ihrem echten Site Key.

**Beispiel:**
```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAABbC1D2E3F4G5H6I7
```

### 5. Test-Key für Entwicklung

Für lokale Entwicklung können Sie auch den offiziellen Test-Key verwenden:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
```

⚠️ **Wichtig:** Der Test-Key funktioniert überall und zeigt immer einen Erfolg an. Verwenden Sie ihn **nur** für Tests!

### 6. Server neu starten

Starten Sie Ihren Development Server neu:

```bash
npm run dev
```

### 7. Testen

1. Öffnen Sie die Kontaktseite: http://localhost:3000/kontakt
2. Sie sollten nun das Turnstile Widget sehen (meist als kleine Checkbox oder komplett unsichtbar)
3. Füllen Sie das Formular aus und testen Sie die Absendung

## Weitere Konfiguration (Optional)

### Domains hinzufügen

In den Turnstile-Einstellungen können Sie mehrere Domains hinzufügen:
- `localhost` (für Entwicklung)
- `schoener-fliesen.com` (Production)
- `www.schoener-fliesen.com`

### Widget-Erscheinungsbild anpassen

In Ihren Turnstile-Einstellungen können Sie das Erscheinungsbild ändern:
- **Light Mode** (hell)
- **Dark Mode** (dunkel)
- **Auto** (passt sich der Website an)

Aktuell ist die Website im Dark Mode, daher wird Turnstile automatisch im Dark Mode angezeigt.

## Fehlerbehebung

### "Invalid site key" Fehler

- Überprüfen Sie, ob der Site Key korrekt in `.env.local` eingetragen ist
- Stellen Sie sicher, dass Ihre Domain in den Turnstile-Einstellungen autorisiert ist
- Starten Sie den Development Server neu

### Widget wird nicht angezeigt

- Überprüfen Sie die Browser-Konsole auf Fehler
- Stellen Sie sicher, dass das Turnstile-Script geladen wird
- Überprüfen Sie, ob Ad-Blocker das Widget blockieren

### CAPTCHA schlägt immer fehl

- Verwenden Sie den Test-Key `1x00000000000000000000AA` für lokale Tests
- Für Production: Überprüfen Sie, ob die Domain korrekt konfiguriert ist

---

# 2. Uploadcare Setup (File Upload)

## Was ist Uploadcare?

Uploadcare ist ein kostenloser File Upload Service, der es ermöglicht, Dateien sicher hochzuladen und zu hosten. Die hochgeladenen Dateien werden als Links in der E-Mail versendet.

**Vorteile:**
- ✅ Kostenlos für 3000 Uploads/Monat
- ✅ 3GB Storage & 3GB Traffic inklusive
- ✅ Automatische Bildoptimierung
- ✅ CDN-Hosting weltweit
- ✅ Keine Server-Konfiguration nötig

## Einrichtung

### 1. Uploadcare Account erstellen

1. Gehen Sie zu: https://uploadcare.com/accounts/signup/
2. Registrieren Sie sich mit Ihrer E-Mail-Adresse
3. Bestätigen Sie Ihre E-Mail-Adresse

### 2. Public Key erhalten

1. Nach der Anmeldung werden Sie zum Dashboard weitergeleitet
2. Klicken Sie auf **"API Keys"** im Menü
3. Kopieren Sie Ihren **Public Key** (beginnt normalerweise mit Buchstaben/Zahlen)

### 3. Environment Variable setzen

1. Öffnen Sie die Datei `.env.local`
2. Fügen Sie folgende Zeile hinzu:

```bash
NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY=IHR_PUBLIC_KEY_HIER
```

**Beispiel:**
```bash
NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY=demopublickey
```

⚠️ **Hinweis:** Der Demo-Key `demopublickey` funktioniert für Tests, aber die Dateien werden nach 24 Stunden gelöscht. Für Production verwenden Sie Ihren eigenen Key!

### 4. Server neu starten

```bash
npm run dev
```

### 5. Testen

1. Öffnen Sie die Kontaktseite: http://localhost:3000/kontakt
2. Laden Sie eine Testdatei hoch (Bild oder PDF)
3. Sie sollten ein grünes Häkchen sehen, wenn der Upload erfolgreich war
4. Senden Sie das Formular ab
5. In der E-Mail finden Sie die Upload-Links zu den Dateien

## Wie funktioniert es?

Wenn Benutzer Dateien hochladen:
1. Dateien werden direkt zu Uploadcare hochgeladen
2. Sie erhalten einen Link (z.B. `https://ucarecdn.com/abc123/badezimmer.jpg`)
3. Diese Links werden in der E-Mail mitgesendet
4. Sie können auf die Links klicken, um die Dateien anzusehen/herunterzuladen

**E-Mail-Format:**
```
Von: Max Mustermann
Email: max@example.com
Nachricht: Ich hätte gerne ein Angebot...

--- Hochgeladene Dateien ---

📎 Badezimmer1.jpg
https://ucarecdn.com/abc123/badezimmer1.jpg

📎 Inspiration.pdf
https://ucarecdn.com/def456/inspiration.pdf
```

## Einstellungen (Optional)

### Upload-Limits anpassen

In `src/components/FileUpload.tsx` können Sie die Limits ändern:

```tsx
<FileUpload
  onFilesChange={setFiles}
  maxFiles={5}      // Maximale Anzahl Dateien (Standard: 5)
  maxSizeMB={10}    // Maximale Dateigröße in MB (Standard: 10)
/>
```

### Erlaubte Dateitypen

Aktuell erlaubt: Bilder (JPG, PNG, WebP, HEIC) und PDF

Um weitere Formate zu erlauben, bearbeiten Sie `src/components/FileUpload.tsx`:
```tsx
const validTypes = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'application/pdf'
  // Weitere hinzufügen...
];
```

## Fehlerbehebung

### Upload schlägt fehl

- Überprüfen Sie Ihre Internetverbindung
- Prüfen Sie, ob der Public Key korrekt ist
- Stellen Sie sicher, dass die Datei nicht zu groß ist (Standard: max 10MB)
- Überprüfen Sie die Browser-Konsole auf Fehler

### "Upload fehlgeschlagen" Fehler

- Der Public Key ist möglicherweise ungültig
- Uploadcare-Service könnte vorübergehend nicht verfügbar sein
- Überprüfen Sie Ihr Uploadcare-Dashboard auf Quota-Limits

### Dateien werden nach 24h gelöscht

- Sie verwenden vermutlich den Demo-Key `demopublickey`
- Erstellen Sie einen eigenen Uploadcare Account und verwenden Sie Ihren eigenen Public Key

## Support

Bei Fragen zu Uploadcare:
- Dokumentation: https://uploadcare.com/docs/
- Support: https://uploadcare.com/support/

Bei Fragen zu Cloudflare Turnstile:
- Dokumentation: https://developers.cloudflare.com/turnstile/
- Community Forum: https://community.cloudflare.com/

Bei technischen Fragen zur Website-Integration:
- GitHub Issues: [Link zu Ihrem Repository]
