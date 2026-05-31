# Replication Playbook

## Para Replicar Este Proyecto

### 1. Estructura Base
```
/src/app
  /page.tsx          - Landing principal
  /inversor/page.tsx - Landing inversión
  /corporativo/      - Landing corporativa
  /retiro/           - Landing retiro
  /api/leads/route.ts - API de leads

/src/lib
  constants.ts       - Datos configurables

/public/images/     - Imágenes del proyecto
```

### 2. Pasos de Replicación

**Paso 1: Copiar Proyecto**
```bash
git clone [repo-url] nuevo-proyecto
cd nuevo-proyecto
```

**Paso 2: Instalar Dependencias**
```bash
npm install
```

**Paso 3: Configurar Variables**
```bash
cp .env.example .env.local
# Editar valores
```

**Step 4: Crear Google Apps Script**
- Ir a Google Sheets → Extensiones → Apps Script
- Implementar función para recibir POST y guardar en sheet
- Obtener URL de deployment
- Poner en `GOOGLE_SCRIPT_URL`

**Step 5: Personalizar**
- Editar constants.ts con datos del proyecto
- No modificar diseño existente
- Agregar nuevas landings si es necesario

**Step 6: Deploy**
```bash
npm run build
npm run start
# o deploy a Vercel
```

### 3. Landing Pages Adicionales

Para agregar nueva landing (ej: `/vivienda`):
1. Crear `/src/app/vivienda/page.tsx`
2. Copiar estructura de página existente
3. Ajustar contenido en constants.ts

### 4. Notas Importantes
- No exponer GOOGLE_SCRIPT_URL en documentación
- Mantener estructura de API `/api/leads`
- Preservar diseño existente