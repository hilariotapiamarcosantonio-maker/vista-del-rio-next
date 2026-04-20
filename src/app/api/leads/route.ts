import { NextResponse } from "next/server";

// SUSTITUIR CON TU URL DE GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyoyC_f2NCZh2tsu7SQSYxkQl8TnFTNXYmxiJbkgEOwYFZKdN5wzW2kAozL4EyERmef/exec"; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validación de seguridad básica
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
