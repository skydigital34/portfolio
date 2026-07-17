import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isMuted, setIsMuted] = useState(true);

  const handleSoundToggle = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.15);
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.15);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'center', 
      gap: '15px', 
      padding: '20px 0',
      width: '100%',
      zIndex: 50,
      position: 'relative'
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
    </header>
  );
}
