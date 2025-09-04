"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menu = [
  { label: "About", href: "/about" },
  { label: "Binaural Composition", href: "/binaural" },
  { label: "Your Sounds", href: "/your-sounds" },
  { label: "Submit", href: "/submit" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <nav className="md:hidden w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="text-black text-xl font-serif font-bold tracking-widest">
          SOUNDWEB
        </Link>
        <button
          className="p-2 rounded focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect y="6" width="28" height="3" rx="1.5" fill="#333" />
            <rect y="13" width="28" height="3" rx="1.5" fill="#333" />
            <rect y="20" width="28" height="3" rx="1.5" fill="#333" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-transparent" onClick={() => setOpen(false)}>
          <video
            src="/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            style={{objectFit: 'cover', width: '100%', height: '100%'}}
          />
          <div className="bg-white w-64 h-full shadow-lg flex flex-col pt-8 px-6 relative z-10" onClick={e => e.stopPropagation()}>
            <button
              className="self-end mb-8 p-2 rounded focus:outline-none"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="6" y1="6" x2="18" y2="18" stroke="#333" strokeWidth="2" />
                <line x1="6" y1="18" x2="18" y2="6" stroke="#333" strokeWidth="2" />
              </svg>
            </button>
            <nav className="flex flex-col gap-6">
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black text-lg font-light px-2 py-2 rounded hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
