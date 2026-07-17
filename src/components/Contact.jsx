import React from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import ContactPlanetSvg from './ContactPlanetSvg';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Space planet background */}
      <ContactPlanetSvg />

      <div className="contact-content">
        <div className="contact-left">
          <p className="contact-pre">LET'S WORK TOGETHER</p>
          <h2 className="contact-title">
            HAVE A <span className="gradient-text-accent">PROJECT</span> IN MIND?
          </h2>
          <p className="contact-desc">
            We are always open to discussing product design work, full-stack website development, or partnership opportunities. Let's create something extraordinary.
          </p>
        </div>

        <div className="contact-right">
          <a href="mailto:sivakishna34@gmail.com" className="btn-primary" style={{ padding: '16px 36px', fontSize: '15px' }}>
            LET'S CONNECT <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Contact info detail bar */}
      <div className="contact-info-footer">
        <div className="contact-info-item">
          <Mail size={16} />
          <span>SIVAKISHNA34@GMAIL.COM</span>
        </div>
        <div className="contact-info-item">
          <Phone size={16} />
          <span>+91 8637415015</span>
        </div>
        <div className="contact-info-item">
          <MapPin size={16} />
          <span>NO.25/1, RANGA LAYOUT 2, GANAPATHY POST, NALLAMPALAYAM, COIMBATORE, TAMIL NADU 641027</span>
        </div>
      </div>
    </section>
  );
}
