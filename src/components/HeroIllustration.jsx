import React from 'react';

export default function HeroIllustration() {
  return (
    <div className="hero-image-wrapper" style={{ position: 'relative' }}>
      {/* Script Signature in the background */}
      <div className="hero-signature" style={{ zIndex: 1 }}>FTC.</div>
      
      {/* Animated Vertical Decorative Text */}
      <div className="hero-vertical-text" style={{ zIndex: 1 }}>
        <span>CREATIVE</span>
        <span>FOCUSED</span>
        <span>DETAILED</span>
        <span>DRIVEN</span>
      </div>
    </div>
  );
}
