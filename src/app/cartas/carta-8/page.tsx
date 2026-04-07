import Link from 'next/link';

export default function Carta8Page() {
  const fechaHoy = new Date('2026-04-06').toLocaleDateString('es-ES', {
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

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 dark:from-pink-900 dark:via-rose-900 dark:to-pink-900 rounded-lg blur-sm opacity-50"></div>

          <div className="relative bg-gradient-to-br from-pink-50 via-rose-50/80 to-pink-50 dark:from-pink-900/20 dark:via-rose-900/20 dark:to-pink-900/20 rounded-lg shadow-xl border-2 border-pink-200/60 dark:border-pink-800/40 overflow-hidden">
            <div className="relative h-24 bg-gradient-to-b from-pink-200/40 via-pink-100/30 to-transparent dark:from-pink-800/30 dark:via-pink-900/20">
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-8">
                <div className="w-16 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400 dark:bg-pink-600 border-2 border-pink-500 dark:border-pink-500"></div>
                <div className="w-16 h-px bg-pink-300 dark:bg-pink-700"></div>
              </div>
              <div className="absolute top-8 left-1/4 text-pink-300 dark:text-pink-600 text-xl">💌</div>
              <div className="absolute top-8 right-1/4 text-pink-300 dark:text-pink-600 text-xl">🌸</div>
            </div>

            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="h-full flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-px bg-pink-400 dark:bg-pink-700"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-right mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-pink-500 dark:text-pink-400 italic font-sans font-normal">
                    {fechaHoy}
                  </p>
                </div>

                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-pink-600 dark:text-pink-400 mb-3 tracking-normal px-2 break-words">
                    HOLAAAAAAAAAAAAAAAAAAAAAA
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-pink-500 dark:text-pink-400 font-sans font-normal">
                    Carta express :3
                  </p>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-4">
                    <div className="w-8 sm:w-12 h-px bg-pink-300 dark:bg-pink-700"></div>
                    <div className="text-xl sm:text-2xl">⚡</div>
                    <div className="w-8 sm:w-12 h-px bg-pink-300 dark:bg-pink-700"></div>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <p className="text-base sm:text-lg md:text-xl text-pink-700 dark:text-pink-300 font-sans font-normal italic">
                    Como estas???
                  </p>
                </div>

                <div className="text-zinc-700 dark:text-zinc-200 leading-relaxed space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg font-sans">
                  <p className="indent-4 sm:indent-6">
                    Una carta rapida, para siempre decirte lo mucho que te quiero, que me siento feliz de
                    tenerte en mi vida, y que estoy orgulloso de ti{' '}
                    <span className="whitespace-nowrap">&lt;3</span>
                  </p>
                  <p className="indent-4 sm:indent-6">
                    Suerte en la U, dale con todo esta semana de parciales, espero salgas de maravilla,
                    oro siempre por tu vida, para que Dios te acompañe donde quiera que vayas y nunca te
                    deje sola
                  </p>
                  <p className="indent-4 sm:indent-6 font-medium text-pink-800 dark:text-pink-200">
                    Eres increible, nunca lo olvideesssssee!!!!!
                  </p>
                  <p className="indent-4 sm:indent-6 text-zinc-600 dark:text-zinc-300">
                    P.D. Si el estudio pesa, respira, divide en pedacitos y ya: tu cerebro es bravísimo y
                    estás haciendo más de lo que crees. Cuando termines los parciales, celebra aunque sea
                    con algo chiquito, te lo ganaste.
                  </p>
                  <p className="indent-4 sm:indent-6 text-zinc-600 dark:text-zinc-300">
                    P.D.2 Cuando quieras desahogarte o solo charlar sin filtro, aquí estoy. Sin prisa, sin
                    juicio, con el mismo cariño de siempre.
                  </p>
                </div>

                <div className="mt-8 sm:mt-12 text-right">
                  <div className="inline-block">
                    <p className="text-pink-600 dark:text-pink-400 font-sans font-medium text-base sm:text-lg mb-2">
                      Un abrazo express :3
                    </p>
                    <div className="flex justify-end gap-1.5 sm:gap-2 items-center">
                      <div className="text-xl sm:text-2xl">💌</div>
                      <div className="text-xl sm:text-2xl">🙏</div>
                      <div className="text-xl sm:text-2xl">✨</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-16 bg-gradient-to-t from-pink-200/40 via-pink-100/30 to-transparent dark:from-pink-800/30 dark:via-pink-900/20">
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
                <div className="text-pink-300 dark:text-pink-600 text-lg">💌</div>
                <div className="w-20 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-lg">🌷</div>
                <div className="w-20 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-lg">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
