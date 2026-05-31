import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: Request) {
  if (!GOOGLE_SCRIPT_URL) {
    return NextResponse.json({ error: "Configuración de CRM no disponible" }, { status: 500 });
  }

  try {
    const body = await request.json();
    
    if (!body.nombre || !body.whatsapp) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        timestamp: new Date().toISOString(),
        proyect: "Vista del Río"
      }),
    });

    return NextResponse.json({ success: true, message: "Lead sincronizado con el CRM" });
  } catch (error) {
    console.error("CRM Sync Error:", error);
    return NextResponse.json({ error: "Error de conexión con el servidor" }, { status: 500 });
  }
}
