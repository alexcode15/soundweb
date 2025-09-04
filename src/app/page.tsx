"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mockMedia } from "../components/MediaGrid";
import AnimatedBlob from "../components/AnimatedBlob";

export default function Home() {
  const menu = [
    { label: "About", href: "/about" },
    { label: "Binaural Composition", href: "/binaural" },
    { label: "Your Sounds", href: "/your-sounds" },
    { label: "Submit", href: "/submit" },
  ];


  const [animate, setAnimate] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setAnimate(true);
    // Start intro/button animation a bit before title ends
    const timeout = setTimeout(() => {
      setShowIntro(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const [randomIdx, setRandomIdx] = useState<number | null>(null);
  const handleRandom = () => {
    setRandomIdx(Math.floor(Math.random() * mockMedia.length));
  };
  const handleClose = () => setRandomIdx(null);

  const selectedMedia = randomIdx !== null ? mockMedia[randomIdx] : null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/bg.mp4"
      />
      {/* Dark overlay for video */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
      <main className="relative z-20">
        {/* Main content starts here */}
        <header className="w-full flex flex-col items-center px-2 pt-2 pb-1 md:flex-row md:justify-between md:items-center md:pl-8 md:pr-12 md:pt-8 md:pb-8 md:gap-0">
          {/* Mobile: Centered title at top */}
          <div className="w-full flex flex-col items-center md:hidden">
            <Link href="/" className="text-white text-[2.2rem] font-serif font-bold tracking-widest mb-2 mt-2 text-center focus:outline-none" tabIndex={-1}>
              {"SOUNDWEB".split("").map((char, i) => (
                <span
                  key={i}
                  className={
                    "inline-block" +
                    (animate ? " opacity-0 animate-fadein-letter" : "")
                  }
                  style={
                    animate
                      ? { animationDelay: `${i * 0.12 + 0.2}s` }
                      : undefined
                  }
                >
                  {char}
                </span>
              ))}
            </Link>
          </div>
          {/* Desktop: original title */}
          <Link href="/" className="hidden md:flex text-white text-3xl md:text-4xl font-serif font-bold tracking-widest gap-1 mb-1 md:mb-0 text-center w-full md:w-auto focus:outline-none" tabIndex={-1}>
            {"SOUNDWEB".split("").map((char, i) => (
              <span
                key={i}
                className={
                  "inline-block" +
                  (animate ? " opacity-0 animate-fadein-letter" : "")
                }
                style={
                  animate
                    ? { animationDelay: `${i * 0.12 + 0.2}s` }
                    : undefined
                }
              >
                {char}
              </span>
            ))}
          </Link>
          {/* Mobile menu bar */}
          {/* Mobile menu bar: single row for all items, no wrap */}
          <nav className="w-full flex justify-center items-center md:hidden mt-1 menu-entrance" style={{maxWidth: '100vw', margin: '0 auto', animationDelay: '1.2s'}}>
            <div className="flex flex-nowrap justify-center gap-1 w-auto overflow-x-auto">
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-xs font-light px-2 py-2 rounded underline-animation whitespace-nowrap"
                  style={{ minWidth: 80, textAlign: 'center', background: 'none', boxShadow: 'none', border: 'none' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          {/* Desktop menu bar */}
          <nav className="hidden md:flex flex-wrap gap-12 pr-4 mt-4 w-auto justify-end menu-entrance" style={{animationDelay: '1.2s'}}>
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-base font-light tracking-wide underline-animation px-2 py-2 rounded focus:outline-none" tabIndex={-1}
                style={{ minWidth: 80, textAlign: 'center' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <div className="flex flex-col items-center justify-center mt-10 min-h-[35vh] px-2 md:px-0 gap-2">
          <p className={
            "text-white text-lg font-serif italic opacity-90 drop-shadow-lg text-center mb-2 mt-0 px-2" +
            (showIntro ? " animate-intro-fadein" : " hidden")
          }>
            A participatory sound art project<br />
            that explores the sonic traces of departure and return in Vaglio Basilicata
          </p>
          <button
            onClick={handleRandom}
            className={
              "px-3 py-1.5 bg-gray-800 text-white rounded-full font-bold text-base shadow hover:bg-gray-900 transition-colors duration-200 border border-white/20 mb-2 mt-14 w-full max-w-[200px]" +
              (showIntro ? " animate-intro-fadein delay-150" : " hidden")
            }
            style={{ minHeight: 36 }}
          >
            Discover
          </button>
        </div>
        {/* ...existing code... */}
      </main>
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-2"
          onClick={handleClose}
        >
          <div className="bg-transparent shadow-none p-0 max-w-2xl w-full relative animate-zoom-in flex items-center justify-center overflow-y-auto max-h-[90vh]">
            {/* Main content */}
            {selectedMedia && selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt={selectedMedia.alt || ""} className="max-h-[50vh] sm:max-h-[60vh] md:max-h-[80vh] max-w-[95vw] w-auto h-auto object-contain" />
            ) : selectedMedia ? (
              <div className="flex flex-col items-center justify-center bg-black rounded-none max-h-[35vh] sm:max-h-[60vh] md:max-h-[80vh] max-w-[95vw] w-auto h-auto p-1 sm:p-4 md:p-8">
                <audio controls autoPlay controlsList="nodownload noplaybackrate" src={selectedMedia.src} className="w-72 h-10 bg-black border border-gray-700 rounded shadow-none text-white mt-10" style={{outline: 'none'}} />
                <span className="mt-1 text-xs sm:text-base text-white font-mono text-center">{selectedMedia.alt}</span>
              </div>
            ) : null}
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
      {/* Footer and credits */}
      {/* Credits bottom left */}
      <footer className="fixed bottom-0 left-0 pb-1 pl-1 z-30 text-left w-full">
  <p className="text-white text-[0.65rem] md:text-xs font-light opacity-70 px-2">
          Created and curated by Alessandra Indino · Supported by Clinica dei Paesi and Luoghi d&#39;ARTIfizio · © 2025 Soundweb · Background: <a href="https://www.vecteezy.com/free-videos/water" target="_blank" rel="noopener noreferrer" className="underline">Vecteezy</a>
        </p>
      </footer>
    </div>
  );
}
