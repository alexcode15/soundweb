"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const menu = [
    { label: "About", href: "/about" },
    { label: "Binaural Composition", href: "/binaural" },
    { label: "Your Sounds", href: "/your-sounds" },
    { label: "Submit", href: "/submit" },
  ];
  return (
  <div className="fixed inset-0 z-50 bg-white text-black min-h-screen w-full overflow-auto max-h-screen">
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
  <div className="max-w-2xl w-full relative mx-auto mt-8 px-20 mb-24">
  <h2 className="text-3xl font-bold mt-24 mb-24 text-center">About</h2>
  <p className="text-sm leading-relaxed text-black mb-16 text-justify font-serif md:text-base">
          Soundweb is a participatory sound art project created in collaboration with people from Vaglio Basilicata, especially those who now live elsewhere.
          Through interviews with participants living in Dublin, Brussels, Rotterdam, Chicago and beyond, this project explored the sonic traces of departure, return and the in-between. From these conversations emerged recurring themes of depopulation of peripheral areas, diasporic belonging, and the fluid identities shaped by movement and memory. Rooted in anthropological listening and sound ethnography, Soundweb invited participants to not only share their stories, but to listen to their environments and the sonic textures of their everyday lives.<br/><br/>
          What emerged is a rich tapestry of sounds, voices, and narratives that reflect the diverse experiences of those who have never really left. The project is a testament to the power of sound as a medium for connection, memory and identity.<br/><br/>
          This project was created by Alessandra Indino, in collaboration with the community of Vaglio Basilicata. Supported by la Clinica dei Paesi.
        </p>
  <hr className="my-12 border-gray-300" />
  <p className="text-gray-500 italic text-sm leading-relaxed text-justify font-serif italic md:text-base">
          Soundweb è un progetto di arte sonora partecipativa, realizzato in collaborazione con persone originarie di Vaglio Basilicata, oggi sparse in diverse parti del mondo.
          Attraverso interviste a distanza con partecipanti che vivono a Dublino, Bruxelles, Rotterdam, Chicago e altrove, il progetto esplora le tracce sonore della partenza, del ritorno e dell’in-between. Dai racconti sono emersi temi ricorrenti quali l’appartenenza diasporica, le identità fluide costruite tra più luoghi e la complessa idea di casa. Radicato nell’ascolto antropologico e nell’etnografia sonora, Soundweb invita i partecipanti non solo a raccontarsi, ma ad ascoltare e registrare i propri ambienti e le texture sonore della vita quotidiana.<br/><br/>
          Ne è emerso un ritratto acustico collettivo di Vaglio, uno spazio ibrido tra vicinanza e distanza, ricco di suoni, voci e narrazioni che riflettono le esperienze di chi, in fondo, non se n’è mai davvero andato. 
          Il progetto è una testimonianza del potere del suono come mezzo di connessione, memoria e identità.<br/><br/>
          Creato da Alessandra Indino, in collaborazione con la comunità di Vaglio Basilicata. Con il sostegno de la Clinica dei Paesi.
        </p>
      </div>
    </div>
  );
}