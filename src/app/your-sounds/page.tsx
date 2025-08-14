"use client";
// import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const MediaGrid = dynamic(() => import("../../components/MediaGrid"), { ssr: false });

export default function YourSounds() {
  const menu = [
    { label: "About", href: "/about" },
    { label: "Binaural Composition", href: "/binaural" },
    { label: "Your Sounds", href: "/your-sounds" },
    { label: "Submit", href: "/submit" },
  ];
  return (
  <div className="min-h-screen w-full bg-white text-black">
  <header className="w-full flex flex-col items-center px-2 pt-2 pb-1 md:flex-row md:justify-between md:items-center md:pl-8 md:pr-12 md:pt-8 md:pb-8 md:gap-0">
      {/* Mobile: Centered title at top */}
      <div className="w-full flex flex-col items-center md:hidden">
  <Link href="/" className="text-black text-[2.2rem] font-serif font-bold tracking-widest mb-2 mt-2 text-center">
          {"SOUNDWEB".split("").map((char, i) => (
            <span key={i} className="inline-block">{char}</span>
          ))}
        </Link>
      </div>
      {/* Mobile menu bar: single row for all items, no wrap, clickable */}
      <nav className="w-full flex justify-center items-center md:hidden mt-1 z-50 pointer-events-auto" style={{maxWidth: '100vw', margin: '0 auto'}}>
        <div className="flex flex-nowrap justify-center gap-1 w-auto overflow-x-auto">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black text-xs font-light px-2 py-2 rounded underline-animation whitespace-nowrap"
              style={{ minWidth: 80, textAlign: 'center', background: 'none', boxShadow: 'none', border: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      {/* Desktop: original title and menu */}
      <div className="hidden md:flex w-full justify-between items-center">
        <Link href="/" className="text-black text-4xl font-serif font-bold tracking-widest flex gap-1 mb-0 text-center w-auto">
          {"SOUNDWEB".split("").map((char, i) => (
            <span key={i} className="inline-block">{char}</span>
          ))}
        </Link>
        <nav className="flex gap-12 pr-4 mt-4">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black text-base font-light tracking-wide underline-animation"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  <main className="flex flex-col gap-0 items-center justify-center px-4 pt-20 md:items-start md:justify-start md:pt-28 md:pl-40 md:pr-8">
    <div className="flex flex-row w-full gap-12">
  {/* Desktop title and text */}
  <h2 className="text-5xl font-bold mb-0 text-left whitespace-nowrap ml-32 mt-8 hidden md:block">Your Sounds</h2>
  <div className="max-w-2xl text-sm text-gray-700 text-left flex-1 mt-4 ml-8 mr-12 mb-4 hidden md:block">
    <p className="mb-3 mr-32 mt-8 font-serif">
      Here you can find individual sounds and words contributed by people connected to Vaglio, even if living elsewhere. Each one is part of a sonic thread that links the community across distance.
    </p>
    <p className="text-gray-500 font-serif italic">
  Qui puoi trovare suoni, testi e voci registrati e condivisi dai partecipanti.
    </p>
  </div>
  {/* Mobile title and text, centered and aligned */}
  <div className="w-full flex flex-col items-center justify-center md:hidden">
    <div className="max-w-xl w-full mt-8 px-6 mb-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mt-1 mb-8 text-center">Your Sounds</h2>
      <p className="text-sm leading-relaxed text-black mb-8 text-center font-serif">
  Here you can find individual sounds and words contributed by people connected to Vaglio, even if living elsewhere. Each one is part of a sonic thread that links the community across distance.
      </p>
      <p className="text-gray-500 italic text-sm leading-relaxed text-center font-serif">
  Qui puoi trovare suoni, testi e voci registrati e condivisi dai partecipanti.
      </p>
    </div>
  </div>
    </div>
    <MediaGrid />
  </main>
    </div>
  );
}
