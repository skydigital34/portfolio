import React, { useState } from 'react';
import { ArrowUpRight, Layers, Volume2, VolumeX } from 'lucide-react';
import HeroIllustration from './HeroIllustration';
import heroBg from '../assets/herocharacter.png';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  const handleSoundToggle = () => {
    setIsMuted(!isMuted);
    // Optional: play a subtle sci-fi futuristic chime when unmuted
    if (isMuted) {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); // start value
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.15); // ramp up
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15); // fade out
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.15);
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(to right, #040207 35%, rgba(4, 2, 7, 0.85) 55%, rgba(4, 2, 7, 0.25) 90%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '16px',
        padding: '50px 60px',
        border: '1px solid rgba(127, 0, 255, 0.15)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), inset 0 0 50px rgba(0, 0, 0, 0.8)',
        position: 'relative'
      }}
    >
      {/* Top right absolute positioned controls wrapper inside the card! */}
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        zIndex: 10
      }}>
        <button 
          onClick={scrollToContact}
          className="btn-secondary" 
          style={{ padding: '8px 18px', borderRadius: '20px', fontSize: '12px' }}
        >
          LET'S CONNECT <ArrowUpRight size={13} style={{ marginLeft: '4px', display: 'inline' }} />
        </button>
        <button 
          onClick={handleSoundToggle}
          className="sound-toggle-btn"
          title={isMuted ? 'Unmute ambient sound' : 'Mute ambient sound'}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </div>
      <div className="hero-content">
        <div className="freelance-badge" style={{ marginBottom: '15px' }}>
          AVAILABLE FOR PROJECTS
        </div>

        <p className="hero-subtitle" style={{ marginTop: '10px' }}>HELLO, WE ARE</p>
        <h1 className="hero-title" style={{ fontSize: '50px' }}>
          FTC <span className="gradient-text-purple">DIGITAL</span>
        </h1>
        
        <p className="hero-slogan">
          WE DESIGN. WE BUILD. <span className="gradient-text-accent">WE ELEVATE BRANDS.</span>
        </p>
        
        <p className="hero-description">
          A premium digital solutions agency crafting pixel-perfect, high-performance web applications and brand ecosystems.
        </p>

        <div className="hero-buttons">
          <button onClick={scrollToProjects} className="btn-primary">
            VIEW OUR WORK <ArrowUpRight size={16} />
          </button>
          <button onClick={scrollToServices} className="btn-secondary">
            OUR SERVICES <Layers size={16} />
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <HeroIllustration />
      </div>
    </section>
  );
}
