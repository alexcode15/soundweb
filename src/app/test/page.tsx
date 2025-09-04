import React, { useRef, useState } from "react";

export default function TestPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
      setCurrentTime(Number(e.target.value));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value);
      setVolume(Number(e.target.value));
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 600, margin: "0 auto" }}>
      <h1>Binaural Test</h1>
      <p>
        Questa è una composizione binaurale. Indossa le cuffie per ascoltare l'audio.
      </p>
      <audio
        ref={audioRef}
        src="/binaural1.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={handlePlayPause} style={{ fontSize: "1.2rem" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          style={{ flex: 1 }}
        />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          style={{ width: 100 }}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <span>{Math.floor(currentTime)}s / {Math.floor(duration)}s</span>
      </div>
    </main>
  );
}
