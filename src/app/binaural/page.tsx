"use client";
import { useState } from "react";
interface AudioPlayerBarProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentTime: number;
  duration: number;
  onBarClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  volume: number;
  onVolumeChange: (v: number) => void;
}

function formatTime(sec: number) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function AudioPlayerBar({ isPlaying, onPlayPause, currentTime, duration, onBarClick, volume, onVolumeChange }: AudioPlayerBarProps) {
  const percent = duration ? (currentTime / duration) * 100 : 0;
  return (
    <div className="w-full flex items-center gap-4">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow hover:scale-105 transition-transform ml-10"
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="6" height="20" rx="2" fill="#000" />
            <rect x="20" y="6" width="6" height="20" rx="2" fill="#000" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <polygon points="8,6 26,16 8,26" fill="#000" />
          </svg>
        )}
      </button>
      <span className="text-xs text-gray-500 w-12 text-right">{formatTime(currentTime)}</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden cursor-pointer" onClick={onBarClick}>
        <div
          className="h-full bg-gradient-to-r from-indigo-300 via-pink-200 to-purple-200 transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-500 w-12 text-right">{formatTime(duration)}</span>
      <div className="flex items-center ml-4 gap-2">
        <button className="text-gray-500 hover:text-gray-700 p-0" tabIndex={-1} aria-label="Volume">
          {/* Minimal modern volume icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 8v4h3l4 4V4l-4 4H3z" fill="#333"/>
            <path d="M14.5 10c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" fill="#333"/>
          </svg>
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={e => onVolumeChange(Number(e.target.value))}
          className="w-24 h-1 accent-indigo-400 cursor-pointer"
          aria-label="Volume slider"
        />
      </div>
    </div>
  );
}
import Link from "next/link";
import { useRef } from "react";
import PlayButton from "../../components/PlayButton";
import AnimatedBlob from "../../components/AnimatedBlob";
import HeadphoneIcon from "../../components/HeadphoneIcon";

export default function BinauralComposition() {
  const menu = [
    { label: "About", href: "/about" },
    { label: "Binaural Composition", href: "/binaural" },
    { label: "Your Sounds", href: "/your-sounds" },
    { label: "Submit", href: "/submit" },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
  };

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const newTime = percent * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (v: number) => {
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
  };

  if (audioRef.current) {
    audioRef.current.volume = volume;
  }
  return (
  <div className="fixed inset-0 z-50 bg-white text-black min-h-screen w-full overflow-y-auto">
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
      <main className="flex flex-1 w-full h-full pt-24 px-8 gap-8 items-start justify-center">
        {/* Mobile: Unified layout */}
        <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto md:hidden">
          <h2 className="text-3xl font-bold mt-4 mb-8 text-center w-full">Binaural Composition</h2>
          <div className="relative flex flex-col items-center w-full mb-4">
            <div className="relative flex items-center justify-center w-64 h-64 mb-4">
              <AnimatedBlob />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                  <PlayButton onClick={handlePlayPause} isPlaying={isPlaying} />
                </div>
              </div>
            </div>
            <audio
              ref={audioRef}
              src="/binaural.wav"
              className="hidden"
              onEnded={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
            <div className="mt-2 text-gray-600 text-sm flex flex-col items-center mb-4">
              <span className="flex items-center mb-1">
                <HeadphoneIcon />
                <span className="ml-2">Please listen with headphones</span>
              </span>
              <span className="text-sm text-gray-400">Si consiglia l&apos;ascolto in cuffia</span>
            </div>
          </div>
          <div className="max-w-xl text-base text-gray-700 text-center mb-16 mx-4">
            <div className="mt-4 relative z-20">
              <p className="mb-6 font-serif text-sm md:text-base text-black text-center">
                This composition is made from sounds and words shared by participants. Together, they form an acoustic collage, drifting between memories and present-day experiences. The piece is shaped by the act of listening as method, a process of attuning to what usually goes unnoticed, positioning sound as both document and expression.
              </p>
              <p className="mb-4 mt-8 text-gray-500 font-serif italic text-center text-sm md:text-base">
                Questa composizione nasce dai suoni e dalle parole condivise dai partecipanti. Insieme formano un collage acustico, che si muove tra ricordi e vissuti attuali. La composizione nasce dall&apos;ascolto come metodo per innestare un processo di attenzione a ciò che di solito passa inosservato, in cui il suono è al contempo documento ed espressione.<br /><br />
                <span className="font-mono text-black not-italic text-xs">10 MIN</span>
              </p>
              <div className="mb-16"></div>
            </div>
          </div>
        </div>
        {/* Desktop: Split layout */}
        <div className="hidden md:flex w-full h-full max-w-6xl mx-auto flex-row items-start justify-center gap-8">
          {/* Left: Play Button, Blob, Headphone */}
          <div className="flex flex-col items-center justify-center w-1/2 min-w-[400px]">
            <div className="relative flex flex-col items-center w-full">
              <div className="relative flex items-center justify-center min-w-[256px] w-80 h-80 mb-4">
                <AnimatedBlob />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="pointer-events-auto">
                    <PlayButton onClick={handlePlayPause} isPlaying={isPlaying} />
                  </div>
                </div>
              </div>
              <audio
                ref={audioRef}
                src="/binaural.wav"
                className="hidden"
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              />
              <div className="mt-2 text-gray-600 text-sm flex flex-col items-center mb-4">
                <span className="flex items-center mb-1">
                  <HeadphoneIcon />
                  <span className="ml-2">Please listen with headphones</span>
                </span>
                <span className="text-sm text-gray-400">Si consiglia l&apos;ascolto in cuffia</span>
              </div>
            </div>
          </div>
          {/* Right: Title and Text */}
          <div className="flex flex-col items-start justify-start w-3/5 md:pl-8 md:pt-8">
            <h2 className="text-3xl font-bold mb-8 text-left w-full">Binaural Composition</h2>
            <div className="max-w-xl text-base text-gray-700">
              <div className="mt-4">
                <p className="mb-6 font-serif text-sm md:text-base text-black text-left">
                  This composition is made from sounds and words shared by participants. Together, they form an acoustic collage, drifting between memories and present-day experiences. The piece is shaped by the act of listening as method, a process of attuning to what usually goes unnoticed, positioning sound as both document and expression.
                </p>
                <p className="mb-4 mt-8 text-gray-700 font-serif italic text-left text-base">
                  Questa composizione nasce dai suoni e dalle parole registrati e condivisi dai partecipanti. Insieme formano un collage acustico, che si muove tra ricordi e vissuti attuali. La composizione nasce dall&apos;ascolto come metodo per innestare un processo di attenzione a ciò che di solito passa inosservato, in cui il suono è al contempo documento ed espressione.<br /><br />
                  <span className="font-mono text-black not-italic text-xs">10 MIN</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-center z-50">
        <AudioPlayerBar
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          currentTime={currentTime}
          duration={duration}
          onBarClick={handleBarClick}
          volume={volume}
          onVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}
