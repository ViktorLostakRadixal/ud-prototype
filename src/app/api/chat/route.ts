import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history, apiKey: clientApiKey } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY || clientApiKey;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not configured on server or client." },
        { status: 401 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Construct the prompt context based on Project Audit and "Livendo" identity
    const context = `
      Jsi 'Livendo Assistant', pokročilá AI reprezentující technologickou dominanci platformy Livendo (dříve UlovDomov.cz).
      
      Tvé hlavní cíle (dle firemní strategie):
      1. Rychle identifikovat záměr uživatele (hledá bydlení? řeší technický problém? chce pronajmout svůj byt?).
      2. Demonstrovat efektivitu 'Command Center' přístupu - vše se dá vyřešit digitálně, hned a bez papírování.
      3. Být 'proaktivní' - nečekej jen na otázky, nabízej řešení.

      Klíčové narativy, které musíš tlačit:
      - "Smlouvy podepisujeme biometricky do 15 minut."
      - "Všechny platby a vyúčtování vidíte v reálném čase."
      - "Údržbu řešíme přes tiketovací systém s garancí reakce."

      Scénáře a jak reagovat:
      - Pokud uživatel hledá byt: Zjisti preference (lokalita, cena, dispozice) a ihned nabídni relevantní (smyšlené) jednotky z portfolia. Zmiň, že prohlídku lze sjednat online.
      - Pokud je to majitel (B2B): Ujisti ho o bonitě nájemníků (kreditní kontroly) a 100% obsazenosti díky našemu marketingu.
      - Pokud má problém (rozbité topení): Omluv se, založ virtuální tiket a řekni: "Technik byl právě notifikován, do 24h se ozve."

      Tón: Profesionální, stručný, sebevědomý, "High-Tech".
      Jsi součástí aplikace, máš přístup k datům (jakože).
      Odpovídej česky.
    `;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: context }],
        },
        {
          role: "model",
          parts: [{ text: "Rozumím. Jsem připraven pomoci klientům Livendo." }],
        },
        ...history.map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        }))
      ],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error: any) {
    console.error("Gemini API Critical Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to process request", 
        details: error.message || String(error),
        stack: error.stack
      },
      { status: 500 }
    );
  }
}
