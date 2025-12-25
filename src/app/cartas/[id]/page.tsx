import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const SOBRES_FILE = path.join(process.cwd(), 'src', 'data', 'sobres.json');

async function obtenerSobre(id: string) {
  try {
    if (!fs.existsSync(SOBRES_FILE)) {
      return null;
    }

    const fileContent = fs.readFileSync(SOBRES_FILE, 'utf-8');
    const sobres = JSON.parse(fileContent);
    
    return sobres.find((s: any) => s.id === id) || null;
  } catch (error) {
    console.error('Error obteniendo sobre:', error);
    return null;
  }
}

export default async function CartaPage({ params }: { params: { id: string } }) {
  const sobre = await obtenerSobre(params.id);

  if (!sobre) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-white to-rose-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Botón de volver */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-8 transition-colors"
        >
          ← Volver
        </Link>

        {/* Contenedor de la carta */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-pink-100 dark:border-pink-900/30 p-8 md:p-12">
          <div className="prose prose-pink dark:prose-invert max-w-none">
            <h1 className="text-3xl font-light text-pink-600 dark:text-pink-400 mb-2">
              {sobre.titulo}
            </h1>
            <p className="text-sm text-pink-400 dark:text-pink-500 mb-8">
              {new Date(sobre.fecha).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            
            {/* Aquí puedes agregar el contenido de tu carta */}
            <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p className="mb-4">
                Escribe aquí el contenido de tu carta...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


