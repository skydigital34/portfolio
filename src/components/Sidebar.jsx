import React, { useState, useEffect } from 'react';
import { Home, User, Layers, Briefcase, Activity, Mail } from 'lucide-react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Activity },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];



  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <aside className="sidebar">
      {/* Brand logo at the top */}
      <div className="sidebar-logo" onClick={() => handleNavClick('home')}>
        FTC
      </div>

      {/* Navigation menu */}
      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <a
                onClick={() => handleNavClick(item.id)}
                className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                role="button"
              >
                <Icon />
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>


    </aside>
  );
}

