import Link from 'next/link';

export default function Carta6Page() {
  const fechaHoy = new Date().toLocaleDateString('es-ES', {
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

        {/* Carta con diseño distinto: tonos ámbar/dorados */}
        <div className="relative">
          {/* Sombra y efecto de papel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 dark:from-amber-900 dark:via-yellow-900 dark:to-amber-900 rounded-lg blur-sm opacity-50"></div>
          
          {/* Contenedor principal - estilo contrato */}
          <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50/80 to-amber-50 dark:from-amber-950/60 dark:via-yellow-950/50 dark:to-amber-950/60 rounded-lg shadow-xl border-2 border-amber-300/80 dark:border-amber-600/60 overflow-hidden">
            
            {/* Patrón decorativo superior - estilo contrato */}
            <div className="relative h-24 bg-gradient-to-b from-amber-200/50 via-amber-100/30 to-transparent dark:from-amber-800/40 dark:via-amber-900/30">
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-8">
                <div className="w-16 h-px bg-amber-400 dark:bg-amber-600"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500 dark:bg-amber-600 border-2 border-amber-600 dark:border-amber-500"></div>
                <div className="w-16 h-px bg-amber-400 dark:bg-amber-600"></div>
              </div>
              <div className="absolute top-8 left-1/4 text-amber-400 dark:text-amber-600 text-xl">🤝</div>
              <div className="absolute top-8 right-1/4 text-amber-400 dark:text-amber-600 text-xl">🤝</div>
            </div>

            {/* Contenido del contrato */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 relative">
              {/* Fecha */}
              <div className="text-right mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 italic font-sans font-normal">
                  {fechaHoy}
                </p>
              </div>

              {/* Título */}
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-medium text-amber-800 dark:text-amber-200 mb-2 tracking-normal px-2">
                  Contrato de Mejor Amistad
                </h1>
                <div className="flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-4">
                  <div className="w-8 sm:w-12 h-px bg-amber-400 dark:bg-amber-600"></div>
                  <div className="text-xl sm:text-2xl">🤝</div>
                  <div className="w-8 sm:w-12 h-px bg-amber-400 dark:bg-amber-600"></div>
                </div>
                <p className="text-amber-600 dark:text-amber-400 text-sm">Acuerdo oficial</p>
              </div>

              {/* Cláusulas */}
              <div className="space-y-3 sm:space-y-4 text-amber-900/90 dark:text-amber-100/95 text-sm sm:text-base md:text-lg font-sans">
                <p className="indent-4 sm:indent-6 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">Art. 1.</span>
                  Las partes se comprometen a ser mejores amigos para siempre, pase lo que pase.
                </p>
                <p className="indent-4 sm:indent-6 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">Art. 2.</span>
                  Estar presentes el uno para el otro en los momentos buenos y en los difíciles.
                </p>
                <p className="indent-4 sm:indent-6 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">Art. 3.</span>
                  Apoyarse, escucharse y quererse siempre. Sin excepciones.
                </p>
                <p className="indent-4 sm:indent-6 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">Art. 4.</span>
                  Los secretos compartidos quedan entre nosotres. Ser el espacio seguro del otro para contar lo que sea, sin juicio.
                </p>
                <p className="indent-4 sm:indent-6 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">Art. 5.</span>
                  Escuchar de verdad cuando el otro necesite hablar, aunque sean las 3 a.m.
                </p>
                <p className="indent-4 sm:indent-6 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">Art. 6.</span>
                  Inventar planes chidos aunque sea desde lejos. Mandar memes, reels o tonterías cuando el otro esté aburrido. Nunca dejar que se aburra solo.
                </p>
                <p className="indent-4 sm:indent-6 flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">Art. 7.</span>
                  Este contrato es irrevocable y tiene validez por toda la vida. 💕
                </p>
              </div>

              {/* Nota */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-amber-300/40 dark:border-amber-600/30">
                <p className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm italic font-sans leading-relaxed">
                  Nota: Este contrato tiene validez entre Marcos y Grasia, como muestra del amor que le tengo a esta persona, a mi mejor amiga, a ese ser de luz que me cae demasiado mal.
                </p>
              </div>

              {/* Firmas */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-amber-300/50 dark:border-amber-600/40 flex flex-col sm:flex-row justify-around gap-6 text-center">
                <div>
                  <div className="h-px w-24 sm:w-28 bg-amber-600/50 dark:bg-amber-500/50 mx-auto mb-2"></div>
                  <p className="text-amber-800 dark:text-amber-200 text-sm sm:text-base font-medium">Gissi</p>
                </div>
                <div className="hidden sm:flex items-center text-amber-500 dark:text-amber-500 text-2xl">🤝</div>
                <div>
                  <div className="h-px w-24 sm:w-28 bg-amber-600/50 dark:bg-amber-500/50 mx-auto mb-2"></div>
                  <p className="text-amber-800 dark:text-amber-200 text-sm sm:text-base font-medium">Marcos Yahir</p>
                </div>
              </div>
            </div>

            {/* Patrón decorativo inferior */}
            <div className="relative h-16 bg-gradient-to-t from-amber-200/40 via-amber-100/30 to-transparent dark:from-amber-800/30 dark:via-amber-900/20">
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
                <div className="text-amber-400 dark:text-amber-600 text-lg">💕</div>
                <div className="w-20 h-px bg-amber-400 dark:bg-amber-600"></div>
                <div className="text-amber-400 dark:text-amber-600 text-lg">🤝</div>
                <div className="w-20 h-px bg-amber-400 dark:bg-amber-600"></div>
                <div className="text-amber-400 dark:text-amber-600 text-lg">💖</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
