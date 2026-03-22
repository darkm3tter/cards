import Link from 'next/link';

export default function Carta7Page() {
  const fechaHoy = new Date('2026-03-21').toLocaleDateString('es-ES', {
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
              <div className="absolute top-8 right-1/4 text-pink-300 dark:text-pink-600 text-xl">✨</div>
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-medium text-pink-600 dark:text-pink-400 mb-2 tracking-normal px-2">
                   Hola soy yo saludos, JAAJAJAJAJ
                  </h1>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-4">
                    <div className="w-8 sm:w-12 h-px bg-pink-300 dark:bg-pink-700"></div>
                    <div className="text-xl sm:text-2xl">🤝</div>
                    <div className="w-8 sm:w-12 h-px bg-pink-300 dark:bg-pink-700"></div>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <p className="text-base sm:text-lg md:text-xl text-pink-700 dark:text-pink-300 font-sans font-normal italic">
                    Hello hellooooooooooooooooooooo!
                  </p>
                </div>

                <div className="text-zinc-700 dark:text-zinc-200 leading-relaxed space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg font-sans">
                  <p className="indent-4 sm:indent-6">
                    Hace tiempo que no te escribía una carta, así que... ¡aquí está! JSKAJSKAJSKAJSKAJS.
                  </p>
                  <p className="indent-4 sm:indent-6">
                    Me puse a pensar en lo loco que ha sido todo últimamente. Entre la U, las cosas de la familia, el ministerio y nuestras propias batallas personales, a veces parece que llevamos un peso enorme encima. Sé que cada uno tiene sus cargas y sus días de lidiar con mil cosas a la vez.
                  </p>
                  <p className="indent-4 sm:indent-6">
                    Pero, aun con todo eso, hay algo que me hace sonreír en medio del caos, y es que es increíble tenerte en mi vida. Es como... ¡WOW, ES GISSIIIIIIIIIIIIII! Te lo repito siempre, pero de verdad soy muy feliz de contar contigo. Poder escribirte diario, molestarte, contarte cosas random y que me aguantes hasta mis tragedias JJAJAJA... eso no tiene precio.
                  </p>

                  <blockquote className="my-6 sm:my-8 pl-4 sm:pl-6 border-l-4 border-pink-300/80 dark:border-pink-600/80 text-pink-800 dark:text-pink-200/95 italic space-y-2">
                    <p>
                      &ldquo;Mejor son dos que uno... Porque si cayeren, el uno levantará a su compañero.&rdquo;
                    </p>
                    <p className="text-sm not-italic text-pink-600 dark:text-pink-400 font-sans">
                      — Eclesiastés 4:9-10
                    </p>
                  </blockquote>

                  <p className="indent-4 sm:indent-6">
                    Gissi, quiero que sepas que siempre voy a estar aquí. No importa si el día está nublado o si la carga se siente pesada, cuenta conmigo para ayudarte a levantar lo que sea. Eres una persona maravillosa y me encanta compartir la vida (Y MIS GRANDES TRAGEDIASSSSSSSS) contigo.
                  </p>
                </div>

                <div className="mt-8 sm:mt-12 text-right">
                  <div className="inline-block">
                    <p className="text-pink-600 dark:text-pink-400 font-sans font-medium text-base sm:text-lg mb-2">
                      Att. -M
                    </p>
                    <div className="flex justify-end gap-1.5 sm:gap-2 items-center">
                      <div className="text-xl sm:text-2xl">🤝</div>
                      <div className="text-xl sm:text-2xl">💕</div>
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
                <div className="text-pink-300 dark:text-pink-600 text-lg">🤝</div>
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
