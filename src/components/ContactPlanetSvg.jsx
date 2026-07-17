import React from 'react';

export default function ContactPlanetSvg() {
  return (
    <div className="contact-planet-bg-wrapper">
      <svg
        className="contact-planet-svg"
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Neon Purple Filter */}
          <filter id="planet-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="25" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <radialGradient id="planet-body" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#d946ef" />
            <stop offset="35%" stopColor="#701a75" />
            <stop offset="70%" stopColor="#1e0b36" />
            <stop offset="100%" stopColor="#03010c" />
          </radialGradient>

          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a21caf" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7e22ce" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Deep Space Background Overlay */}
        <rect width="1000" height="400" fill="#030206" opacity="0.4" />

        {/* Twinkling Stars in Background */}
        <g className="stars-group">
          <circle cx="100" cy="80" r="1" fill="#ffffff" opacity="0.8" className="star-blink-1" />
          <circle cx="250" cy="150" r="1.5" fill="#ffffff" opacity="0.5" className="star-blink-2" />
          <circle cx="450" cy="50" r="1.2" fill="#c084fc" opacity="0.7" className="star-blink-3" />
          <circle cx="680" cy="90" r="1" fill="#ffffff" opacity="0.9" className="star-blink-1" />
          <circle cx="850" cy="180" r="2" fill="#a21caf" opacity="0.4" className="star-blink-2" />
          <circle cx="920" cy="70" r="1.2" fill="#ffffff" opacity="0.6" className="star-blink-3" />
          <circle cx="150" cy="300" r="1" fill="#ffffff" opacity="0.5" className="star-blink-2" />
          <circle cx="320" cy="280" r="1.5" fill="#00ffff" opacity="0.6" className="star-blink-3" />
          <circle cx="550" cy="340" r="1.2" fill="#ffffff" opacity="0.8" className="star-blink-1" />
          <circle cx="790" cy="310" r="1" fill="#ffffff" opacity="0.4" className="star-blink-2" />
        </g>

        {/* Cosmic Nebula Glow Behind Planet */}
        <circle cx="500" cy="360" r="280" fill="#7e22ce" opacity="0.18" filter="url(#planet-glow)" />
        <circle cx="520" cy="380" r="150" fill="#06b6d4" opacity="0.12" filter="url(#planet-glow)" />

        {/* Planet Back Ring Layer (Rendered behind the planet to look 3D) */}
        <ellipse cx="500" cy="350" rx="360" ry="65" stroke="url(#ring-grad)" strokeWidth="6" transform="rotate(-12 500 350)" opacity="0.45" />
        <ellipse cx="500" cy="350" rx="330" ry="50" stroke="url(#ring-grad)" strokeWidth="3" transform="rotate(-12 500 350)" opacity="0.3" />

        {/* Main Planet Body (Partially cropped at the bottom of the section) */}
        <circle cx="500" cy="380" r="180" fill="url(#planet-body)" filter="url(#planet-glow)" />

        {/* Planet Front Ring Layer (Rendered in front of the planet to wrap it) */}
        {/* We use a clip-path or draw arcs so it only overlays the front. 
            Alternatively, an arc covering the front half of the ellipse:
            from angle ~180 to ~360. In SVG we can draw an arc path. */}
        <path
          d="M 148,300 A 360,65 0 0,0 852,400"
          stroke="url(#ring-grad)"
          strokeWidth="6"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M 178,310 A 330,50 0 0,0 822,390"
          stroke="url(#ring-grad)"
          strokeWidth="3.5"
          fill="none"
          opacity="0.6"
        />

        {/* Planet Atmospheric Edge Glow */}
        <circle cx="500" cy="380" r="180" stroke="#d946ef" strokeWidth="2.5" fill="none" opacity="0.7" />
        
        {/* Floating Asteroids / space particles near the rings */}
        <circle cx="250" cy="270" r="2.5" fill="#a21caf" opacity="0.8" />
        <circle cx="340" cy="295" r="1.5" fill="#ffffff" opacity="0.6" />
        <circle cx="680" cy="335" r="3.2" fill="#7e22ce" opacity="0.7" />
        <circle cx="750" cy="320" r="2" fill="#06b6d4" opacity="0.8" />
      </svg>
    </div>
  );
}
