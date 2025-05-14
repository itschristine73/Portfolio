'use client'
export default function BinaryGrungeBackground() {
  return (
    <svg
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none"
      viewBox="0 0 1440 1024"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Gradient for large screens: horizontal */}
        <linearGradient id="grungeGradientDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="50%" stopColor="#1a0000" />
          <stop offset="100%" stopColor="#330000" />
          <animate attributeName="x1" values="0%;100%;0%" dur="20s" repeatCount="indefinite" />
          <animate attributeName="x2" values="100%;0%;100%" dur="20s" repeatCount="indefinite" />
        </linearGradient>

        {/* Gradient for small screens: diagonal */}
        <linearGradient id="grungeGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="50%" stopColor="#1a0000" />
          <stop offset="100%" stopColor="#330000" />
          <animate attributeName="x1" values="0%;100%;0%" dur="20s" repeatCount="indefinite" />
          <animate attributeName="y2" values="100%;0%;100%" dur="20s" repeatCount="indefinite" />
        </linearGradient>
      </defs>

      {/* Desktop fill */}
      <rect
        width="1440"
        height="1024"
        className="hidden sm:block"
        fill="url(#grungeGradientDesktop)"
      />

      {/* Mobile fill */}
      <rect
        width="1440"
        height="1024"
        className="block sm:hidden"
        fill="url(#grungeGradientMobile)"
      />
    </svg>
  );
}
