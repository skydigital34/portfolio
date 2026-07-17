import React from 'react';
import { Shield, Compass, Sparkles } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: Shield,
      title: 'Reliability',
      desc: 'Delivering robust, secure, and production-ready applications with zero compromises.'
    },
    {
      icon: Compass,
      title: 'Precision',
      desc: 'Crafting pixel-perfect designs with clean layouts and premium typography systems.'
    },
    {
      icon: Sparkles,
      title: 'Aesthetics',
      desc: 'Designing interfaces with smooth gradients, glowing indicators, and micro-interactions.'
    }
  ];

  return (
    <section id="about" className="section-container about-section">
      <p className="section-label">WHO WE ARE</p>
      <h2 className="section-title">
        ABOUT <span className="gradient-text-accent">US</span>
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px' }}>
            FTC Digital Solution is a premium digital agency specialized in translating complex workflows into simple, engaging, and state-of-the-art interactive web applications. By fusing robust engineering principles with high-end design aesthetics, we help modern brands establish a commanding digital presence.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8' }}>
            Over the past 1+ years, our collective team has collaborated with tech innovators, corporate partners, and creative agencies to ship robust products using front-end technologies like React, Next.js, and high-performance server systems.
          </p>
        </div>

        <div className="about-details">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '15px', color: 'var(--text-primary)' }}>Agency Details</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Services:</strong> Web Dev, SEO, SMM & Content Writing</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Track Record:</strong> 1+ Years of Excellence</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Email:</strong> skillstar66@gmail.com</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Location:</strong> 2nd Floor, B3, Raju Nagar, Eru Company, Kuppakonam Pudur, Coimbatore – 641043, Tamil Nadu, India.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Availability:</strong> Open for Projects</li>
          </ul>
        </div>
      </div>

      {/* Philosophy mini cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '25px' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '8px', backgroundColor: 'rgba(184, 0, 255, 0.05)', color: 'var(--accent-neon)', marginBottom: '15px' }}>
                <Icon size={18} />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>{card.title}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
