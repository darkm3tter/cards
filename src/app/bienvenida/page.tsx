'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BienvenidaPage() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      router.push('/home');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950 via-rose-950 to-pink-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 flex items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-6xl opacity-10 text-pink-400 animate-float">💌</div>
        <div className="absolute bottom-1/4 right-1/4 text-5xl opacity-10 text-pink-400 animate-float-delayed">✨</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Sobre grande animado */}
        <div 
          className={`relative mx-auto mb-8 cursor-pointer transform transition-all duration-700 ${
            isOpening ? 'scale-150 opacity-0 rotate-12' : 'hover:scale-105'
          }`}
          onClick={handleOpen}
        >
          {/* Sombra del sobre */}
          <div className="absolute -inset-4 bg-pink-500/20 rounded-2xl blur-2xl"></div>
          
          {/* Sobre */}
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-100 dark:from-pink-900/40 dark:via-rose-900/40 dark:to-pink-900/40 rounded-xl shadow-2xl border-2 border-pink-300/50 dark:border-pink-700/30 overflow-hidden">
            {/* Patrón de líneas */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-pink-400"></div>
              <div className="absolute top-1/3 left-0 right-0 h-px bg-pink-400"></div>
              <div className="absolute top-2/3 left-0 right-0 h-px bg-pink-400"></div>
            </div>
            
            {/* Solapa del sobre */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-pink-200/90 to-pink-100/80 dark:from-pink-800/50 dark:to-pink-900/40 border-b-2 border-pink-300/60 dark:border-pink-700/40">
              {/* Sello grande */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="relative w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/70 dark:to-rose-900/70 rounded-full border-2 border-pink-400 dark:border-pink-600 flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 dark:from-pink-500 dark:to-rose-500 rounded-full flex items-center justify-center">
                    <div className="text-white dark:text-pink-200 text-xl">💌</div>
                  </div>
                  <div className="absolute top-2 left-2 w-4 h-4 bg-white/60 dark:bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Contenido del sobre */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-pink-50/80 to-transparent dark:from-pink-900/30 dark:to-transparent">
              <p className="text-pink-700 dark:text-pink-300 font-sans font-semibold text-lg sm:text-xl">
                Ábreme
              </p>
            </div>

            {/* Efecto hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/50 dark:from-pink-950/50 dark:to-rose-950/50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Texto de instrucción */}
        <div className={`transition-opacity duration-500 ${isOpening ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-pink-300 dark:text-pink-400 font-sans font-light text-sm sm:text-base mb-2">
            Haz clic en el sobre para abrir
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-1 h-1 rounded-full bg-pink-400 animate-pulse"></div>
            <div className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

