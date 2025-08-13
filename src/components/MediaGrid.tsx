import React, { useState } from "react";

interface MediaItem {
  id: number;
  type: "image" | "audio";
  src: string;
  alt?: string;
}

const mockMedia: MediaItem[] = [
// ...existing code...
  { id: 1, type: "image", src: "/Spero che.png", alt: "Spero che" },
  { id: 2, type: "image", src: "/Mi manca il suono del dialetto.png", alt: "Mi manca il suono del dialetto" },
  { id: 4, type: "image", src: "/Siamo un popolo.png", alt: "Siamo un popolo" },
  { id: 3, type: "audio", src: "/Sounds grid/Assiolo.wav", alt: "l'assiolo" },
  { id: 5, type: "image", src: "/Qualsiasi.png", alt: "Qualsiasi" },
  { id: 6, type: "audio", src: "/Sounds grid/caffe parole.wav", alt: "Caffè parole" },
  { id: 7, type: "image", src: "/A volte.png", alt: "A volte" },
  { id: 8, type: "image", src: "/il vento forte.png", alt: "il vento forte" },
  { id: 10, type: "image", src: "/adesso.png", alt: "adesso" },
  { id: 9, type: "audio", src: "/Sounds grid/Il \"mare\" di bruxelles.wav", alt: "il \"mare\" di Bruxelles" },
  { id: 11, type: "image", src: "/sono seduto.png", alt: "sono seduto" },
    { id: 12, type: "audio", src: "/Sounds grid/Beep-Badge Faustino.wav", alt: "il suono del badge" },
    { id: 13, type: "image", src: "/badge.png", alt: "badge" },
  { id: 14, type: "image", src: "/caos.png", alt: "caos" },
    { id: 41, type: "image", src: "/quando.png", alt: "quando" },
  { id: 23, type: "audio", src: "/Sounds grid/Scorrere lento parole Carmela.wav", alt: "scorrere lento" },
  { id: 15, type: "image", src: "/modimorra.png", alt: "modimorra" },
  { id: 17, type: "image", src: "/diversità.png", alt: "diversità" },
    { id: 20, type: "audio", src: "/Sounds grid/elastico.wav", alt: "l'elastico" },
  { id: 42, type: "image", src: "/colpa.png", alt: "colpa" },
  { id: 19, type: "image", src: "/quello.png", alt: "quello" },
  { id: 21, type: "image", src: "/motozap.png", alt: "motozap" },
  { id: 16, type: "audio", src: "/Sounds grid/Morra sound.wav", alt: "il suono della morra" },
  { id: 22, type: "image", src: "/fortunato.png", alt: "fortunato" },
  { id: 24, type: "image", src: "/conto.png", alt: "conto" },
  { id: 27, type: "audio", src: "/Sounds grid/Roberta Parole-Silenzio e tortora intro.wav", alt: "il silenzio" },
  { id: 26, type: "image", src: "/positi.png", alt: "positi" },
  { id: 28, type: "image", src: "/tren.png", alt: "tren" },
  { id: 30, type: "image", src: "/cica.png", alt: "cica" },
  { id: 25, type: "audio", src: "/Sounds grid/La tortora.wav", alt: "la tortora" },
  { id: 29, type: "image", src: "/sbatto.png", alt: "sbatto" },
  { id: 31, type: "audio", src: "/Sounds grid/Macchinetta caffè Roberta.wav", alt: "la macchinettà del caffè" },
  { id: 38, type: "image", src: "/pan.png", alt: "pan" },
  { id: 32, type: "audio", src: "/Sounds grid/messaggio.wav", alt: "il mio messaggio a Vaglio" },
  { id: 43, type: "image", src: "/merend.png", alt: "merend" },
  { id: 33, type: "audio", src: "/Sounds grid/nostalgia sughi etc Vincenzo.wav", alt: "nostalgia" },
  { id: 34, type: "audio", src: "/Sounds grid/Proverbio maiale.wav", alt: "proverbio" },
  { id: 35, type: "audio", src: "/Sounds grid/Voira Spiegazione Carmela.wav", alt: "la Voira" },
  { id: 37, type: "audio", src: "/Sounds grid/Il suono della domenica.wav", alt: "il suono della domenica" },
  { id: 36, type: "audio", src: "/Sounds grid/Proverbio uccelli.wav", alt: "se tutti gli uccelli conoscessero il grano..." },
];

export { mockMedia };

export default function MediaGrid() {
  const [zoomedIdx, setZoomedIdx] = useState<number | null>(null);

  const handleZoom = (idx: number) => setZoomedIdx(idx);
  const handleClose = () => setZoomedIdx(null);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomedIdx !== null && zoomedIdx > 0) setZoomedIdx(zoomedIdx - 1);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomedIdx !== null && zoomedIdx < mockMedia.length - 1) setZoomedIdx(zoomedIdx + 1);
  };

  return (
    <>
  <div className="grid grid-cols-2 gap-2 mt-8 w-full px-2 mx-auto md:grid-cols-5 md:gap-0 md:mt-12 md:mx-auto md:ml-28 md:w-auto md:px-0">
        {mockMedia.map((item, idx) => (
          <div
            key={item.id}
            className="relative cursor-pointer group overflow-hidden hover:scale-105 transition-transform bg-gray-100"
            onClick={() => handleZoom(idx)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || ""}
                className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity"
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-56 bg-white">
                <span
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow text-center"
                  aria-label="Audio"
                >
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <polygon points="8,6 26,16 8,26" fill="#000" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      {zoomedIdx !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="bg-transparent shadow-none p-0 max-w-2xl w-full relative animate-zoom-in flex items-center justify-center">
            {/* Left arrow */}
            {zoomedIdx > 0 && (
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/90 text-3xl z-20"
                onClick={handlePrev}
                aria-label="Previous"
              >
                &#8592;
              </button>
            )}
            {/* Main content */}
            {zoomedIdx !== null && mockMedia[zoomedIdx].type === "image" ? (
              <img src={mockMedia[zoomedIdx].src} alt={mockMedia[zoomedIdx].alt || ""} className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain" />
            ) : zoomedIdx !== null ? (
              <div className="flex flex-col items-center justify-center bg-black rounded-none max-h-[80vh] max-w-[90vw] w-auto h-auto p-8">
                <audio controls autoPlay controlsList="nodownload noplaybackrate" src={mockMedia[zoomedIdx].src} className="w-72 h-10 bg-black border border-gray-700 rounded shadow-none text-white mt-10" style={{outline: 'none'}} />
                <span className="mt-4 text-base text-white font-mono">{zoomedIdx === 2 ? "l'assiolo" : zoomedIdx === 5 ? "il caffè" : mockMedia[zoomedIdx].alt}</span>
              </div>
            ) : null}
            {/* Right arrow */}
            {zoomedIdx !== null && zoomedIdx < mockMedia.length - 1 && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/90 text-3xl z-20"
                onClick={handleNext}
                aria-label="Next"
              >
                &#8594;
              </button>
            )}
            {/* Close button */}
            <button
              className="absolute -top-6 right-0 text-white bg-black/70 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/90 text-2xl z-20"
              style={{transform: 'translate(40%,0)'}}
              onClick={e => { e.stopPropagation(); handleClose(); }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
