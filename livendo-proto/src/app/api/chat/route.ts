import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not configured. Please add GEMINI_API_KEY to .env.local" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Construct the prompt context
    const context = `
      Jsi 'Livendo Assistant', inteligentní virtuální asistent pro realitní platformu. 
      Tvojí rolí je pomáhat zájemcům o bydlení s hledáním nájmu, sjednáváním prohlídek a odpovídáním na dotazy ohledně smluv.
      
      Styl komunikace: Profesionální, empatický, stručný a efektivní.
      Jsi součástí aplikace 'Livendo'.
      
      Kontext uživatele: Uživatel se dívá na nabídku bytů.
      
      Pokud se uživatel zeptá na smluvy, vysvětli mu, že Livendo používá digitální podpis a vše je vyřešeno do 15 minut.
      Pokud chce sjednat prohlídku, nabídni mu termíny zítra v 10:00 nebo 14:00.
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

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
