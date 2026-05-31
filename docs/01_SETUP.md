# Setup Guide

## Requisitos Previos
- Node.js 18+
- npm o yarn

## Instalación

```bash
npm install
```

## Configuración Inicial

1. Copiar archivo de variables:
```bash
cp .env.example .env.local
```

2. Editar `.env.local` con tus valores:
   - `NEXT_PUBLIC_SITE_URL` - URL de producción
   - `GOOGLE_SCRIPT_URL` - URL del Google Apps Script (secret)
   - `NEXT_PUBLIC_WHATSAPP` - Número de WhatsApp ventas

3. Ejecutar desarrollo:
```bash
npm run dev
```

## Build Producción
```bash
npm run build
npm start
```