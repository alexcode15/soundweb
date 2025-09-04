import React from "react";

export default function AnimatedBlob() {
  return (
  <div className="w-64 h-64 mx-auto mt-4 mb-2 relative" style={{ background: 'white', zIndex: 0 }}>
      <svg viewBox="0 0 384 384" className="w-full h-full">
        <defs>
          <radialGradient id="sphereGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.98">
              <animate attributeName="stop-color" values="#e0f2fe;#e0e7ff;#f7faff;#e0f2fe" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="30%" stopColor="#bae6fd" stopOpacity="0.7">
              <animate attributeName="stop-color" values="#bae6fd;#c7d2fe;#e7eafe;#bae6fd" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="55%" stopColor="#c7d2fe" stopOpacity="0.6">
              <animate attributeName="stop-color" values="#c7d2fe;#fbcfe8;#e9d5ff;#c7d2fe" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="75%" stopColor="#fdeff6" stopOpacity="0.22">
              <animate attributeName="stop-color" values="#fdeff6;#f3e8ff;#f0f9ff;#fdeff6" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#fff" stopOpacity="0.04">
              <animate attributeName="stop-color" values="#fff;#f0f9ff;#e0e7ff;#fff" dur="8s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
          <radialGradient id="highlight" cx="35%" cy="30%" r="30%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7">
              <animate attributeName="stop-opacity" values="0.7;0.5;0.7" dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <filter id="outerGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="28" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Main sphere with soft gradient */}
        <circle
          cx="192"
          cy="192"
          r="144"
          fill="url(#sphereGradient)"
          filter="url(#outerGlow)"
        />
        {/* Subtle shadow at the bottom for 3D effect */}
        <ellipse
          cx="192"
          cy="264"
          rx="84"
          ry="22"
          fill="#e0e7ef"
          opacity="0.22"
        />
        {/* Very soft, slow, horizontal gradient shift for subtle light movement */}
        <linearGradient id="softMove" x1="0" y1="160" x2="320" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.04">
            <animate attributeName="offset" values="0;0.2;0.4;0.2;0" dur="12s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#fff" stopOpacity="0.07">
            <animate attributeName="offset" values="0.4;0.6;0.8;0.6;0.4" dur="12s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#fff" stopOpacity="0.04">
            <animate attributeName="offset" values="0.8;1;0.8;0.6;0.8" dur="12s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <ellipse
          cx="192"
          cy="192"
          rx="144"
          ry="144"
          fill="url(#softMove)"
        />
      </svg>
    </div>
  );
}
