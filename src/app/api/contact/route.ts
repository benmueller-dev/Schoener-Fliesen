import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, privacy } = body;

    // Validate required fields
    if (!name || !email || !message || !privacy) {
      return NextResponse.json(
        { error: "Alle Pflichtfelder müssen ausgefüllt werden." },
        { status: 400 }
      );
    }

    // Check if API key is configured
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!apiKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not set");
      return NextResponse.json(
        { error: "Server-Konfigurationsfehler: API-Schlüssel fehlt" },
        { status: 500 }
      );
    }

    console.log("Sending email with Web3Forms...");
    console.log("From:", name, email);

    // Email recipients
    const recipients = ["mueller.ben100@gmail.com", "info@schoener-fliesen.com"];

    // Using Web3Forms - Send as JSON instead of FormData
    const payload = {
      access_key: apiKey,
      subject: `Neue Kontaktanfrage von ${name}`,
      from_name: "Schöner Fliesen Website",
      email: email,
      name: name,
      phone: phone || "Nicht angegeben",
      message: message,
      to: recipients,
    };

    console.log("Sending to:", recipients.join(","));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers.get("content-type"));

    const responseText = await response.text();
    console.log("Raw response:", responseText.substring(0, 500));

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error("Failed to parse response as JSON");
      return NextResponse.json(
        { error: "Ungültige API-Antwort. Bitte überprüfen Sie den Web3Forms API-Schlüssel." },
        { status: 500 }
      );
    }

    console.log("Web3Forms response:", data);

    if (data.success) {
      console.log("Email sent successfully");
      return NextResponse.json(
        { message: "Nachricht erfolgreich versendet" },
        { status: 200 }
      );
    } else {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { error: data.message || "Fehler beim Versenden der E-Mail" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unbekannter Fehler beim Versenden" },
      { status: 500 }
    );
  }
}

