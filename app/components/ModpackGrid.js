'use client';

import { useState, useEffect, useRef } from 'react';

export default function ModpackGrid({ modpacks }) {
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
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modpack-card { 
          opacity: 0; 
        }
        .modpack-card.visible {
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>
      
      <section style={{ marginBottom: '60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.5px' }}>模组整合包</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {modpacks.map((pack, idx) => (
            <div 
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={`modpack-card ${visibleIndices.has(idx) ? 'visible' : ''}`}
              style={{ 
                backgroundColor: '#fff', 
                padding: '32px', 
                borderRadius: '8px', 
                border: '1px solid #e0e0e0', 
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                ...(visibleIndices.has(idx) && {
                  animationDelay: `${Math.min(idx * 0.05, 0.4)}s`
                })
              }} 
              onMouseOver={(e) => { e.currentTarget.style.borderColor = '#000'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} 
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#000', marginBottom: '4px' }}>{pack.name}</h3>
                  <p style={{ fontSize: '13px', color: '#999' }}>{pack.version}</p>
                </div>
                <span style={{ fontSize: '12px', fontWeight: '500', padding: '4px 12px', backgroundColor: '#f0f0f0', borderRadius: '3px', color: '#666' }}>{pack.type}</span>
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px', lineHeight: '1.6' }}>{pack.tips}</p>
              {pack.tip && <p style={{ fontSize: '13px', color: '#999', marginBottom: '20px', fontStyle: 'italic' }}>💡 {pack.tip}</p>}
              <a href={pack.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#f5f5f5', color: '#000', padding: '10px 20px', textDecoration: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: '500', border: '1px solid #e0e0e0', transition: 'all 0.2s' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#000'; e.target.style.color = '#fff'; e.target.style.borderColor = '#000'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#f5f5f5'; e.target.style.color = '#000'; e.target.style.borderColor = '#e0e0e0'; }}>夸克网盘 {pack.code && `(${pack.code})`}</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
