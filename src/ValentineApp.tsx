import { useState } from 'react';

export default function ValentineApp() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  // Variables configurables
  const recipientName = "Veruska";

  // El tamaño del botón "Sí" aumenta con cada click en "No"
  const yesButtonSize = noCount * 20 + 16;

  // Frases para intentar convencerla cuando presiona "No"
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Segura?",
      `¿De verdad ${recipientName}?`,
      "¡Piénsalo bien!",
      "Me vas a romper el corazón 💔",
      "¡Voy a llorar!",
      "No seas así...",
      "¡Por favor!",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center p-4">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">¡Sabía que dirías que sí! ❤️</h1>
        <img 
          src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
          alt="Osos besándose" 
          className="rounded-lg shadow-xl"
        />
        <p className="mt-4 text-xl text-gray-700">Nos vemos el 14 ✨</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FFB6C1] to-[#FF69B4] flex flex-col items-center justify-center p-4 overflow-hidden relative ">
      

      {/* Tarjeta Principal con efecto Glassmorphism */}
      <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 w-full max-w-md shadow-xl flex flex-col items-center text-center z-10 ">
        
        {/* Encabezado */}
        <h1 className="text-3xl font-bold text-gray-800 mb-1 flex items-center gap-2">
          Hey {recipientName} <span className="text-red-500 text-2xl">💌</span>
        </h1>

        {/* Burbuja de Pregunta */}
        <div className="bg-white/60 rounded-2xl py-4 px-6 w-full mb-8 shadow-sm">
          <p className="text-gray-800 font-semibold text-lg">
            ¿Quieres ser mi San Valentín?
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full relative">
          
          {/* Botón SÍ (Crece dinámicamente) */}
          <button
            className="bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg z-50 max-w-full flex items-center justify-center"
            style={{ 
              fontSize: `${yesButtonSize}px`,
              padding: `${yesButtonSize / 2}px ${yesButtonSize}px` // El padding también crece
            }}
            onClick={() => setYesPressed(true)}
          >
            Sí 💖
          </button>

          {/* Botón NO */}
          <button
            className="bg-white text-pink-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-md border border-pink-100"
            onClick={() => setNoCount(noCount + 1)}
          >
            {getNoButtonText()}
          </button>
        </div>

        {/* Pie de tarjeta */}
        <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest opacity-60">
          Elige tu vibra ✨
        </p>
      </div>

    </div>
  );
}