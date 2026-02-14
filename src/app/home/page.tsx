import Sobre from '@/components/Sobre';
import ElementosDecorativos from '@/components/ElementosDecorativos';
import fs from 'fs';
import path from 'path';

const SOBRES_FILE = path.join(process.cwd(), 'src', 'data', 'sobres.json');

async function obtenerSobres() {
  try {
    if (!fs.existsSync(SOBRES_FILE)) {
      return [];
    }

    const fileContent = fs.readFileSync(SOBRES_FILE, 'utf-8');
    const sobres = JSON.parse(fileContent);
    
    // Ordenar por fecha (más recientes primero)
    sobres.sort((a: any, b: any) => 
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
    
    return sobres;
  } catch (error) {
    console.error('Error obteniendo sobres:', error);
    return [];
  }
}

export default async function HomePage() {
  const sobres = await obtenerSobres();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/50 via-rose-50/70 to-pink-100/50 dark:from-pink-950/90 dark:via-rose-950/70 dark:to-pink-950/90 relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <ElementosDecorativos />

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12 lg:py-16 max-w-7xl relative z-10">
        {/* Header mejorado con más decoración */}
        <header className="text-center mb-8 sm:mb-10 md:mb-16 relative">
          {/* Decoración superior - oculta en móviles muy pequeños */}
          <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="flex items-center gap-2 opacity-30">
              <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-pink-300 to-transparent dark:from-pink-600"></div>
              <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-pink-400 to-transparent dark:from-pink-500"></div>
              <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-pink-300 to-transparent dark:from-pink-600"></div>
            </div>
          </div>

          <div className="inline-block mb-4 sm:mb-6">
            {/* Emoji decorativo superior */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-pink-400 dark:via-pink-500 dark:to-pink-500"></div>
              <div className="text-3xl sm:text-4xl md:text-5xl animate-bounce-slow">💌</div>
              <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-pink-400 to-pink-400 dark:via-pink-500 dark:to-pink-500"></div>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 dark:from-pink-400 dark:via-rose-400 dark:to-pink-400 mb-3 sm:mb-4 tracking-normal drop-shadow-lg px-2">
              Cartas
            </h1>
            
            {/* Decoración inferior del título */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <div className="w-12 sm:w-20 md:w-32 h-px bg-gradient-to-r from-transparent via-pink-300 to-pink-300 dark:via-pink-600 dark:to-pink-600"></div>
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-pink-400 dark:bg-pink-500"></div>
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-pink-500 dark:bg-pink-400"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-pink-400 dark:bg-pink-500"></div>
              </div>
              <div className="w-12 sm:w-20 md:w-32 h-px bg-gradient-to-l from-transparent via-pink-300 to-pink-300 dark:via-pink-600 dark:to-pink-600"></div>
            </div>
          </div>
          
          {/* Subtítulo y contador */}
          <div className="mt-4 sm:mt-6 space-y-2 px-2">
            <p className="text-pink-600/80 dark:text-pink-400/80 text-sm sm:text-base md:text-lg font-sans font-normal italic">
              Cartas de yo, para la personita mas increible que existe en mi vida!!
            </p>
            {sobres.length > 0 && (
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-pink-100/60 dark:bg-pink-900/40 rounded-full border border-pink-200/50 dark:border-pink-800/30">
                <span className="text-xs sm:text-sm text-pink-600 dark:text-pink-400 font-medium">
                  {sobres.length} {sobres.length === 1 ? 'carta' : 'cartas'}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Galería de sobres con mejor espaciado */}
        {sobres.length === 0 ? (
          <div className="text-center py-16 sm:py-24 md:py-32">
            <div className="inline-block p-6 sm:p-8 md:p-10 lg:p-12 bg-white/60 dark:bg-zinc-900/60 rounded-2xl sm:rounded-3xl border-2 border-pink-200/60 dark:border-pink-800/40 backdrop-blur-md shadow-xl mx-2">
              <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 opacity-60 animate-pulse-slow">💌</div>
              <p className="text-pink-500 dark:text-pink-400 text-base sm:text-lg font-sans font-medium mb-2">
                Aún no hay cartas
              </p>
              <p className="text-pink-400 dark:text-pink-500 text-xs sm:text-sm px-2">
                Las cartas aparecerán aquí cuando estén listas
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Separador decorativo */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
              <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-pink-300/50 dark:via-pink-700/50 dark:to-pink-700/50"></div>
              <div className="text-pink-400 dark:text-pink-600 text-lg sm:text-xl">✨</div>
              <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-l from-transparent via-pink-300/50 to-pink-300/50 dark:via-pink-700/50 dark:to-pink-700/50"></div>
            </div>

            {/* Grid de cartas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {sobres.filter((s: any) => s.id !== 'carta-6').map((sobre: any, index: number) => (
                <div 
                  key={sobre.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Sobre
                    id={sobre.id}
                    titulo={sobre.titulo}
                    fecha={sobre.fecha}
                    ruta={sobre.ruta}
                  />
                </div>
              ))}
            </div>

            {/* Section aparte: Contrato de Mejor Amistad */}
            {sobres.find((s: any) => s.id === 'carta-6') && (() => {
              const contrato = sobres.find((s: any) => s.id === 'carta-6');
              return (
                <section className="mt-16 sm:mt-20 md:mt-24 flex flex-col items-center relative z-10 pb-8">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-amber-400/60 dark:to-amber-500/60"></div>
                    <span className="text-amber-600 dark:text-amber-400 text-sm font-medium tracking-wide">Acuerdo especial</span>
                    <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-amber-400/60 dark:to-amber-500/60"></div>
                  </div>
                  <div className="w-64 sm:w-80 md:w-96 mx-auto animate-fade-in">
                    <Sobre
                      id="carta-6"
                      titulo="Contrato de Mejor Amistad"
                      fecha={contrato.fecha}
                      ruta="/cartas/carta-6"
                      variant="contrato"
                    />
                  </div>
                </section>
              );
            })()}
          </>
        )}

        {/* Footer decorativo */}
        <footer className="mt-12 sm:mt-16 md:mt-24 pt-6 sm:pt-8 border-t border-pink-200/30 dark:border-pink-800/20">
          <div className="text-center px-2">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-pink-300/50 dark:via-pink-700/50 dark:to-pink-700/50"></div>
              <div className="text-pink-400 dark:text-pink-600 text-xl sm:text-2xl">💕</div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent via-pink-300/50 to-pink-300/50 dark:via-pink-700/50 dark:to-pink-700/50"></div>
            </div>
            <p className="text-xs text-pink-400/60 dark:text-pink-500/60 font-sans font-light">
              Con mucho cariño, -M 
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

