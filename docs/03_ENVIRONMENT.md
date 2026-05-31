# Environment Variables

## Variables Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | URL canonical del sitio | `https://vistadelrio.com` |
| `GOOGLE_SCRIPT_URL` | URL del Apps Script (NO exponer) | `https://script.google.com/macros/s/...` |
| `NEXT_PUBLIC_WHATSAPP` | Número WhatsApp ventas | `18090000000` |

## Notas de Seguridad

- `GOOGLE_SCRIPT_URL` **nunca** debe exponerse en cliente
- El archivo `.env.local` está en `.gitignore`
- Solo `.env.example` se versiona (sin valores reales)
- En producción, configurar estas variables en el hosting

## Valores por Defecto
```typescript
// constants.ts
whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "18090000000"
```

## Hosting Recomendado
- Vercel (nativo Next.js)
- Railway
- Render