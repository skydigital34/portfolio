import React, { useState } from 'react';
import { Monitor, TrendingUp, Rocket, Search, PenTool, Share2, MapPin, Activity, ArrowRight, X } from 'lucide-react';

const Youtube = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      num: '01',
      title: 'WEB DEVELOPMENT',
      desc: 'High-performance websites with clean code & scalability.',
      icon: Monitor,
      longDesc: 'We craft state-of-the-art web applications designed for maximum conversion, speed, and rock-solid security. Our solutions are tailored to scale with your growing business requirements.',
      features: [
        'Custom React & Next.js single page applications (SPAs)',
        'Headless CMS integrations (Sanity, Strapi, Contentful)',
        'Speed optimization & clean Core Web Vitals audit',
        'Secure API pipeline integrations (GraphQL, REST)'
      ]
    },
    {
      num: '02',
      title: 'BRANDING',
      desc: 'Crafting identities that are memorable and impactful.',
      icon: TrendingUp,
      longDesc: 'Establish a memorable corporate presence with consistent visual styling, detailed typography schemes, and bespoke digital component kits that tell your company story.',
      features: [
        'Logo design & visual brand guide books',
        'Bespoke typography & color palette selections',
        'Component UI libraries for unified visual presence',
        'Professional marketing collateral templates'
      ]
    },
    {
      num: '03',
      title: 'DIGITAL MARKETING',
      desc: 'Strategies that drive growth and boost online presence.',
      icon: Rocket,
      longDesc: 'Expand your outreach and drive user acquisitions with modern targeted ad campaigns, data-backed funnels, and optimized landing pages.',
      features: [
        'Search engine marketing (SEM) & social ad suites (Meta, Google)',
        'Lead capture conversion funnel modeling',
        'Audience segmentation & targeted keyword copywriting',
        'Conversion rate optimization (CRO) landing pages'
      ]
    },
    {
      num: '04',
      title: 'SEO (SEARCH ENGINE OPTIMIZATION)',
      desc: 'Optimizing technical structures and content authority to rank on top pages.',
      icon: Search,
      longDesc: 'Boost your organic reach on search result pages by optimizing site speed, clean code markup, and technical crawl indexing parameters.',
      features: [
        'On-Page SEO tuning (semantic headings, alt tags, schema markup)',
        'Technical SEO (crawling audits, sitemap setup, redirect maps)',
        'Organic keyword gap analysis & competitors profiling',
        'Core Web Vitals loading optimization for mobile devices'
      ]
    },
    {
      num: '05',
      title: 'YOUTUBE SEO',
      desc: 'Optimizing video metadata, search visibility, and audience retention.',
      icon: Youtube,
      longDesc: 'Grow your channel authority and video views with optimized search tags, description templates, engaging titles, and high-retention audience strategies.',
      features: [
        'Video keyword research & competitive intelligence',
        'Metadata optimization (titles, tags, descriptions)',
        'Thumbnail CTR optimization counseling',
        'Playlists structuring & card/end-screen strategy'
      ]
    },
    {
      num: '06',
      title: 'CONTENT WRITING',
      desc: 'High-quality, engaging content tailored for blogs, websites, and target audiences.',
      icon: PenTool,
      longDesc: 'Establish industry authority and engage users with high-converting, research-driven blog posts, website copy, and educational resources tailored to your target niche.',
      features: [
        'SEO-optimized blog posts & articles',
        'Website copywriting & landing page copy',
        'Content strategy & topic clustering plans',
        'Brand voice development & style guidelines'
      ]
    },
    {
      num: '07',
      title: 'SOCIAL MEDIA MANAGEMENT',
      desc: 'Managing profiles, designing content calendars, and growing brand engagement.',
      icon: Share2,
      longDesc: 'Enhance your brand presence and foster active community engagement across all social media channels with tailored content calendars, graphic designs, and response strategies.',
      features: [
        'Content calendar planning & post scheduling',
        'Platform-specific graphic & video design assets',
        'Audience engagement, comment management, & outreach',
        'Monthly analytics reporting & strategy optimization'
      ]
    },
    {
      num: '08',
      title: 'GMB (GOOGLE MY BUSINESS)',
      desc: 'Optimizing local business listings, Google Maps visibility, and customer reviews.',
      icon: MapPin,
      longDesc: 'Claim, verify, and optimize your Google Business Profile (GMB) presence to appear in local Map Pack queries, rank higher on Google Maps, and manage customer review acquisition.',
      features: [
        'Google Map Pack ranking & visibility optimization',
        'Local NAP (Name, Address, Phone) consistency audit',
        'Customer reviews acquisition & response setup',
        'Local business post updates, products cataloging & messaging'
      ]
    },
    {
      num: '09',
      title: 'GSC (GOOGLE SEARCH CONSOLE)',
      desc: 'Monitoring crawl indexes, submitting sitemaps, and troubleshooting organic keyword rankings.',
      icon: Activity,
      longDesc: 'Audit and troubleshoot your organic search indexing parameters directly using Google’s index database metrics.',
      features: [
        'Sitemap submission & organic search crawl status tracking',
        'Crawl error debugging (404s, mobile compatibility errors)',
        'Organic CTR monitoring & keyword query profiling',
        'Index request indexing for newly published URLs'
      ]
    }
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleModalClose = () => {
    setSelectedService(null);
  };

  const handleModalCTA = () => {
    setSelectedService(null);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-container">
      <p className="section-label">WHAT WE DO</p>
      <h2 className="section-title">
        SERVICES <span className="gradient-text-accent">THAT WE PROVIDE</span>
      </h2>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index} 
              className="service-card"
              onClick={() => handleCardClick(service)}
            >
              <span className="service-num">{service.num}</span>
              <div className="service-icon-box">
                <Icon size={20} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-arrow">
                <ArrowRight size={18} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={handleModalClose}>
          <div className="service-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={handleModalClose} aria-label="Close modal">
              <X size={16} />
            </button>
            
            <div className="service-modal-header">
              <div className="service-modal-icon-box">
                {React.createElement(selectedService.icon, { size: 24 })}
              </div>
              <h3 className="service-modal-title">{selectedService.title}</h3>
            </div>
            
            <p className="service-modal-desc">{selectedService.longDesc}</p>
            
            <div className="service-modal-features">
              <h4>WHAT WE DELIVER:</h4>
              <ul>
                {selectedService.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <span className="bullet-point">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="btn-primary" style={{ width: '100%', marginTop: '30px', justifyContent: 'center' }} onClick={handleModalCTA}>
              INQUIRE ABOUT THIS SERVICE <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
