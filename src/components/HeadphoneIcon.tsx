import React from "react";

export default function HeadphoneIcon({ className = "w-6 h-6 inline-block mr-2" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14a8 8 0 0 1 16 0" />
      <circle cx="6" cy="16.5" r="1.2" fill="currentColor" />
      <circle cx="18" cy="16.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
