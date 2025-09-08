# Tienda Ropa con Vite

Este proyecto ya está configurado para usarse con **Vite**.

## Scripts disponibles

- `npm run dev` → inicia servidor local de desarrollo (hot reload).
- `npm run build` → genera la carpeta `dist/` optimizada y lista para producción.
- `npm run preview` → vista previa del build final.

## Estructura recomendada
- `src/` → código editable (HTML, CSS, JS, imágenes).
- `dist/` → salida generada por Vite (no editar manualmente).

## Primeros pasos
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Construye versión optimizada:
   ```bash
   npm run build
   ```

## Notas
- CSS se minifica automáticamente con **cssnano**.
- JS se optimiza con **Vite/esbuild**.
- Puedes agregar plugins de Vite para optimizar imágenes, usar frameworks, etc.
