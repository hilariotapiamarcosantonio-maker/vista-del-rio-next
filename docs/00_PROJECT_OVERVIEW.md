# Vista del Río - Project Overview

## Descripción
Sistema de landing pages inmobiliarias multi-campaña desarrollado para **Luma Premium**. Proyecto demostrativo replicable para proyectos inmobiliarios en República Dominicana.

## Estructura de Landing Pages
- `/` - Landing principal (venta de apartamento)
- `/inversor` - Landing para inversionistas
- `/corporativo` - Landing para compradores corporativos
- `/retiro` - Landing para propiedades de retiro

## Tecnologías
- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- Google Apps Script (CRM)

## Arquitectura de Leads
```
Cliente → Next.js API (/api/leads) → Google Apps Script → Google Sheets
```

## Propósito
Caso demostrativo para venta de unidad premium Vista del Río - Santo Domingo Este, RD.