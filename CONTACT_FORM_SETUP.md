# Kontaktformular Einrichtung

Das Kontaktformular ist jetzt vollständig implementiert und sendet E-Mails an:
- mueller.ben100@gmail.com
- info@schoener-fliesen.com

## Setup-Anleitung

### 1. Web3Forms API-Schlüssel erhalten

1. Besuchen Sie: https://web3forms.com
2. Registrieren Sie sich kostenlos (oder melden Sie sich an)
3. Erstellen Sie ein neues Formular
4. Kopieren Sie Ihren Access Key

### 2. Umgebungsvariable einrichten

1. Erstellen Sie eine `.env.local` Datei im Projekt-Root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fügen Sie Ihren Web3Forms Access Key ein:
   ```
   WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

### 3. Development-Server neu starten

```bash
npm run dev
```

## Features

- ✅ Datenschutz-Checkbox mit Link zur Datenschutzerklärung
- ✅ E-Mail-Versand an beide angegebenen E-Mail-Adressen
- ✅ Erfolgs- und Fehlermeldungen
- ✅ Formular wird nach erfolgreichem Versand zurückgesetzt
- ✅ Loading-Status während des Versendens
- ✅ Alle Pflichtfelder werden validiert

## Alternative E-Mail-Services

Falls Sie Web3Forms nicht verwenden möchten, können Sie auch andere Services nutzen:

### Resend (empfohlen für Production)
```bash
npm install resend
```

### SendGrid
```bash
npm install @sendgrid/mail
```

### Nodemailer (eigener SMTP-Server)
```bash
npm install nodemailer
```

Passen Sie die API-Route unter `src/app/api/contact/route.ts` entsprechend an.
