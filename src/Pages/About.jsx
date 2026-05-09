import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../Components/SEO';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const tradeRef = useRef(null);
  const certRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: storyRef.current, start: 'top 80%' } }
    );
    gsap.fromTo(
      [missionRef.current, visionRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, scrollTrigger: { trigger: missionRef.current, start: 'top 75%' } }
    );
    gsap.fromTo(
      tradeRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: tradeRef.current, start: 'top 75%' } }
    );
    gsap.fromTo(
      certRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, scrollTrigger: { trigger: certRef.current, start: 'top 75%' } }
    );
    return () => { ScrollTrigger.getAll().forEach(trigger => trigger.kill()); };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background-color 0.4s ease, color 0.4s ease' }}>
      <SEO
        title="About Sunrise Crest | Import Export Excellence"
        description="Established in Tokyo in 2022, Sunrise Crest connects premium food producers with global markets. Certified ISO 22000, HACCP, and Halal compliant."
        keywords="food trading company, food import export, Tokyo trading, certified food trading, ISO 22000, HACCP certification"
      />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div ref={heroRef} className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">About Sunrise Crest</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
            Connecting continents through quality food trading since 2022
          </p>
          <div className="h-[1px] w-32 mx-auto" style={{ backgroundColor: 'var(--accent)' }} />
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Established 2022</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Sunrise Crest was founded in Tokyo with a vision to bridge the gap between premium food producers and global markets. What started as a small import-export venture has grown into a trusted name in international food trade.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Our headquarters in Tokyo's business district serves as the command center for operations spanning across continents, connecting quality producers with discerning markets worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Growth & Excellence</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                In just two years, we've established trading partnerships in over 20 countries, specializing in premium spices, grains, nuts, and specialty food products. Our commitment to quality and authenticity has made us a preferred partner for both suppliers and buyers.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Every product we handle meets stringent international quality standards, ensuring our clients receive only the finest goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.4s ease' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div ref={missionRef} className="p-8" style={{ border: '1px solid var(--border)', transition: 'border-color 0.4s ease' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                To deliver exceptional value to our partners by sourcing and distributing premium food products globally, while maintaining the highest standards of quality, transparency, and sustainability.
              </p>
              <ul className="space-y-4">
                {['Quality assurance at every step of the supply chain', 'Building long-term, mutually beneficial partnerships', 'Ethical sourcing and sustainable practices'].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--accent)' }}>•</span>
                    <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div ref={visionRef} className="p-8" style={{ border: '1px solid var(--border)', transition: 'border-color 0.4s ease' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                To become the most trusted name in global food trading, recognized for uncompromising quality, innovation, and customer-centric service across all markets we serve.
              </p>
              <ul className="space-y-4">
                {['Expand to 50+ countries by 2030', 'Pioneer sustainable food trade practices', 'Empower small-scale producers through fair trade'].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--accent)' }}>•</span>
                    <span style={{ color: 'var(--text-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Trade Presence */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Global Trade Network</h2>
          <p className="text-center mb-16 max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            From our Tokyo headquarters, we facilitate trade across continents, connecting premium suppliers with quality-conscious markets worldwide.
          </p>
          <div ref={tradeRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[['20+', 'Countries'], ['500+', 'Shipments/Year'], ['50+', 'Products'], ['24/7', 'Support']].map(([num, label]) => (
              <div key={label} className="text-center p-6 transition-all" style={{ border: '1px solid var(--border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <h3 className="text-4xl font-bold mb-2">{num}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              ['Asia Pacific', 'Japan, India, Vietnam, Thailand, Singapore, Malaysia'],
              ['Middle East', 'UAE, Saudi Arabia, Qatar, Kuwait, Jordan, Bahrain'],
              ['Europe & Americas', 'UK, Germany, USA, Netherlands, Spain, Australia'],
            ].map(([region, countries]) => (
              <div key={region} className="p-6">
                <h4 className="text-xl font-bold mb-4">{region}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--bg-secondary)', transition: 'background-color 0.4s ease' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Certifications & Compliance</h2>
          <p className="text-center mb-16 max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            We maintain the highest international standards through rigorous certification and compliance processes.
          </p>
          <div ref={certRef} className="grid md:grid-cols-3 gap-8">
            {[
              ['🏆', 'ISO 22000', 'Food Safety Management System certified for international standards'],
              ['✓', 'HACCP', 'Hazard Analysis Critical Control Point certification for food safety'],
              ['☪', 'Halal Certified', 'Recognized halal certification for Middle Eastern markets'],
              ['🌱', 'Organic Certified', 'USDA and EU organic certifications for premium products'],
              ['📋', 'GMP Compliant', 'Good Manufacturing Practices compliance across operations'],
              ['🛡️', 'BRC Global', 'British Retail Consortium standards for food safety'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-8 text-center transition-all" style={{ border: '1px solid var(--border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-12" style={{ color: 'var(--text-muted)' }}>
            Partner with Sunrise Crest for reliable, quality-focused food trade solutions
          </p>
          <Link
            to="/quote"
            className="inline-block px-12 py-5 text-lg font-bold transition-all duration-300"
            style={{ border: '2px solid var(--accent)', color: 'var(--accent)' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent-text)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent)';
            }}
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;