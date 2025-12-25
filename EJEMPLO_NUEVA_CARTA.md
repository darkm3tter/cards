# 📝 Cómo agregar una nueva carta

## Paso 1: Agregar el sobre en `src/data/sobres.json`

Abre el archivo `src/data/sobres.json` y agrega un nuevo objeto:

```json
{
  "id": "carta-3",
  "titulo": "Mi Nueva Carta",
  "fecha": "2024-01-25",
  "ruta": "/cartas/carta-3"
}
```

**Importante:** 
- El `id` debe ser único
- El `ruta` debe coincidir con la carpeta que vas a crear en el paso 2

## Paso 2: Crear la carpeta y archivo de la carta

Crea una nueva carpeta en `src/app/cartas/` con el nombre que pusiste en la ruta (sin el `/cartas/`).

Por ejemplo, si la ruta es `/cartas/carta-3`, crea:
- `src/app/cartas/carta-3/page.tsx`

## Paso 3: Escribir el contenido de la carta

Copia este template y personalízalo:

```tsx
import Link from 'next/link';

export default function Carta3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-white to-rose-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-8 transition-colors"
        >
          ← Volver
        </Link>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-pink-100 dark:border-pink-900/30 p-8 md:p-12">
          <div className="prose prose-pink dark:prose-invert max-w-none">
            <h1 className="text-3xl font-light text-pink-600 dark:text-pink-400 mb-2">
              Mi Nueva Carta
            </h1>
            <p className="text-sm text-pink-400 dark:text-pink-500 mb-8">
              25 de enero de 2024
            </p>
            
            <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4">
              {/* Escribe aquí el contenido de tu carta */}
              <p>
                Tu contenido aquí...
              </p>
              
              {/* Puedes agregar más párrafos */}
              <p>
                Más contenido...
              </p>
              
              {/* Puedes agregar imágenes */}
              {/* <img src="/tu-imagen.jpg" alt="Descripción" className="rounded-lg my-4" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Paso 4: Personalizar

Puedes:
- Cambiar el título y fecha
- Agregar texto, imágenes, componentes
- Usar cualquier componente de React
- Agregar animaciones con Tailwind
- Importar otros componentes que crees

## Ejemplo completo

Mira los ejemplos en:
- `src/app/cartas/carta-1/page.tsx`
- `src/app/cartas/carta-2/page.tsx`

¡Listo! Tu nueva carta aparecerá automáticamente en la página principal como un sobre.


