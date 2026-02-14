'use client';

import Link from 'next/link';

interface SobreProps {
  id: string;
  titulo: string;
  fecha: string;
  ruta: string;
  variant?: 'default' | 'contrato';
}

export default function Sobre({ titulo, fecha, ruta, variant = 'default' }: SobreProps) {
  // Usar la fecha del JSON
  const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const isContrato = variant === 'contrato';

  return (
    <Link href={ruta} className="group block">
      <div className="relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Sombra decorativa */}
        <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500 ${
          isContrato 
            ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 dark:from-amber-700 dark:via-amber-600 dark:to-amber-700' 
            : 'bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 dark:from-pink-800 dark:via-rose-800 dark:to-pink-800'
        }`}></div>
        
        {/* Sobre cerrado */}
        <div className={`relative w-full min-w-0 aspect-[4/3] rounded-xl shadow-lg border-2 overflow-hidden backdrop-blur-sm ${
          isContrato
            ? 'bg-gradient-to-br from-amber-50 via-yellow-50/90 to-amber-100 dark:from-amber-900/80 dark:via-amber-950/90 dark:to-amber-900/80 border-amber-300/70 dark:border-amber-500/60'
            : 'bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 dark:from-pink-900/40 dark:via-rose-900/40 dark:to-pink-900/50 border-pink-200/60 dark:border-pink-800/40'
        }`}>
          {/* Patrón de líneas */}
          <div className="absolute inset-0 opacity-15 dark:opacity-10">
            <div className={`absolute top-1/2 left-0 right-0 h-px ${isContrato ? 'bg-amber-500 dark:bg-amber-600' : 'bg-pink-400 dark:bg-pink-600'}`}></div>
            <div className={`absolute top-1/3 left-0 right-0 h-px ${isContrato ? 'bg-amber-500 dark:bg-amber-600' : 'bg-pink-400 dark:bg-pink-600'}`}></div>
            <div className={`absolute top-2/3 left-0 right-0 h-px ${isContrato ? 'bg-amber-500 dark:bg-amber-600' : 'bg-pink-400 dark:bg-pink-600'}`}></div>
          </div>
          
          {/* Solapa del sobre */}
          <div className={`absolute top-0 left-0 right-0 h-1/3 border-b-2 ${
            isContrato
              ? 'bg-gradient-to-b from-amber-200/90 via-amber-150/80 to-amber-100/70 dark:from-amber-800/50 dark:via-amber-900/40 dark:to-amber-900/30 border-amber-400/60 dark:border-amber-600/40'
              : 'bg-gradient-to-b from-pink-200/90 via-pink-150/80 to-pink-100/70 dark:from-pink-800/50 dark:via-pink-900/40 dark:to-pink-900/30 border-pink-300/60 dark:border-pink-700/40'
          }`}>
            {/* Sello decorativo */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center shadow-md ${
                isContrato
                  ? 'bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/70 dark:to-amber-900/70 border-amber-400 dark:border-amber-600'
                  : 'bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/70 dark:to-rose-900/70 border-pink-400 dark:border-pink-600'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isContrato
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500'
                    : 'bg-gradient-to-br from-pink-400 to-rose-400 dark:from-pink-500 dark:to-rose-500'
                }`}>
                  <div className={`text-xs ${isContrato ? 'text-amber-100' : 'text-white dark:text-pink-200'}`}>
                    {isContrato ? '🤝' : '💌'}
                  </div>
                </div>
                <div className="absolute top-1 left-1 w-3 h-3 bg-white/60 dark:bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Contenido del sobre */}
          <div className={`absolute bottom-0 left-0 right-0 p-5 pt-10 bg-gradient-to-t ${
            isContrato ? 'from-amber-50/80 to-transparent dark:from-amber-900/30 dark:to-transparent' : 'from-pink-50/80 to-transparent dark:from-pink-900/30 dark:to-transparent'
          }`}>
            <h3 className={`text-sm md:text-base font-sans font-semibold mb-1.5 line-clamp-2 leading-tight ${
              isContrato ? 'text-amber-800 dark:text-amber-200' : 'text-pink-700 dark:text-pink-300'
            }`}>
              {titulo}
            </h3>
            <div className="flex items-center gap-2">
              <div className={`w-1 h-1 rounded-full ${isContrato ? 'bg-amber-500 dark:bg-amber-400' : 'bg-pink-400 dark:bg-pink-500'}`}></div>
              <p className={`text-xs font-medium ${isContrato ? 'text-amber-600 dark:text-amber-300' : 'text-pink-500 dark:text-pink-400'}`}>
                {fechaFormateada}
              </p>
            </div>
          </div>

          {/* Efecto hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
            isContrato
              ? 'bg-gradient-to-br from-amber-50/90 via-yellow-50/90 to-amber-50/90 dark:from-amber-950/70 dark:via-amber-950/70 dark:to-amber-950/70'
              : 'bg-gradient-to-br from-pink-50/90 via-rose-50/90 to-pink-50/90 dark:from-pink-950/70 dark:via-rose-950/70 dark:to-pink-950/70'
          }`}>
            <div className={`absolute inset-4 rounded-lg border-2 border-dashed shadow-inner ${
              isContrato ? 'bg-white/80 dark:bg-zinc-900/80 border-amber-400 dark:border-amber-600' : 'bg-white/80 dark:bg-zinc-900/80 border-pink-300 dark:border-pink-700'
            }`}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-3xl animate-pulse">{isContrato ? '🤝' : '💌'}</div>
              </div>
              <div className="absolute top-6 left-4 right-4 space-y-2 opacity-30">
                <div className={`h-1 rounded w-3/4 ${isContrato ? 'bg-amber-500 dark:bg-amber-600' : 'bg-pink-300 dark:bg-pink-700'}`}></div>
                <div className={`h-1 rounded w-full ${isContrato ? 'bg-amber-500 dark:bg-amber-600' : 'bg-pink-300 dark:bg-pink-700'}`}></div>
                <div className={`h-1 rounded w-5/6 ${isContrato ? 'bg-amber-500 dark:bg-amber-600' : 'bg-pink-300 dark:bg-pink-700'}`}></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </Link>
  );
}

