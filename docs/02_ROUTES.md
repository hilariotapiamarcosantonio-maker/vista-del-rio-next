# Rutas del Proyecto

## Páginas Públicas

| Ruta | Propósito |
|------|-----------|
| `/` | Landing principal - Venta de unidad |
| `/inversor` | Landing para inversionistas |
| `/corporativo` | Landing corporativa |
| `/retiro` | Landing para retiro |

## API

| Método | Ruta | Función |
|--------|------|---------|
| POST | `/api/leads` | Recepción de leads |

## Estructura de Lead
```json
{
  "nombre": "string",
  "whatsapp": "string",
  "email": "string (opcional)",
  "interes": "string (opcional)",
  "proyect": "Vista del Río"
}
```