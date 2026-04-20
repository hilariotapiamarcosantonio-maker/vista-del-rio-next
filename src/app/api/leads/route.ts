import { NextResponse } from "next/server";

const WEBHOOK_URL = "TU_URL_DE_MAKE_O_ZAPIER";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Enviamos los datos al Webhook que los inyectará en Google Sheets
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...body
      }),
    });

    return NextResponse.json({ 
      success: true, 
      message: "Dossier solicitado con éxito. Lead capturado." 
    }, { status: 200 });

  } catch (error) {
    console.error("Error capturando lead:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Error al procesar la solicitud." 
    }, { status: 500 });
  }
}
