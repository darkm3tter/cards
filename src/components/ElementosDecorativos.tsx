'use client';

export default function ElementosDecorativos() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elementos flotantes animados - ocultos en móviles muy pequeños */}
      <div className="hidden sm:block absolute top-20 left-4 md:left-10 text-4xl md:text-6xl opacity-5 dark:opacity-10 text-pink-300 dark:text-pink-700 animate-float">
        💌
      </div>
      <div className="hidden sm:block absolute top-40 right-4 md:right-20 text-3xl md:text-5xl opacity-5 dark:opacity-10 text-pink-300 dark:text-pink-700 animate-float-delayed">
        ✨
      </div>
      <div className="hidden md:block absolute bottom-20 left-1/4 text-4xl md:text-5xl opacity-5 dark:opacity-10 text-pink-300 dark:text-pink-700 animate-float-slow">
        💕
      </div>
      <div className="hidden md:block absolute bottom-40 right-1/3 text-4xl md:text-6xl opacity-5 dark:opacity-10 text-pink-300 dark:text-pink-700 animate-float-delayed-slow">
        💌
      </div>
      <div className="hidden lg:block absolute top-1/2 left-5 text-3xl md:text-4xl opacity-5 dark:opacity-10 text-pink-300 dark:text-pink-700 animate-float">
        ✨
      </div>
      <div className="hidden lg:block absolute top-1/3 right-10 text-3xl md:text-4xl opacity-5 dark:opacity-10 text-pink-300 dark:text-pink-700 animate-float-slow">
        🍓
      </div>
      
      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200/30 to-transparent dark:via-pink-800/30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200/30 to-transparent dark:via-pink-800/30"></div>
      
      {/* Círculos decorativos - más pequeños en móviles */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-pink-200/5 dark:bg-pink-800/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-rose-200/5 dark:bg-rose-800/5 rounded-full blur-3xl"></div>
    </div>
  );
}

