# Guía de Migración

## Para Nuevo Dominio

1. Actualizar `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://nuevo-dominio.com
```

2. Rebuild y deploy

## Para Nuevo Proyecto

1. Copiar todo el proyecto
2. Ejecutar `npm install`
3. Crear nuevo `.env.local`
4. Configurar Google Apps Script propio
5. Actualizar constants.ts si es necesario

## Cambios de Configuración

### WhatsApp
Editar `src/lib/constants.ts` o variable de entorno.

### Datos del Apartamento
Editar `src/lib/constants.ts` - `APARTMENT_DATA`.

### Imágenes
Colocar en `/public/images/`:
- hero-bg.jpg
- apt-1.jpg
- apt-2.jpg
- apt-3.jpg