'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Carta3Page() {
  const [textoVisible, setTextoVisible] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tarjetitaAbierta, setTarjetitaAbierta] = useState<number | null>(null);
  
  const fecha = new Date('2025-12-31').toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/30 via-rose-50/50 to-pink-100/30 dark:from-pink-950/50 dark:via-rose-950/30 dark:to-pink-950/50 py-6 sm:py-8 md:py-12 px-3 sm:px-4 relative">
      {/* Decoraciones flotantes de fondo con movimiento - menos en móvil */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Decoraciones principales - siempre visibles */}
        <div className="absolute top-20 left-10 text-pink-200/20 dark:text-pink-800/20 text-4xl sm:text-6xl animate-float" style={{ animationDelay: '0s' }}>💕</div>
        <div className="absolute top-40 right-20 text-pink-200/20 dark:text-pink-800/20 text-3xl sm:text-5xl animate-float-delayed" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-40 left-20 text-pink-200/20 dark:text-pink-800/20 text-3xl sm:text-4xl animate-float-slow" style={{ animationDelay: '2s' }}>🎉</div>
        <div className="absolute bottom-20 right-10 text-pink-200/20 dark:text-pink-800/20 text-3xl sm:text-5xl animate-float-delayed-slow" style={{ animationDelay: '0.5s' }}>💖</div>
        
        {/* Partículas adicionales flotantes - ocultas en móvil muy pequeño */}
        <div className="hidden sm:block absolute top-1/3 left-1/4 text-pink-200/15 dark:text-pink-800/15 text-3xl animate-float" style={{ animationDelay: '3s' }}>⭐</div>
        <div className="hidden sm:block absolute top-2/3 right-1/3 text-pink-200/15 dark:text-pink-800/15 text-2xl animate-float-delayed" style={{ animationDelay: '4s' }}>✨</div>
        <div className="hidden sm:block absolute top-1/2 left-1/2 text-pink-200/10 dark:text-pink-800/10 text-4xl animate-float-slow" style={{ animationDelay: '5s' }}>💕</div>
        
        {/* Fresas flotantes decorativas - menos en móvil */}
        <div className="absolute top-1/4 right-1/4 text-pink-200/18 dark:text-pink-800/18 text-2xl sm:text-4xl animate-float-delayed" style={{ animationDelay: '2.5s' }}>🍓</div>
        <div className="hidden sm:block absolute top-3/4 left-1/3 text-pink-200/18 dark:text-pink-800/18 text-3xl animate-float-slow" style={{ animationDelay: '3.5s' }}>🍓</div>
        <div className="absolute top-1/5 right-1/5 text-pink-200/15 dark:text-pink-800/15 text-2xl sm:text-3xl animate-float" style={{ animationDelay: '4.5s' }}>🍓</div>
        <div className="hidden sm:block absolute bottom-1/3 left-1/5 text-pink-200/18 dark:text-pink-800/18 text-4xl animate-float-delayed-slow" style={{ animationDelay: '5.5s' }}>🍓</div>
        <div className="hidden md:block absolute top-2/5 right-2/5 text-pink-200/12 dark:text-pink-800/12 text-2xl animate-float" style={{ animationDelay: '6s' }}>🍓</div>
        <div className="hidden sm:block absolute bottom-1/4 right-1/6 text-pink-200/15 dark:text-pink-800/15 text-3xl animate-float-slow" style={{ animationDelay: '6.5s' }}>🍓</div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">
          <Link
            href="/home"
            className="inline-flex items-center text-xs sm:text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
          >
            ← Volver
          </Link>
          
          {/* Botón para ocultar/mostrar texto - más compacto en móvil */}
          <button
            onClick={() => setTextoVisible(!textoVisible)}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-pink-200/60 hover:bg-pink-300/70 rounded-full border border-pink-300/50 transition-all duration-300 shadow-md hover:shadow-lg group text-xs sm:text-sm"
            aria-label={textoVisible ? 'Ocultar texto' : 'Mostrar texto'}
          >
            <span className="text-pink-600 font-medium whitespace-nowrap">
              {textoVisible ? 'Ocultar' : 'Mostrar'}
            </span>
          </button>
        </div>

        {/* Carta con diseño vintage muy decorado */}
        <div className="relative animate-fade-in">
          {/* Sombra múltiple para profundidad con efecto de brillo */}
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 dark:from-pink-900 dark:via-rose-900 dark:to-pink-900 rounded-xl blur-md opacity-40 animate-pulse-slow"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 dark:from-pink-800 dark:via-rose-800 dark:to-pink-800 rounded-lg blur-sm opacity-30"></div>
          
          {/* Efecto de brillo sutil alrededor de la carta */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-pink-400/20 dark:via-rose-500/10 dark:to-pink-500/10 rounded-xl blur-xl opacity-60 animate-pulse-slow"></div>
          
          {/* Contenedor principal de la carta */}
          <div className="relative bg-gradient-to-br from-pink-50 via-rose-50/90 to-pink-50/30/30/30 dark:from-pink-900/20 dark:via-rose-900/20 dark:to-pink-900/20 rounded-xl shadow-2xl border-4 border-pink-200/80 dark:border-pink-800/60 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] dark:hover:shadow-[0_0_30px_rgba(219,39,119,0.2)]">
            {/* Foto4 como fondo integrado con efecto de marca de agua */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0">
              <Image
                src="/img/Foto4.png"
                alt="Fondo decorativo"
                fill
                sizes="100vw"
                className="object-cover object-center"
                style={{
                  opacity: 0.25,
                  filter: 'sepia(50%) saturate(0.8) brightness(1.1)',
                }}
                priority
              />
            </div>
            
            {/* Capa adicional para suavizar el fondo y mantener el color rosado */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/65 via-rose-50/75 to-pink-50/65/45/55/45 dark:from-pink-900/40 dark:via-rose-900/50 dark:to-pink-900/40 rounded-xl pointer-events-none z-[1]"></div>
            
            {/* Marco decorativo superior con múltiples capas */}
            <div className="relative h-32 bg-gradient-to-b from-pink-200/50 via-pink-100/40 to-transparent/40 dark:via-pink-900/30">
              {/* Patrón de puntos decorativos */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 left-4 w-2 h-2 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute top-2 right-4 w-2 h-2 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute top-6 left-8 w-1.5 h-1.5 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute top-10 left-12 w-1 h-1 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute top-10 right-12 w-1 h-1 rounded-full bg-pink-400 dark:bg-pink-600"></div>
              </div>
              
              {/* Líneas decorativas principales */}
              <div className="absolute top-6 left-0 right-0 flex justify-center gap-6 sm:gap-8">
                <div className="w-12 sm:w-20 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="w-4 h-4 rounded-full bg-pink-400 dark:bg-pink-600 border-2 border-pink-500 dark:border-pink-500 shadow-md"></div>
                <div className="w-12 sm:w-20 h-px bg-pink-300 dark:bg-pink-700"></div>
              </div>
              
              {/* Decoraciones de esquinas superiores con efecto de brillo */}
              <div className="absolute top-2 left-2 text-pink-300 dark:text-pink-600 text-lg sm:text-xl animate-pulse-slow drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">💕</div>
              <div className="absolute top-2 right-2 text-pink-300 dark:text-pink-600 text-lg sm:text-xl animate-pulse-slow drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">💖</div>
              
              {/* Estrellas, fuegos artificiales y fresas decorativos con animaciones mejoradas */}
              <div className="absolute top-10 left-1/4 text-pink-300 dark:text-pink-600 text-xl sm:text-2xl animate-pulse drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">🎆</div>
              <div className="absolute top-10 right-1/4 text-pink-300 dark:text-pink-600 text-xl sm:text-2xl animate-pulse drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="absolute top-14 left-1/3 text-yellow-300 dark:text-yellow-600 text-lg animate-pulse drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" style={{ animationDelay: '1s' }}>⭐</div>
              <div className="absolute top-14 right-1/3 text-yellow-300 dark:text-yellow-600 text-lg animate-pulse drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" style={{ animationDelay: '1.5s' }}>⭐</div>
              {/* Fresas decorativas en el header */}
              <div className="absolute top-8 left-1/6 text-pink-300 dark:text-pink-600 text-lg sm:text-xl animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" style={{ animationDelay: '0.7s' }}>🍓</div>
              <div className="absolute top-12 right-1/6 text-pink-300 dark:text-pink-600 text-lg sm:text-xl animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" style={{ animationDelay: '1.2s' }}>🍓</div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-pink-300 dark:text-pink-600 text-base animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" style={{ animationDelay: '2s' }}>🍓</div>
              
              {/* Línea decorativa inferior del header */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/60 to-transparent dark:via-pink-700/60"></div>
            </div>

            {/* Contenido de la carta */}
            <div className="px-3 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 relative z-[2]">
              {/* Marco decorativo interno */}
              <div className="absolute inset-4 border-2 border-dashed border-pink-200/40 dark:border-pink-700/40 rounded-lg pointer-events-none"></div>
              
              {/* Decoraciones de esquinas internas */}
              <div className="absolute top-6 left-6 text-pink-200/30 dark:text-pink-700/30 text-sm">💕</div>
              <div className="absolute top-6 right-6 text-pink-200/30 dark:text-pink-700/30 text-sm">💖</div>
              <div className="absolute bottom-6 left-6 text-pink-200/30 dark:text-pink-700/30 text-sm">✨</div>
              <div className="absolute bottom-6 right-6 text-pink-200/30 dark:text-pink-700/30 text-sm">💕</div>
              
              {/* Líneas de papel (efecto de cuaderno) más visibles */}
              <div className="absolute inset-0 opacity-8 pointer-events-none">
                <div className="h-full flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="h-px bg-gradient-to-r from-transparent via-pink-300/30 to-transparent dark:via-pink-700/30"></div>
                  ))}
                </div>
              </div>
              
              {/* Patrón de corazones pequeños en los bordes - más decorado */}
              <div className="absolute left-0 top-0 bottom-0 w-10 opacity-15 pointer-events-none">
                <div className="h-full flex flex-col justify-around items-center py-8">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="text-pink-400 dark:text-pink-600 text-xs animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>💕</div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-10 opacity-15 pointer-events-none">
                <div className="h-full flex flex-col justify-around items-center py-8">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="text-pink-400 dark:text-pink-600 text-xs animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>💖</div>
                  ))}
                </div>
              </div>
              
              {/* Flores decorativas adicionales en los bordes */}
              <div className="absolute left-2 top-1/4 text-pink-300/30 dark:text-pink-700/30 text-sm">🌸</div>
              <div className="absolute left-2 top-1/2 text-pink-300/30 dark:text-pink-700/30 text-sm">🌺</div>
              <div className="absolute left-2 top-3/4 text-pink-300/30 dark:text-pink-700/30 text-sm">🌸</div>
              
              <div className="absolute right-2 top-1/4 text-pink-300/30 dark:text-pink-700/30 text-sm">🌺</div>
              <div className="absolute right-2 top-1/2 text-pink-300/30 dark:text-pink-700/30 text-sm">🌸</div>
              <div className="absolute right-2 top-3/4 text-pink-300/30 dark:text-pink-700/30 text-sm">🌺</div>

              {/* Contenido */}
              <div className={`relative z-10 transition-opacity duration-500 ${textoVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Fecha en la esquina superior derecha */}
                <div className="text-right mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-pink-500 italic font-sans font-normal">
                    {fecha}
                  </p>
                </div>

                {/* Título decorado con más elementos */}
                <div className="text-center mb-6 sm:mb-8 relative">
                  {/* Decoraciones alrededor del título */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <div className="text-pink-300 dark:text-pink-600 text-sm animate-pulse">✨</div>
                    <div className="text-pink-300 dark:text-pink-600 text-sm animate-pulse" style={{ animationDelay: '0.3s' }}>⭐</div>
                    <div className="text-pink-300 dark:text-pink-600 text-sm animate-pulse" style={{ animationDelay: '0.6s' }}>✨</div>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-pink-600 mb-2 tracking-normal px-2 relative transition-all duration-300 hover:scale-105">
                    <span className="absolute -left-3 sm:-left-4 top-1/2 transform -translate-y-1/2 text-pink-300 dark:text-pink-600 text-lg sm:text-xl md:text-2xl animate-pulse-slow drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">💕</span>
                    <span className="relative inline-block bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 dark:from-pink-400 dark:via-rose-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(236,72,153,0.3)]">
                      Feliz Año Nuevo
                    </span>
                    <span className="absolute -right-3 sm:-right-4 top-1/2 transform -translate-y-1/2 text-pink-300 dark:text-pink-600 text-lg sm:text-xl md:text-2xl animate-pulse-slow drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">💖</span>
                  </h1>
                  
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 my-3 sm:my-4 md:my-6">
                    <div className="w-6 sm:w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-pink-300 dark:to-pink-700"></div>
                    <div className="flex gap-0.5 sm:gap-1 md:gap-2 items-center">
                      <div className="text-lg sm:text-xl md:text-2xl text-pink-400 dark:text-pink-500 animate-bounce drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:scale-125 transition-transform cursor-default">🎉</div>
                      <div className="text-base sm:text-lg md:text-xl text-pink-400 dark:text-pink-500 animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:scale-125 transition-transform cursor-default" style={{ animationDelay: '0.25s' }}>🍓</div>
                      <div className="text-lg sm:text-xl md:text-2xl text-pink-400 dark:text-pink-500 animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:scale-125 transition-transform cursor-default" style={{ animationDelay: '0.3s' }}>🎊</div>
                      <div className="text-base sm:text-lg md:text-xl text-pink-400 dark:text-pink-500 animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:scale-125 transition-transform cursor-default" style={{ animationDelay: '0.35s' }}>🍓</div>
                      <div className="text-lg sm:text-xl md:text-2xl text-pink-400 dark:text-pink-500 animate-bounce drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:scale-125 transition-transform cursor-default" style={{ animationDelay: '0.2s' }}>🎆</div>
                    </div>
                    <div className="w-6 sm:w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-pink-300 dark:to-pink-700"></div>
                  </div>
                  
                  {/* Línea decorativa bajo el título */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pink-300/60 to-transparent dark:via-pink-700/60"></div>
                </div>

                {/* Saludo decorado */}
                <div className="mb-3 sm:mb-4 md:mb-6 relative">
                  <div className="absolute -left-1 sm:-left-2 top-1/2 transform -translate-y-1/2 text-pink-300 dark:text-pink-600 text-sm sm:text-base">💌</div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-700 dark:text-pink-200 font-sans font-normal italic pl-5 sm:pl-6">
                    Para mi Solecito Clarito,
                  </p>
                  <div className="absolute -right-1 sm:-right-2 top-1/2 transform -translate-y-1/2 text-pink-300 dark:text-pink-600 text-sm sm:text-base">💕</div>
                </div>

                {/* Cuerpo de la carta con decoraciones integradas */}
                <div className="text-zinc-700 dark:text-zinc-200 leading-relaxed space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm md:text-base lg:text-lg font-sans relative">
                  {/* Decoraciones pequeñas entre párrafos */}
                  <div className="absolute left-0 top-8 text-pink-300/20 dark:text-pink-700/20 text-xs">💕</div>
                  <div className="absolute right-0 top-16 text-pink-300/20 dark:text-pink-700/20 text-xs">✨</div>
                  <div className="absolute left-0 top-32 text-pink-300/20 dark:text-pink-700/20 text-xs">💖</div>
                  <div className="absolute right-0 top-40 text-pink-300/20 dark:text-pink-700/20 text-xs">💕</div>
                  
                  <p className="indent-4 sm:indent-6 relative">
                    <span className="absolute -left-2 top-0 text-pink-300/30 dark:text-pink-700/30 text-xs">💌</span>
                    Querida Grasia, un año acabo, un año donde mi vida fue una montaña rusa, llena de altos y bajos, mas bajos que altos, pero a pesar de todo lo que vivi este año, hubo algo increible que sucedio en mi vida.
                  </p>
                  
                  <p className="indent-4 sm:indent-6 relative">
                    <span className="absolute -left-2 top-0 text-pink-300/30 dark:text-pink-700/30 text-xs">✨</span>
                    Eso increible tiene nombre, pero yo le digo "Solecito Clarito" (regresas a ser el clarito JAJAJAAJ)... No tengo palabras para agradecerte, un gracias queda corto para todo lo que te quiero decir, hiciste que mi vida diera un giro de 360°, ya que la alegraste como no tienes idea!!
                  </p>
                  
                  <p className="indent-4 sm:indent-6 relative">
                    <span className="absolute -left-2 top-0 text-pink-300/30 dark:text-pink-700/30 text-xs">💕</span>
                    Te deseo un año 2026 lleno de muchas cosas bonitas a tu vida, un 2026 lleno de cosas increibles, y se que lo tendras porque te lo mereces.
                  </p>
                  
                  <p className="indent-4 sm:indent-6 relative">
                    <span className="absolute -left-2 top-0 text-pink-300/30 dark:text-pink-700/30 text-xs">💖</span>
                    Espero ser un mejor ser, para siempre escucharte y apoyarte, te prometo que no te voy a dejar sola, siempre que lo necesites estare para ti, pase lo que pase, llueva, truene o relampaguee, no dudes en que yo estare contigo siempre
                  </p>
                </div>

                {/* Firma decorada */}
                <div className="mt-6 sm:mt-8 md:mt-12 text-right relative">
                  {/* Línea decorativa antes de la firma */}
                  <div className="absolute -top-3 sm:-top-4 right-0 w-32 sm:w-48 h-px bg-gradient-to-l from-transparent via-pink-300/50 to-transparent dark:via-pink-700/50"></div>
                  
                  <div className="inline-block relative">
                    {/* Decoraciones alrededor de la firma */}
                    <div className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 text-pink-300 dark:text-pink-600 text-sm sm:text-lg">💌</div>
                    
                    <p className="text-pink-600 dark:text-pink-300 font-sans font-medium text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                      Con mucho amor (aunque me caes mal mal mal mal mal mal mal)
                    </p>
                    <p className="text-pink-600 dark:text-pink-300 font-sans font-medium text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                      -M
                    </p>
                    
                    <div className="flex justify-end gap-1.5 sm:gap-2 md:gap-3 items-center">
                      <div className="text-lg sm:text-xl md:text-2xl animate-pulse">💕</div>
                      <div className="text-lg sm:text-xl md:text-2xl animate-bounce">🎉</div>
                      <div className="text-lg sm:text-xl md:text-2xl animate-pulse" style={{ animationDelay: '0.3s' }}>✨</div>
                      <div className="text-lg sm:text-xl md:text-2xl animate-pulse" style={{ animationDelay: '0.6s' }}>💖</div>
                      <div className="text-lg sm:text-xl md:text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎊</div>
                    </div>
                    
                    <div className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 text-pink-300 dark:text-pink-600 text-sm sm:text-lg">💕</div>
                  </div>
                </div>

                {/* Línea decorativa antes de las fotos - siempre visible */}
                <div className={`mt-8 sm:mt-12 md:mt-16 mb-4 sm:mb-6 md:mb-8 relative transition-opacity duration-500 ${textoVisible ? 'opacity-100' : 'opacity-50'}`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-48 sm:w-64 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent dark:via-pink-700/50"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 flex gap-1.5 sm:gap-2">
                    <div className="text-pink-300 dark:text-pink-600 text-xs">💕</div>
                    <div className="text-pink-300 dark:text-pink-600 text-xs">✨</div>
                    <div className="text-pink-300 dark:text-pink-600 text-xs">💖</div>
                  </div>
                </div>

                {/* Contenedor de la foto centrada - siempre visible */}
                <div className="mt-8 sm:mt-12 flex justify-center items-center relative">
                  {/* Decoraciones flotantes alrededor */}
                  <div className="absolute -top-8 left-1/4 text-pink-300/60 dark:text-pink-600/60 text-lg animate-pulse">💕</div>
                  <div className="absolute -top-8 right-1/4 text-pink-300/60 dark:text-pink-600/60 text-lg animate-pulse" style={{ animationDelay: '0.3s' }}>✨</div>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-pink-300/60 dark:text-pink-600/60 text-sm animate-pulse" style={{ animationDelay: '0.6s' }}>💖</div>
                  
                  {/* Líneas decorativas que conectan con el texto */}
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                    <div className="w-px h-8 bg-gradient-to-b from-pink-300/40 to-transparent dark:from-pink-700/40"></div>
                    <div className="text-pink-300/50 dark:text-pink-600/50 text-xs">💕</div>
                    <div className="w-px h-8 bg-gradient-to-t from-pink-300/40 to-transparent dark:from-pink-700/40"></div>
                  </div>
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                    <div className="w-px h-8 bg-gradient-to-b from-pink-300/40 to-transparent dark:from-pink-700/40"></div>
                    <div className="text-pink-300/50 dark:text-pink-600/50 text-xs">💖</div>
                    <div className="w-px h-8 bg-gradient-to-t from-pink-300/40 to-transparent dark:from-pink-700/40"></div>
                  </div>

                  {/* Foto - diseño creativo tipo collage con efectos mejorados */}
                  <div 
                    className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] flex-shrink-0 group/photo transition-all duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setModalAbierto(true)}
                  >
                    {/* Cinta adhesiva decorativa en esquinas - diferente posición */}
                    <div className="absolute -top-1 -left-5 w-10 h-5 bg-pink-200/50 dark:bg-pink-800/50 rotate-[12deg] rounded-sm shadow-md border border-pink-300/40 dark:border-pink-700/40 z-10"></div>
                    <div className="absolute -top-1 -right-5 w-10 h-5 bg-pink-200/50 dark:bg-pink-800/50 rotate-[-12deg] rounded-sm shadow-md border border-pink-300/40 dark:border-pink-700/40 z-10"></div>
                    <div className="absolute -bottom-1 left-2 w-8 h-4 bg-pink-200/40 dark:bg-pink-800/40 rotate-[-8deg] rounded-sm shadow-md border border-pink-300/30 dark:border-pink-700/30 z-10"></div>
                    
                    {/* Efecto de foto vintage más pequeña con sombra pronunciada */}
                    <div className="relative">
                      {/* Sombra más pronunciada para efecto de elevación */}
                      <div className="absolute inset-0 bg-pink-300/20 dark:bg-pink-800/20 rounded-xl blur-md transform translate-y-2"></div>
                      
                      {/* Marco tipo instantánea vintage con efectos de hover */}
                      <div className="relative p-2.5 sm:p-3 bg-gradient-to-br from-pink-50/95 via-rose-50/95 to-pink-50/95/50/50/50 rounded-lg shadow-xl border-2 border-pink-200/70 dark:border-pink-700/70 transition-all duration-500 group-hover/photo:shadow-2xl group-hover/photo:border-pink-300/90 dark:group-hover/photo:border-pink-600/90 group-hover/photo:scale-105">
                        {/* Efecto de papel de foto antigua */}
                        <div className="relative overflow-hidden rounded-md">
                          {/* Textura de papel más pronunciada */}
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15)_0%,transparent_40%)] opacity-40 pointer-events-none"></div>
                          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.08)_46%,rgba(255,255,255,0.08)_54%,transparent_55%)] opacity-30 pointer-events-none"></div>
                          
                          {/* Borde interno decorativo con efecto vintage */}
                          <div className="absolute inset-0 border border-pink-100/60 dark:border-pink-800/60 rounded-md pointer-events-none"></div>
                          <div className="absolute inset-[2px] border border-pink-200/40 dark:border-pink-700/40 rounded-md pointer-events-none"></div>
                          
                          <Image
                            src="/img/Foto2.png"
                            alt="Foto especial 2"
                            width={350}
                            height={350}
                            className="relative rounded-md object-contain w-full h-auto shadow-inner transition-all duration-500 group-hover/photo:brightness-105 group-hover/photo:contrast-110"
                            style={{
                              filter: 'sepia(8%) contrast(1.08) brightness(0.96)',
                            }}
                            priority
                          />
                        </div>
                        
                        {/* Espacio inferior tipo instantánea con decoración diferente */}
                        <div className="mt-2 h-7 sm:h-8 flex items-center justify-center relative">
                          {/* Línea decorativa */}
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent dark:via-pink-700/50"></div>
                          
                          <div className="flex gap-1.5 sm:gap-2 items-center mt-1">
                            <div className="text-pink-300 dark:text-pink-600 text-xs">✨</div>
                            <div className="w-10 sm:w-12 h-px bg-pink-300/50 dark:bg-pink-700/50"></div>
                            <div className="text-pink-300 dark:text-pink-600 text-[10px] sm:text-xs font-medium">Memoria</div>
                            <div className="w-10 sm:w-12 h-px bg-pink-300/50 dark:bg-pink-700/50"></div>
                            <div className="text-pink-300 dark:text-pink-600 text-xs">💕</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decoraciones de esquinas más pequeñas */}
                      <div className="absolute -top-0.5 -left-0.5 text-pink-300/60 dark:text-pink-600/60 text-xs">💖</div>
                      <div className="absolute -top-0.5 -right-0.5 text-pink-300/60 dark:text-pink-600/60 text-xs">💕</div>
                      <div className="absolute -bottom-0.5 -left-0.5 text-pink-300/60 dark:text-pink-600/60 text-xs">✨</div>
                      <div className="absolute -bottom-0.5 -right-0.5 text-pink-300/60 dark:text-pink-600/60 text-xs">⭐</div>
                    </div>
                  </div>
                  
                  {/* Decoraciones flotantes debajo */}
                  <div className="absolute -bottom-8 left-1/4 text-pink-300/60 dark:text-pink-600/60 text-lg animate-pulse" style={{ animationDelay: '0.2s' }}>⭐</div>
                  <div className="absolute -bottom-8 right-1/4 text-pink-300/60 dark:text-pink-600/60 text-lg animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-pink-300/60 dark:text-pink-600/60 text-sm animate-pulse" style={{ animationDelay: '0.8s' }}>💕</div>
                </div>

                {/* Tarjetitas interactivas */}
                <div className="mt-8 sm:mt-12 mb-6 sm:mb-8 relative z-10">
                  {/* Decoración superior */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-pink-300/50 dark:to-pink-700/50"></div>
                      <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-pink-300/50 dark:to-pink-700/50"></div>
                    </div>
                  </div>

                  {/* Grid de tarjetitas */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4">
                    {[
                      { id: 0, frase: "te quiero mucho" },
                      { id: 1, frase: "me caes mal" },
                      { id: 2, frase: "viva messi" },
                      { id: 3, frase: "te adoro solecito" },
                      { id: 4, frase: "Ojala no aprendas bateria, que te doy un baquetazo" },
                      { id: 5, frase: "Auxilio" },
                      { id: 6, frase: "Amo los jueguitos wiiiii" },
                      { id: 7, frase: "GRASIAAAAAAAAAAAAAAAAAAAAA, ola" },
                    ].map((tarjetita) => (
                      <div
                        key={tarjetita.id}
                        className="relative group cursor-pointer"
                        onClick={() => setTarjetitaAbierta(tarjetitaAbierta === tarjetita.id ? null : tarjetita.id)}
                      >
                        {/* Sombra y efecto de elevación */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 dark:from-pink-800 dark:via-rose-800 dark:to-pink-800 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        
                        {/* Tarjetita */}
                        <div className={`relative bg-gradient-to-br from-pink-50 via-rose-50/90 to-pink-50 dark:from-pink-900/30 dark:via-rose-900/30 dark:to-pink-900/30 rounded-lg shadow-md border-2 border-pink-200/70 dark:border-pink-700/50 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 ${
                          tarjetitaAbierta === tarjetita.id ? 'border-pink-400 dark:border-pink-500 shadow-xl scale-105' : ''
                        }`}>
                          {/* Contenido de la tarjetita */}
                          <div className="p-3 sm:p-4 min-h-[80px] sm:min-h-[100px] flex flex-col items-center justify-center text-center">
                            {/* Texto "Press me" siempre visible */}
                            <div className="text-xs sm:text-sm text-pink-600 dark:text-pink-300 font-medium mb-2 animate-pulse" style={{ animationDelay: `${tarjetita.id * 0.2}s` }}>
                              Press me
                            </div>
                            
                            {/* Texto que aparece al hacer click */}
                            <div className={`overflow-hidden transition-all duration-300 ${
                              tarjetitaAbierta === tarjetita.id 
                                ? 'max-h-32 opacity-100 mt-2' 
                                : 'max-h-0 opacity-0 mt-0'
                            }`}>
                              <p className="text-xs sm:text-sm text-pink-700 dark:text-pink-200 font-medium leading-tight">
                                {tarjetita.frase}
                              </p>
                            </div>
                          </div>
                          
                          {/* Línea decorativa inferior */}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent dark:via-pink-700/50"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decoración inferior */}
                  <div className="flex justify-center mt-4 sm:mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-pink-300/50 dark:to-pink-700/50"></div>
                      <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-pink-300/50 dark:to-pink-700/50"></div>
                    </div>
                  </div>
                </div>
                
                {/* Línea decorativa final después de ambas fotos */}
                <div className="mt-12 sm:mt-16 mb-4 relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent dark:via-pink-700/50"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 flex gap-2">
                    <div className="text-pink-300 dark:text-pink-600 text-xs animate-pulse">✨</div>
                    <div className="text-pink-300 dark:text-pink-600 text-xs animate-pulse" style={{ animationDelay: '0.3s' }}>💖</div>
                    <div className="text-pink-300 dark:text-pink-600 text-xs animate-pulse" style={{ animationDelay: '0.6s' }}>💕</div>
                    <div className="text-pink-300 dark:text-pink-600 text-xs animate-pulse" style={{ animationDelay: '0.9s' }}>⭐</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patrón decorativo inferior muy elaborado */}
            <div className="relative h-20 bg-gradient-to-t from-pink-200/50 via-pink-100/40 to-transparent/40 dark:via-pink-900/30">
              {/* Patrón de puntos decorativos */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-2 left-4 w-2 h-2 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute bottom-2 right-4 w-2 h-2 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute bottom-10 left-12 w-1 h-1 rounded-full bg-pink-400 dark:bg-pink-600"></div>
                <div className="absolute bottom-10 right-12 w-1 h-1 rounded-full bg-pink-400 dark:bg-pink-600"></div>
              </div>
              
              {/* Línea decorativa superior */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300/60 to-transparent dark:via-pink-700/60"></div>
              
              {/* Decoraciones de esquinas inferiores */}
              <div className="absolute bottom-2 left-2 text-pink-300 dark:text-pink-600 text-lg sm:text-xl">💖</div>
              <div className="absolute bottom-2 right-2 text-pink-300 dark:text-pink-600 text-lg sm:text-xl">💕</div>
              
              {/* Líneas decorativas principales con fresas */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 sm:gap-4 md:gap-6 items-center">
                <div className="w-12 sm:w-16 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-lg sm:text-xl animate-pulse">🎆</div>
                <div className="w-6 sm:w-8 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-base sm:text-lg animate-pulse" style={{ animationDelay: '0.2s' }}>🍓</div>
                <div className="w-6 sm:w-8 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400 dark:bg-pink-600 border-2 border-pink-500 dark:border-pink-500 shadow-md"></div>
                <div className="w-6 sm:w-8 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-base sm:text-lg animate-pulse" style={{ animationDelay: '0.4s' }}>🍓</div>
                <div className="w-6 sm:w-8 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-lg sm:text-xl animate-pulse" style={{ animationDelay: '0.3s' }}>🎊</div>
                <div className="w-6 sm:w-8 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-yellow-300 dark:text-yellow-600 text-base animate-pulse" style={{ animationDelay: '0.6s' }}>⭐</div>
                <div className="w-6 sm:w-8 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-base sm:text-lg animate-pulse" style={{ animationDelay: '0.7s' }}>🍓</div>
                <div className="w-6 sm:w-8 h-px bg-pink-300 dark:bg-pink-700"></div>
                <div className="text-pink-300 dark:text-pink-600 text-lg sm:text-xl animate-pulse" style={{ animationDelay: '0.9s' }}>🎆</div>
                <div className="w-12 sm:w-16 h-px bg-pink-300 dark:bg-pink-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para ver la foto más grande */}
      {modalAbierto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalAbierto(false)}
        >
          {/* Contenedor del modal */}
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full bg-gradient-to-br from-pink-50 via-rose-50/95 to-pink-50 dark:from-pink-900/95 dark:via-rose-900/95 dark:to-pink-900/95 rounded-xl shadow-2xl border-4 border-pink-200/80 dark:border-pink-800/60 overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setModalAbierto(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-pink-200/80 dark:bg-pink-800/80 hover:bg-pink-300/90 dark:hover:bg-pink-700/90 rounded-full border-2 border-pink-300/60 dark:border-pink-700/60 transition-all duration-300 shadow-lg hover:scale-110 group"
              aria-label="Cerrar modal"
            >
              <span className="text-pink-600 dark:text-pink-300 text-xl font-bold group-hover:rotate-90 transition-transform duration-300">×</span>
            </button>

            {/* Decoraciones de esquinas del modal */}
            <div className="absolute top-2 left-2 text-pink-300 dark:text-pink-600 text-xl animate-pulse-slow">💕</div>
            <div className="absolute top-2 right-2 text-pink-300 dark:text-pink-600 text-xl animate-pulse-slow">💖</div>
            <div className="absolute bottom-2 left-2 text-pink-300 dark:text-pink-600 text-xl animate-pulse-slow">✨</div>
            <div className="absolute bottom-2 right-2 text-pink-300 dark:text-pink-600 text-xl animate-pulse-slow">⭐</div>

            {/* Fresas flotantes de fondo en el modal */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <div className="absolute top-10 left-8 text-pink-200/20 dark:text-pink-800/20 text-2xl sm:text-3xl animate-float" style={{ animationDelay: '0s' }}>🍓</div>
              <div className="absolute top-20 right-12 text-pink-200/18 dark:text-pink-800/18 text-xl sm:text-2xl animate-float-delayed" style={{ animationDelay: '1s' }}>🍓</div>
              <div className="absolute top-1/3 left-4 text-pink-200/15 dark:text-pink-800/15 text-2xl animate-float-slow" style={{ animationDelay: '2s' }}>🍓</div>
              <div className="absolute top-1/3 right-6 text-pink-200/20 dark:text-pink-800/20 text-xl sm:text-2xl animate-float-delayed-slow" style={{ animationDelay: '0.5s' }}>🍓</div>
              <div className="absolute bottom-1/3 left-10 text-pink-200/18 dark:text-pink-800/18 text-2xl animate-float" style={{ animationDelay: '3s' }}>🍓</div>
              <div className="absolute bottom-1/3 right-8 text-pink-200/15 dark:text-pink-800/15 text-xl sm:text-2xl animate-float-delayed" style={{ animationDelay: '4s' }}>🍓</div>
              <div className="absolute bottom-20 left-6 text-pink-200/20 dark:text-pink-800/20 text-2xl animate-float-slow" style={{ animationDelay: '5s' }}>🍓</div>
              <div className="absolute bottom-10 right-10 text-pink-200/18 dark:text-pink-800/18 text-xl sm:text-2xl animate-float-delayed-slow" style={{ animationDelay: '1.5s' }}>🍓</div>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 sm:p-8 md:p-12">
              {/* Título decorativo */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                  <div className="text-pink-300 dark:text-pink-600 text-lg animate-pulse">✨</div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-pink-600 dark:text-pink-300 leading-tight">
                    Para la persona más increíble<br className="hidden sm:block" /> en mi vida
                  </h2>
                  <div className="text-pink-300 dark:text-pink-600 text-lg animate-pulse">💕</div>
                </div>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent dark:via-pink-700/50 mx-auto"></div>
              </div>

              {/* Foto ampliada */}
              <div className="relative w-full flex justify-center">
                <div className="relative max-w-full max-h-[70vh] bg-gradient-to-br from-pink-50/95 via-rose-50/95 to-pink-50/95 dark:from-pink-900/95 dark:via-rose-900/95 dark:to-pink-900/95 rounded-lg shadow-2xl border-2 border-pink-200/70 dark:border-pink-700/70 p-4 sm:p-6">
                  {/* Textura de papel */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15)_0%,transparent_40%)] opacity-40 pointer-events-none rounded-lg"></div>
                  
                  <Image
                    src="/img/Foto2.png"
                    alt="Foto especial 2 - Vista ampliada"
                    width={800}
                    height={800}
                    className="relative rounded-md object-contain w-full h-auto max-h-[70vh] shadow-inner"
                    style={{
                      filter: 'sepia(8%) contrast(1.08) brightness(0.96)',
                    }}
                    priority
                  />
                </div>
              </div>

              {/* Decoración inferior */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="text-pink-300 dark:text-pink-600 text-sm animate-pulse">💖</div>
                <div className="w-16 h-px bg-pink-300/50 dark:bg-pink-700/50"></div>
                <div className="text-pink-300 dark:text-pink-600 text-xs">Haz clic fuera para cerrar</div>
                <div className="w-16 h-px bg-pink-300/50 dark:bg-pink-700/50"></div>
                <div className="text-pink-300 dark:text-pink-600 text-sm animate-pulse">✨</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

