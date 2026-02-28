'use client';

import { useState, useEffect, useRef } from 'react';

export default function ResourcesGrid({ resources }) {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target);
          setVisibleIndices((prev) => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .resource-card { opacity: 0; }
        .resource-card.visible { animation: slideInRight 0.5s ease-out forwards; }
      `}</style>
      
      <section style={{ marginBottom: '60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.5px' }}>其他资源</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {resources.map((item, idx) => (
            <div 
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={`resource-card ${visibleIndices.has(idx) ? 'visible' : ''}`}
              style={{ 
                backgroundColor: '#fff', 
                padding: '32px', 
                borderRadius: '8px', 
                border: '1px solid #e0e0e0', 
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                ...(visibleIndices.has(idx) && {
                  animationDelay: `${0.2 + idx * 0.1}s`
                })
              }} 
              onMouseOver={(e) => { e.currentTarget.style.borderColor = '#000'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} 
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#000', marginBottom: '12px' }}>{item.name}</h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#f5f5f5', color: '#000', padding: '10px 20px', textDecoration: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: '500', border: '1px solid #e0e0e0', transition: 'all 0.2s' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#000'; e.target.style.color = '#fff'; e.target.style.borderColor = '#000'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#f5f5f5'; e.target.style.color = '#000'; e.target.style.borderColor = '#e0e0e0'; }}>夸克网盘</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
