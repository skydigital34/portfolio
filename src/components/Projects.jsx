import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import projectAarav from '../assets/project_aarav.png';
import projectAadrika from '../assets/project_aadrika.png';
import projectKalappai from '../assets/project_kalappai.png';
import projectTravel from '../assets/project_travel.png';
import projectFtc from '../assets/project_ftc.png';
import projectAmsaveni from '../assets/project_amsaveni.png';

export default function Projects() {
  const projects = [
    {
      num: '01',
      title: 'AARAV WEDDING HALL',
      subtitle: 'Luxury Venue Booking Portal',
      tags: ['React.js', 'Online Booking', 'Event Scheduling'],
      mediaUrl: projectAarav,
      projectUrl: 'https://www.aaravweddinghall.com/'
    },
    {
      num: '02',
      title: 'AADRIKA WEDDING HALL',
      subtitle: 'Premium Venue Booking Platform',
      tags: ['Next.js', 'Interactive Gallery', 'UX Design'],
      mediaUrl: projectAadrika,
      projectUrl: 'https://aadrika-git-main-ramcse142-1713s-projects.vercel.app/'
    },
    {
      num: '03',
      title: 'NAMMA KALAPPAI',
      subtitle: 'Agri-Tech & Smart Farmer Dashboard',
      tags: ['React', 'IoT Platforms', 'Data Visualizations'],
      mediaUrl: projectKalappai,
      projectUrl: 'https://nammakalappai.com/'
    },
    {
      num: '04',
      title: 'JK TOURS AND TRAVELS',
      subtitle: 'Travel Agency & Holiday Planner Portal',
      tags: ['React', 'API Integrations', 'Interactive Maps'],
      mediaUrl: projectTravel,
      projectUrl: 'https://ramkumar143z.github.io/JKHOLIDAYS/'
    },
    {
      num: '05',
      title: 'FTC PAPER MACHINE',
      subtitle: 'Industrial Machinery & Manufacturing Portal',
      tags: ['WordPress', 'Product Showcase', 'Lead Generation'],
      mediaUrl: projectFtc,
      projectUrl: 'https://ftcpapermachine.com/paper-bag-making-machine-manufacturer/?gad_source=1&gad_campaignid=23493660691&gbraid=0AAAAA-dfWLHRJ75OeMhSmgQhuwYMWXSs8&gclid=Cj0KCQjwguLSBhDLARIsAH-yPrGiBWLPk0ARbWPVFoOfOYc6GGkqAojWlgri3lhPPiKwMoyQqjKytvMaAqoqEALw_wcB'
    },
    {
      num: '06',
      title: 'AMSAVENI CLINIC',
      subtitle: 'Healthcare Portal & Patient Appointment Scheduler',
      tags: ['Next.js', 'Booking System', 'Responsive UI'],
      mediaUrl: projectAmsaveni,
      projectUrl: 'https://dramsaveni.com/'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="projects-header">
        <div>
          <p className="section-label">MY WORK</p>
          <h2 className="section-title">
            FEATURED <span className="gradient-text-accent">PROJECTS</span>
          </h2>
        </div>
        <button 
          className="btn-secondary" 
          style={{ padding: '10px 20px', borderRadius: '20px', fontSize: '12px' }}
        >
          VIEW ALL PROJECTS <ArrowUpRight size={13} style={{ marginLeft: '4px', display: 'inline' }} />
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isExternal = project.projectUrl !== '#';
          return (
            <a 
              key={index} 
              href={project.projectUrl}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="project-card"
              style={{ textDecoration: 'none' }}
            >
              {/* Absolute Badge */}
              <span className="project-card-num">{project.num}</span>

              {/* Graphics Media aligned to the right */}
              <div className="project-media-wrapper">
                <div className="project-media-overlay"></div>
                <img 
                  src={project.mediaUrl} 
                  alt={project.title}
                  className="project-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-normal)'
                  }}
                />
              </div>

              {/* Info columns on the left */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
