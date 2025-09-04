"use client";
import Link from "next/link";
export default function Submit() {
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
  {/* ...existing code... (mobile title removed, hamburger menu is global) */}
  {/* ...existing code... (mobile menu removed, only desktop menu remains) */}
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
  <main className="flex flex-col items-center justify-center mt-8 px-8">
  <h2 className="text-3xl font-bold mt-4 mb-16 md:mt-24 md:mb-24">Submit</h2>
        <div className="max-w-2xl text-sm text-gray-700 text-center mb-8 mx-4 md:mx-48">
          <p className="mb-3 font-serif text-base md:text-base text-sm">
            Are you connected to Vaglio in some way, and living elsewhere?
            <br/>
            This project is still growing. If you&apos;d like to contribute a sound, a memory or reflection, you can do so here. All contribution will be part of the Soundweb project, a collection of sounds and words that connect the community across distance.
          </p>
          <hr className="my-8 border-gray-300 w-1/2 mx-auto" />
          <p className="text-gray-500 font-serif text-base md:text-base text-sm mb-12 text-center mt-3">
            Hai un legame con Vaglio, ma vivi altrove?<br/>
            Soundweb è un progetto in evoluzione: se desideri condividere un suono, un ricordo o una riflessione, puoi farlo qui. Ogni contributo arricchirà la raccolta di suoni e parole che unisce la comunità, anche a distanza.
          </p>
          <div className="w-full flex justify-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8DDqaqrTfExUk1PEzbz-QxnLkxz3uAHUp4ohMhkLYhPG3nw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white rounded font-semibold shadow hover:bg-gray-800 transition-colors duration-200 text-lg"
            >
              Submit
            </a>
          </div>

          {/* Extra blank space for better visual balance at bottom */}
          <div className="h-16 md:h-32" />
        </div>
      </main>
    </div>
  );
}
