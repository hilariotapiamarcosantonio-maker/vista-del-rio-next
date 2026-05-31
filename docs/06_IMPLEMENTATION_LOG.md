# Implementation Log

## Configuración Inicial

### Fecha: Mayo 2026
### Proyecto: Vista del Río - Luma Premium

## Cambios Realizados

### 1. Externalización de Configuración
- URL de Google Apps Script movida a variable de entorno
- Validación de existencia de variable en API
- Mensaje de error claro si no está configurada

### 2. Variables de Entorno
- Creado `.env.example` con estructura requerida
- NEXT_PUBLIC_SITE_URL para URL canonical
- GOOGLE_SCRIPT_URL para CRM (secreto)
- NEXT_PUBLIC_WHATSAPP para contacto ventas

### 3. Constants.ts
- WhatsApp ahora usa `process.env.NEXT_PUBLIC_WHATSAPP`
- Valor por defecto: "18090000000"

### 4. Documentación
- Creada carpeta `/docs/` con 7 archivos
- Guías de setup, rutas, entorno, migración
- Playbook de replicación para nuevos proyectos

## Decisiones de Diseño
- No modificar diseño visual
- No cambiar copy existente
- Mantener estructura de landing pages
- Preservar lógica comercial