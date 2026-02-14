import Link from 'next/link';

export default function Carta5Page() {
  const fechaHoy = new Date('2026-02-14').toLocaleDateString('es-ES', {
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
                    San Valentín
                  </h1>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 my-3 sm:my-4">
                    <div className="w-8 sm:w-12 h-px bg-pink-300 dark:bg-pink-700"></div>
                    <div className="text-xl sm:text-2xl">🤝</div>
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
                    En este día de San Valentín quiero escribirte con el corazón en la mano para decirte lo mucho que significas para mí. Estoy profundamente feliz de ser tu mejor amigo, y no es algo que diga a la ligera.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Cuando pienso en nuestra amistad, mi corazón se llena de gratitud. Eres una persona increíble que ilumina mis días con tu presencia, tu forma de ser y todo lo que compartimos juntos. Cada momento contigo es especial para mí.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    Tener tu amistad en mi vida es uno de los mayores regalos que Dios me ha dado. Saber que puedo contar contigo, que me entiendes y que estamos ahí el uno para el otro me da una paz y una alegría que no puedo explicar con palabras.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    La verdad es que te quiero muchísimo. Eres mi mejor amiga, mi confidente, la persona que me hace reír cuando todo parece gris. Gracias por estar siempre, por creer en mí y por ser quien eres. Espero de todo corazón que nuestra amistad dure para siempre.
                  </p>
                  
                  <p className="indent-4 sm:indent-6">
                    En este día tan especial, quiero que sepas que eres parte fundamental de mi vida y que te llevo siempre en mi corazón. Te quiero mucho, con todo mi cariño.
                  </p>
                </div>

                {/* Firma */}
                <div className="mt-8 sm:mt-12 text-right">
                  <div className="inline-block">
                    <p className="text-pink-600 dark:text-pink-400 font-sans font-medium text-base sm:text-lg mb-2">
                      - Marcos Yahir
                    </p>
                    <div className="flex justify-end gap-1.5 sm:gap-2 items-center">
                      <div className="text-xl sm:text-2xl">💕</div>
                      <div className="text-xl sm:text-2xl">🤝</div>
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
                <div className="text-pink-300 dark:text-pink-600 text-lg">🤝</div>
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
