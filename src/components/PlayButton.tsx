import React from "react";

export default function PlayButton({ onClick, isPlaying }: { onClick: () => void; isPlaying: boolean }) {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:scale-105 transition-transform"
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? (
        <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="6" height="20" rx="2" fill="#000" />
          <rect x="20" y="6" width="6" height="20" rx="2" fill="#000" />
        </svg>
      ) : (
        <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
          <polygon points="8,6 26,16 8,26" fill="#000" />
        </svg>
      )}
    </button>
  );
}
