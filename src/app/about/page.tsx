"use client";
import Link from "next/link";

export default function About() {
  const menu = [
    { label: "About", href: "/about" },
    { label: "Binaural Composition", href: "/binaural" },
    { label: "Your Sounds", href: "/your-sounds" },
    { label: "Submit", href: "/submit" },
  ];
  return (
  <div className="min-h-screen w-full bg-white text-black">
  <header className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-center md:pl-8 md:pr-12 md:pt-8 md:pb-8 md:gap-0">
      {/* ...existing code... (mobile header and menu removed, hamburger menu is global) */}
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
  <h2 className="text-3xl font-bold mt-16 mb-14 text-center md:mt-24 md:mb-24">About</h2>
  <p className="text-sm leading-relaxed text-black mb-12 text-justify font-serif md:text-base md:mb-16">
          Soundweb is a participatory sound art project created in collaboration with people from Vaglio Basilicata, especially those who now live elsewhere.
          Through interviews with participants living in Dublin, Brussels, Rotterdam, Chicago and beyond, this project explored the sonic traces of departure, return and the in-between. From these conversations emerged recurring themes of depopulation of peripheral areas, diasporic belonging, and the fluid identities shaped by movement and memory. Rooted in anthropological listening and sound ethnography, Soundweb invited participants to listen to their environments and record the sonic textures of their everyday lives.<br/><br/>
          What emerged is a rich tapestry of sounds, voices and narratives, that reflect the diverse experiences of those who have never really left. The project delves into the power of sound as a medium for connection, memory and identity.<br/><br/>
          The Soundweb project was created by Alessandra Indino, in collaboration with the community of Vaglio Basilicata. Supported by la Clinica dei Paesi and Luoghi d&#39;ARTIfizio.
        </p>
  <hr className="my-12 border-gray-300" />
  <p className="text-gray-500 italic text-sm leading-relaxed text-justify font-serif italic mb-16 md:text-base md:mb-0">
          Soundweb è un progetto di arte sonora partecipativa, realizzato in collaborazione con persone originarie di Vaglio Basilicata, oggi sparse in diverse parti del mondo.
          Attraverso interviste a distanza con partecipanti che vivono a Dublino, Bruxelles, Rotterdam, Chicago e altrove, il progetto esplora le tracce sonore della partenza, del ritorno e del liminale. Dai racconti, sono emersi temi ricorrenti quali l&#39;appartenenza diasporica, le identità fluide costruite tra più luoghi e la complessa idea di casa. Radicato nell&#39;ascolto antropologico e nell&#39;etnografia sonora, Soundweb invita i partecipanti ad ascoltare, registrare e raccontarsi attraverso le texture sonore della vita quotidiana.<br/><br/>
            Ne è emerso un ritratto acustico collettivo di Vaglio, uno spazio ibrido tra vicinanza e distanza, ricco di suoni, voci e narrazioni che riflettono le esperienze di chi, in fondo, non se n&#39;è mai davvero andato.
            Il progetto esplora il potere del suono come mezzo di connessione, memoria e identità.<br/><br/>
            Creato da Alessandra Indino, in collaborazione con la comunità di Vaglio Basilicata. Con il sostegno de la Clinica dei Paesi e Luoghi d&#39;ARTIfizio.
        </p>
      <div className="h-16 md:h-32" />
      </div>
      <div className="h-16 md:h-32" />
    </div>
    );
}