import React from 'react';

export default function Skills() {
  const skillsList = [
    {
      name: 'HTML5',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3 L19 3 L17.5 19 L12 21 L6.5 19 Z" fill="#E34F26" />
          <path d="M12 4.5 L12 19.5 L16.3 17.9 L17.3 7.5 L12 7.5 Z" fill="#EF652A" />
          <path d="M12 10.5 L14.5 10.5 L14.3 13 L12 13.7 L12 15.5 L15.5 14.5 L15.9 10 L9.3 10 L9.5 12 L12 12 Z" fill="white" />
          <path d="M12 7.5 L8.5 7.5 L8.7 9.5 L12 9.5 Z" fill="#EBEBEB" />
          <path d="M12 12.5 L9.7 12.5 L9.5 14.5 L12 15.2 Z" fill="#EBEBEB" />
        </svg>
      )
    },
    {
      name: 'CSS3',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3 L19 3 L17.5 19 L12 21 L6.5 19 Z" fill="#1572B6" />
          <path d="M12 4.5 L12 19.5 L16.3 17.9 L17.3 7.5 L12 7.5 Z" fill="#33A9DC" />
          <path d="M12 10.5 L14.5 10.5 L14.3 13 L12 13.7 L12 15.5 L15.5 14.5 L15.9 10 L9.3 10 L9.5 12 L12 12 Z" fill="white" />
          <path d="M12 7.5 L8.5 7.5 L8.7 9.5 L12 9.5 Z" fill="#EBEBEB" />
          <path d="M12 12.5 L9.7 12.5 L9.5 14.5 L12 15.2 Z" fill="#EBEBEB" />
        </svg>
      )
    },
    {
      name: 'JavaScript',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M13 10 C13 8 15 8 15.5 9.5 M13 14.5 Q14 16 16.5 15 M18 10 V14.5 C18 17 15.5 17.2 14.5 16 M18 12.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="13" y="19" fill="black" fontSize="9" fontWeight="900" fontFamily="sans-serif">JS</text>
        </svg>
      )
    },
    {
      name: 'React.js',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#00D8FF" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" fill="none" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" fill="none" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" fill="none" transform="rotate(150 12 12)" />
        </svg>
      )
    },
    {
      name: 'Next.js',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="black" stroke="#333333" strokeWidth="1" />
          <path d="M16.5 16.5 L9.5 7.5 L8.5 7.5 L8.5 16.5 L9.8 16.5 L9.8 9.5 L15.8 17.2 Z" fill="white" />
          <rect x="15" y="7.5" width="1.3" height="9" fill="white" />
        </svg>
      )
    },
    {
      name: 'Node.js',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 L4 6.5 L4 15.5 L12 20 L20 15.5 L20 6.5 Z" stroke="#339933" strokeWidth="1.5" fill="none" />
          <path d="M12 4 L6 7.5 L6 14.5 L12 18 L18 14.5 L18 7.5 Z" fill="#339933" opacity="0.2" />
          <path d="M12 7 L12 15 M9 10 L15 13 M15 10 L9 13" stroke="#339933" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6 C8.5 6 6.5 8 6 12 C7.5 10 9 10 10.5 11 C11.5 11.7 12.5 12.7 14 12.7 C17.5 12.7 19.5 10.7 20 6.7 C18.5 8.7 17 8.7 15.5 7.7 C14.5 7 13.5 6 12 6 Z M6 12.7 C2.5 12.7 0.5 14.7 0 18.7 C1.5 16.7 3 16.7 4.5 17.7 C5.5 18.4 6.5 19.4 8 19.4 C11.5 19.4 13.5 17.4 14 13.4 C12.5 15.4 11 15.4 9.5 14.4 C8.5 13.7 7.5 12.7 6 12.7 Z" fill="#06B6D4" />
        </svg>
      )
    },
    {
      name: 'GSAP',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#88CE02" />
          <path d="M 6,15 C 6,10 8,8 12,8 C 16,8 18,10 18,15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="9" cy="14" r="1.5" fill="white" />
          <circle cx="15" cy="14" r="1.5" fill="white" />
        </svg>
      )
    },
    {
      name: 'Three.js',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 L22 8 L22 16 L12 22 L2 16 L2 8 Z" stroke="white" strokeWidth="1.2" fill="none" />
          <path d="M12 2 L12 22 M2 8 L22 16 M2 16 L22 8" stroke="white" strokeWidth="0.8" opacity="0.6" />
          <polygon points="12,12 22,8 12,2 2,8" fill="white" opacity="0.08" />
          <polygon points="12,12 2,16 12,22 22,16" fill="white" opacity="0.15" />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1.5 C12 1.5 7.5 7 7.5 12 C7.5 17.5 12 22.5 12 22.5 C12 22.5 16.5 17.5 16.5 12 C16.5 7 12 1.5 12 1.5 Z" fill="#47A248" />
          <path d="M12 1.5 C12 1.5 12 8 12 22.5" stroke="#3FA037" strokeWidth="1.8" />
          <path d="M12 5 C10.5 8.5 10.5 12 12 15" stroke="white" strokeWidth="0.8" opacity="0.5" fill="none" />
        </svg>
      )
    },
    {
      name: 'Firebase',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.8 17.2 L8.2 4 L11.2 9.5 Z" fill="#FFC107" />
          <path d="M3.8 17.2 L12.5 22.2 L20.2 17.2 L12.5 12 Z" fill="#DD2C00" />
          <path d="M11.2 9.5 L12.5 12 L14 7.2 L20.2 17.2 Z" fill="#FF9100" />
        </svg>
      )
    },
    {
      name: 'Figma',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6 A3 3 0 0 1 10 3 H13 V9 H10 A3 3 0 0 1 7 6 Z" fill="#F24E1E" />
          <path d="M7 12 A3 3 0 0 1 10 9 H13 V15 H10 A3 3 0 0 1 7 12 Z" fill="#A259FF" />
          <path d="M7 18 A3 3 0 0 1 10 15 H13 V18 A3 3 0 0 1 10 21 A3 3 0 0 1 7 18 Z" fill="#0ACF83" />
          <circle cx="16" cy="12" r="3" fill="#1ABC9C" />
          <path d="M13 3 H16 A3 3 0 0 1 19 6 A3 3 0 0 1 16 9 H13 V3 Z" fill="#FF7262" />
        </svg>
      )
    },
    {
      name: 'SEO',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#00D8FF" opacity="0.1" />
          <circle cx="10" cy="10" r="5" stroke="#00D8FF" strokeWidth="1.8" />
          <line x1="13.5" y1="13.5" x2="20" y2="20" stroke="#00D8FF" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 12V9M10 12V7M12 12V10" stroke="#00D8FF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'YouTube SEO',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#FF0000" opacity="0.1" />
          <path d="M20 7c-.5-1.5-1.5-2.5-3-2.5H7C5.5 4.5 4.5 5.5 4 7c-.5 1.5-.5 3.5-.5 5s0 3.5.5 5c.5 1.5 1.5 2.5 3 2.5h10c1.5 0 2.5-1 3-2.5.5-1.5.5-3.5.5-5s0-3.5-.5-5z" stroke="#FF0000" strokeWidth="1.8" fill="none" />
          <polygon points="10 9 15 12 10 15" fill="#FF0000" />
        </svg>
      )
    },
    {
      name: 'Content Writing',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#B800FF" opacity="0.1" />
          <path d="M12 20h8M5 16l9-9 3 3-9 9H5v-3z" stroke="#B800FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Social Media Management',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#1877F2" opacity="0.1" />
          <circle cx="18" cy="5" r="3" stroke="#1877F2" strokeWidth="1.8" />
          <circle cx="6" cy="12" r="3" stroke="#1877F2" strokeWidth="1.8" />
          <circle cx="18" cy="19" r="3" stroke="#1877F2" strokeWidth="1.8" />
          <line x1="8.5" y1="10.5" x2="15.5" y2="6.5" stroke="#1877F2" strokeWidth="1.8" />
          <line x1="8.5" y1="13.5" x2="15.5" y2="17.5" stroke="#1877F2" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      name: 'Google Analytics',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#E37400" opacity="0.1" />
          <path d="M6 18V15M12 18V10M18 18V6" stroke="#E37400" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="18" cy="6" r="1.5" fill="#E37400" />
          <circle cx="12" cy="10" r="1.5" fill="#E37400" />
          <circle cx="6" cy="15" r="1.5" fill="#E37400" />
        </svg>
      )
    },
    {
      name: 'Search Console',
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#4285F4" opacity="0.1" />
          <path d="M4 15A8 8 0 0 1 20 15" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="15" x2="15" y2="10" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="15" r="1.5" fill="#4285F4" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="skills-wrapper">
        
        {/* Left column info */}
        <div className="skills-left">
          <h2 className="section-title">
            SKILLS & <span className="gradient-text-purple">TOOLS</span>
          </h2>
          <p className="skills-desc">
            I combine creativity with technology to deliver exceptional digital solutions. I code interfaces that feel premium, performant, and completely responsive.
          </p>
        </div>

        {/* Center column grid card */}
        <div className="skills-middle-card">
          <div className="skills-grid-container">
            {skillsList.map((skill, index) => (
              <div key={index} className="skill-item-wrapper" title={skill.name}>
                <div className="skill-icon-card-square">
                  {skill.svg}
                </div>
                <span className="skill-name-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column statistics card */}
        <div className="skills-stats-card">
          
          {/* Stat 1: 100% Client Satisfaction */}
          <div className="circular-stat-item">
            <div className="circular-progress-wrapper">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="26" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="4" fill="none" />
                <circle
                  className="progress-ring-circle"
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="var(--accent-purple)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="163.3"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="circular-stat-value">100%</div>
            </div>
            <div className="circular-stat-info">
              <span className="circular-stat-title">Client<br />Satisfaction</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          {/* Stat 2: 50+ Technologies Mastered */}
          <div className="circular-stat-item">
            <div className="circular-progress-wrapper">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="26" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="4" fill="none" />
                <circle
                  className="progress-ring-circle"
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="var(--accent-cyan)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="163.3"
                  strokeDashoffset="24"
                />
              </svg>
              <div className="circular-stat-value">50+</div>
            </div>
            <div className="circular-stat-info">
              <span className="circular-stat-title">Technologies<br />Mastered</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          {/* Stat 3: Passion for Design & Code */}
          <div className="circular-stat-item">
            <div className="circular-progress-wrapper">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="26" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="4" fill="none" />
                <circle
                  className="progress-ring-circle"
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="var(--accent-neon)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="163.3"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="circular-stat-value" style={{ fontSize: '20px', top: '-2px' }}>∞</div>
            </div>
            <div className="circular-stat-info">
              <span className="circular-stat-title">Passion For<br />Design & Code</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
