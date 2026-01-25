import Link from 'next/link';

export default function Carta4Page() {
  const fechaHoy = new Date('2026-01-24').toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/30 via-rose-50/50 to-pink-100/30 dark:from-pink-950/50 dark:via-rose-950/30 dark:to-pink-950/50 py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/home"
          className="inline-flex items-center text-xs sm:text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-6 sm:mb-8 transition-colors"
        >
          ← Volver
        </Link>

        {/* Carta con diseño vintage */}
        <div className="relative">
          {/* Sombra y efecto de papel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 dark:from-pink-900 dark:via-rose-900 dark:to-pink-900 rounded-lg blur-sm opacity-50"></div>
          
          {/* Contenedor principal de la carta */}
          <div className="relative bg-gradient-to-br from-pink-50 via-rose-50/80 to-pink-50 dark:from-pink-900/20 dark:via-rose-900/20 dark:to-pink-900/20 rounded-lg shadow-xl border-2 border-pink-200/60 dark:border-pink-800/40 overflow-hidden">
            
            {/* Patrón decorativo superior */}
            <div className="relative h-24 bg-gradient-to-b from-pink-200/40 via-pink-100/30 to-transparent dark:from-pink-800/30 dark:via-pink-900/20">
              {/* Líneas decorativas */}
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-8">
                <div className="w-16 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400 dark:bg-pink-600 border-2 border-pink-500 dark:border-pink-500"></div>
                <div className="w-16 h-px bg-pink-300 dark:bg-pink-700"></div>
              </div>
              {/* Estrellas decorativas */}
              <div className="absolute top-8 left-1/4 text-pink-300 dark:text-pink-600 text-xl">✨</div>
              <div className="absolute top-8 right-1/4 text-pink-300 dark:text-pink-600 text-xl">✨</div>
            </div>

            {/* Contenido de la carta */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 relative">
              {/* Líneas de papel (efecto de cuaderno) */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="h-full flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-px bg-pink-400 dark:bg-pink-700"></div>
                  ))}
                </div>
              </div>

              {/* Contenido */}
              <div className="relative z-10">
                {/* Fecha en la esquina superior derecha */}
                <div className="text-right mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-pink-500 dark:text-pink-400 italic font-sans font-normal">
                    {fechaHoy}
                  </p>
                </div>

                {/* Título decorado */}
                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-medium text-pink-600 dark:text-pink-400 mb-2 tracking-normal px-2">
                    Como cuando me caes mal
                  </h1>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-4">
                    <div className="w-8 sm:w-12 h-px bg-pink-300 dark:bg-pink-700"></div>
                    <div className="text-xl sm:text-2xl">💌</div>
                    <div className="w-8 sm:w-12 h-px bg-pink-300 dark:bg-pink-700"></div>
                  </div>
                </div>

                {/* Saludo */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-base sm:text-lg md:text-xl text-pink-700 dark:text-pink-300 font-sans font-normal italic">
                    Hi Gissi de mi corazón,
                  </p>
                </div>

                {/* Cuerpo de la carta */}
                <div className="text-zinc-700 dark:text-zinc-200 leading-relaxed space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg font-sans">
                  <p className="indent-4 sm:indent-6">
                    aqui ando escribiendote otra carta, todo porque me caes mal AAJAJAJAJAJ.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Cuando se trata de ti, creeme que deseo todo lo mejor para tu vida, que siempre estes bien, con mucha salud, que tus dias siempre te vayan de maravillay que nunca te falte nada, ya que tu eres muy importante para mi vida.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Deja de copiarme por favor porque me sigues copiando, lo bueno es que ta lo aceptaste JAJAJAJAJAAJAJAJ.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Cantas super bonito, sos mi idola y mi ejemplo a seguir, enseñame a cantar no seas malaaaaaaaa.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Me alegro de que ya iniciaste el k i n d e r, te ira de maravilla, este 2° año que haras te ira EXCELENTEEEEEEEEEEE, metele que me tenes que mantener KJASKJASKJ
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Sin mas que agregar, te quiero muchoteeeeee
                  </p>
                </div>

                {/* Firma */}
                <div className="mt-8 sm:mt-12 text-right">
                  <div className="inline-block">
                    <p className="text-pink-600 dark:text-pink-400 font-sans font-medium text-base sm:text-lg mb-2">
                      - Marcos Yahir (Asi parece enojo JAJAJAAJA)
                    </p>
                    <div className="flex justify-end gap-1.5 sm:gap-2 items-center">
                      <div className="text-xl sm:text-2xl">💕</div>
                      <div className="text-xl sm:text-2xl">💌</div>
                      <div className="text-xl sm:text-2xl">✨</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patrón decorativo inferior */}
            <div className="relative h-16 bg-gradient-to-t from-pink-200/40 via-pink-100/30 to-transparent dark:from-pink-800/30 dark:via-pink-900/20">
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
                <div className="text-pink-300 dark:text-pink-600 text-lg">💕</div>
                <div className="w-20 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-lg">✨</div>
                <div className="w-20 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-lg">💖</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

