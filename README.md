# 💌 Cartas Virtuales

Un espacio minimalista con tonos rosas para crear y compartir cartas virtuales. Cada sobre representa una carta que puedes personalizar completamente con código.

## 🎨 Características

- ✨ Diseño minimalista con tonos rosas suaves
- 💌 Sobres interactivos que se abren al hacer hover
- 📝 Cada carta es una página web que puedes personalizar completamente
- 🌙 Modo oscuro automático
- 📱 Diseño responsive
- 🎯 Estructura simple y fácil de extender

## 🚀 Cómo usar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### 3. Abrir en el navegador

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Agregar una nueva carta

Para agregar una nueva carta, sigue estos pasos:

### 1. Agregar el sobre en `src/data/sobres.json`

```json
{
  "id": "carta-3",
  "titulo": "Mi Nueva Carta",
  "fecha": "2024-01-25",
  "ruta": "/cartas/carta-3"
}
```

### 2. Crear la página de la carta

Crea un nuevo archivo en `src/app/cartas/carta-3/page.tsx`:

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 3. Personaliza tu carta

Puedes agregar:
- Texto personalizado
- Imágenes
- Componentes de React
- Animaciones
- Cualquier cosa que puedas hacer en React/Next.js

## 📁 Estructura del Proyecto

```
page/
├── src/
│   ├── app/
│   │   ├── cartas/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx      # Página dinámica (opcional)
│   │   │   ├── carta-1/
│   │   │   │   └── page.tsx      # Primera carta
│   │   │   └── carta-2/
│   │   │       └── page.tsx      # Segunda carta
│   │   ├── layout.tsx            # Layout principal
│   │   └── page.tsx              # Página principal (galería de sobres)
│   ├── components/
│   │   └── Sobre.tsx             # Componente del sobre
│   └── data/
│       └── sobres.json           # Configuración de los sobres
```

## 🎨 Paleta de Colores

El diseño usa tonos rosas minimalistas:
- Rosa claro: `pink-50`, `pink-100`, `pink-200`
- Rosa medio: `pink-400`, `pink-500`, `pink-600`
- Rosa oscuro: `pink-700`, `pink-800`, `pink-900`

## 🛠️ Tecnologías

- **Next.js 16** - Framework de React
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos

## 💡 Tips

- Cada carta es completamente independiente, puedes hacer lo que quieras en cada una
- El diseño es minimalista por defecto, pero puedes agregar cualquier estilo
- Usa componentes de React para reutilizar elementos entre cartas
- Las imágenes van en la carpeta `public/`

## 🚀 Deploy

### Opción 1: Vercel (Recomendado)

Vercel es la plataforma creada por los mismos desarrolladores de Next.js, por lo que es la opción más sencilla y optimizada.

#### Pasos:

1. **Instala Vercel CLI** (opcional, también puedes usar la interfaz web):
```bash
npm i -g vercel
```

2. **Haz login en Vercel**:
```bash
vercel login
```

3. **Haz deploy**:
```bash
vercel
```

4. **Sigue las instrucciones** en la terminal o ve a [vercel.com](https://vercel.com) y:
   - Conecta tu repositorio de GitHub/GitLab/Bitbucket
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"
   - ¡Listo! Tu sitio estará en línea en minutos

**Ventajas:**
- ✅ Gratis para proyectos personales
- ✅ Deploy automático con cada push a GitHub
- ✅ SSL automático
- ✅ CDN global
- ✅ Optimizado específicamente para Next.js

### Opción 2: Netlify

Netlify también es muy fácil de usar y tiene una buena integración con Next.js.

#### Pasos:

1. **Instala Netlify CLI** (opcional):
```bash
npm i -g netlify-cli
```

2. **Haz login**:
```bash
netlify login
```

3. **Haz deploy**:
```bash
netlify deploy --prod
```

O usa la interfaz web:
- Ve a [netlify.com](https://netlify.com)
- Conecta tu repositorio
- Configura el build command: `npm run build`
- Configura el publish directory: `.next`
- Haz clic en "Deploy"

### Opción 3: Deploy Manual

Si prefieres tener más control o usar tu propio servidor:

#### Pasos:

1. **Construye el proyecto**:
```bash
npm run build
```

2. **Inicia el servidor de producción**:
```bash
npm start
```

3. **Configura un servidor Node.js** (como PM2 para mantenerlo corriendo):
```bash
npm install -g pm2
pm2 start npm --name "cartas" -- start
pm2 save
pm2 startup
```

**Nota:** Asegúrate de tener Node.js 18+ instalado en tu servidor.

### Variables de Entorno

Si tu proyecto necesita variables de entorno:

1. **Crea un archivo `.env.local`** en la raíz del proyecto:
```env
NEXT_PUBLIC_VARIABLE=valor
```

2. **En Vercel/Netlify**, agrega las variables en la configuración del proyecto (Settings → Environment Variables)

### Verificar el Build Localmente

Antes de hacer deploy, puedes verificar que todo funciona correctamente:

```bash
npm run build
npm start
```

Luego visita `http://localhost:3000` para verificar que todo está funcionando.