import Link from 'next/link';

export default function Carta2Page() {
  const fechaHoy = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100/30 via-pink-50/50 to-rose-100/30 dark:from-red-950/50 dark:via-pink-950/30 dark:to-rose-950/50 py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/home"
          className="inline-flex items-center text-xs sm:text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 mb-6 sm:mb-8 transition-colors"
        >
          ← Volver
        </Link>

        {/* Carta con diseño temático de fresas y estrellas */}
        <div className="relative">
          {/* Sombra y efecto de papel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-200 via-pink-200 to-rose-200 dark:from-red-900 dark:via-pink-900 dark:to-rose-900 rounded-lg blur-sm opacity-50"></div>
          
          {/* Contenedor principal de la carta */}
          <div className="relative bg-gradient-to-br from-red-50 via-pink-50/80 to-rose-50 dark:from-red-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-lg shadow-xl border-2 border-red-200/60 dark:border-red-800/40 overflow-hidden">
            
            {/* Patrón decorativo superior con fresas y estrellas */}
            <div className="relative h-24 bg-gradient-to-b from-red-200/40 via-pink-100/30 to-transparent dark:from-red-800/30 dark:via-pink-900/20">
              {/* Líneas decorativas */}
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-6 sm:gap-8">
                <div className="w-12 sm:w-16 h-px bg-red-300 dark:bg-red-700"></div>
                <div className="text-red-400 dark:text-red-600 text-xl sm:text-2xl">🍓</div>
                <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-600 border-2 border-red-500 dark:border-red-500"></div>
                <div className="text-red-400 dark:text-red-600 text-xl sm:text-2xl">⭐</div>
                <div className="w-12 sm:w-16 h-px bg-red-300 dark:bg-red-700"></div>
              </div>
              {/* Estrellas decorativas */}
              <div className="absolute top-8 left-1/4 text-yellow-300 dark:text-yellow-600 text-lg sm:text-xl animate-pulse">✨</div>
              <div className="absolute top-8 right-1/4 text-yellow-300 dark:text-yellow-600 text-lg sm:text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-yellow-300 dark:text-yellow-600 text-lg sm:text-xl animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>
            </div>

            {/* Contenido de la carta */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 relative">
              {/* Líneas de papel (efecto de cuaderno) */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="h-full flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-px bg-red-400 dark:bg-red-700"></div>
                  ))}
                </div>
              </div>

              {/* Contenido */}
              <div className="relative z-10">
                {/* Fecha en la esquina superior derecha */}
                <div className="text-right mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-red-500 dark:text-red-400 italic font-sans font-normal">
                    {fechaHoy}
                  </p>
                </div>

                {/* Título decorado */}
                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-medium text-red-600 dark:text-red-400 mb-2 tracking-normal px-2">
                    Lo mucho que me caes mal
                  </h1>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-4">
                    <div className="w-8 sm:w-12 h-px bg-red-300 dark:bg-red-700"></div>
                    <div className="text-xl sm:text-2xl">🍓</div>
                    <div className="text-xl sm:text-2xl">⭐</div>
                    <div className="text-xl sm:text-2xl">✨</div>
                    <div className="w-8 sm:w-12 h-px bg-red-300 dark:bg-red-700"></div>
                  </div>
                </div>

                {/* Saludo */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-base sm:text-lg md:text-xl text-red-700 dark:text-red-300 font-sans font-normal italic">
                    Para Gissi, la persona que más me cae mal,
                  </p>
                </div>

                {/* Cuerpo de la carta */}
                <div className="text-zinc-700 dark:text-zinc-200 leading-relaxed space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg font-sans">
                  <p className="indent-4 sm:indent-6">
                    Sabes, me caes re mal, me caes tan mal que siempre agradezco a Dios, por poner una persona tan increíble como tú en mi vida, <span className="text-red-500 dark:text-red-400">🍓</span> me caes tan mal, que siempre me alegro cuando me escribes, me caes tan mal que siempre ando pendiente de que nuestro hijo exista un día más <span className="text-yellow-500 dark:text-yellow-400">⭐</span> (Que viva la racha AJAJAJA) <span className="text-yellow-500 dark:text-yellow-400">✨</span>
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Me caes demasiado mal, que le pido a Dios por tu vida, que siempre estés bien, que nunca te falte nada, porque eres demasiado importante para mí, y siempre desearé lo mejor para ti. <span className="text-red-500 dark:text-red-400">🍓</span>
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Simplemente gracias por existir, Te quiero muchote <span className="text-red-500 dark:text-red-400">💕</span> <span className="text-yellow-500 dark:text-yellow-400">⭐✨</span>
                  </p>
                </div>

                {/* Firma */}
                <div className="mt-8 sm:mt-12 text-right">
                  <div className="inline-block">
                    <p className="text-red-600 dark:text-red-400 font-sans font-medium text-base sm:text-lg mb-2">
                      Con todo mi cariño,
                    </p>
                    <div className="flex justify-end gap-1.5 sm:gap-2 items-center">
                      <div className="text-xl sm:text-2xl">🍓</div>
                      <div className="text-xl sm:text-2xl">⭐</div>
                      <div className="text-xl sm:text-2xl">✨</div>
                      <div className="text-xl sm:text-2xl">💕</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patrón decorativo inferior */}
            <div className="relative h-16 bg-gradient-to-t from-red-200/40 via-pink-100/30 to-transparent dark:from-red-800/30 dark:via-pink-900/20">
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 sm:gap-6">
                <div className="text-red-300 dark:text-red-600 text-lg">🍓</div>
                <div className="w-16 sm:w-20 h-px bg-red-300 dark:bg-red-700"></div>
                <div className="text-yellow-300 dark:text-yellow-600 text-lg">⭐</div>
                <div className="w-16 sm:w-20 h-px bg-red-300 dark:bg-red-700"></div>
                <div className="text-yellow-300 dark:text-yellow-600 text-lg">✨</div>
                <div className="w-16 sm:w-20 h-px bg-red-300 dark:bg-red-700"></div>
                <div className="text-red-300 dark:text-red-600 text-lg">🍓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

