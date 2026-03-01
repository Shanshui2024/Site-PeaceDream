'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation({ currentPage = 'home' }) {
  const isHome = currentPage === 'home';
  const isDownload = currentPage === 'download';
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 检查是否在页面顶部
      setIsAtTop(currentScrollY <= 10);
      
      // 向下滚动时隐藏，向上滚动时显示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初始化检查
    setIsAtTop(window.scrollY <= 10);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { href: '/', label: '主页', isActive: isHome },
    { href: '/download', label: '下载', isActive: isDownload }
  ];

  return (
    <>
      <style jsx>{`
        .navbar {
          background-color: var(--background);
          border-bottom: 1px solid ${isAtTop ? 'transparent' : 'var(--border-color)'};
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          box-shadow: ${isAtTop ? 'none' : 'var(--box-shadow)'};
          transition: all var(--transition-normal);
          transform: ${isVisible ? 'translateY(0)' : 'translateY(-100%)'};
          margin-bottom: 20px;
        }
        
        @media (min-width: 768px) {
          .navbar {
            margin-bottom: 30px;
          }
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (min-width: 640px) {
          .nav-container {
            padding: 20px 24px;
          }
        }

        @media (min-width: 1024px) {
          .nav-container {
            padding: 20px 32px;
          }
        }

        .logo-container {
          display: flex;
          align-items: center;
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }

        .logo {
          height: 28px;
          width: 28px;
          margin-right: 10px;
          border-radius: var(--border-radius);
        }
        
        @media (min-width: 768px) {
          .logo {
            height: 32px;
            width: 32px;
            margin-right: 12px;
          }
        }

        .nav-links-desktop {
          display: none;
          gap: 24px;
          font-size: 14px;
        }

        @media (min-width: 768px) {
          .nav-links-desktop {
            display: flex;
          }
        }

        .nav-link {
          position: relative;
          transition: color var(--transition-normal);
          color: var(--text-tertiary);
          text-decoration: none;
          font-weight: 500;
          padding-bottom: 4px;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--text-primary);
          transition: width var(--transition-normal);
        }

        .nav-link.active::after,
        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-button {
          display: block;
          background: none;
          border: none;
          font-size: 24px;
          color: var(--text-primary);
          cursor: pointer;
          padding: 4px;
        }

        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--background);
          z-index: 99;
          padding: 20px 16px;
          transform: translateX(100%);
          transition: transform var(--transition-normal);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          color: var(--text-primary);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 18px;
          padding: 12px 0;
          color: var(--text-secondary);
          text-decoration: none;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-nav-link.active {
          color: var(--text-primary);
          font-weight: 600;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 98;
          opacity: 0;
          visibility: hidden;
          transition: all var(--transition-normal);
        }

        .overlay.open {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <img 
              src="https://image.shanshui.site/file/1772292721030_1753d26de273f43c6cc9077059ff3040.webp" 
              alt="PeaceDream Logo" 
              className="logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="desktop-only">PeaceDream | 和梦团队</span>
            <span className="mobile-only">PeaceDream</span>
          </div>
          
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${link.isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="打开菜单"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* 移动端菜单 */}
      <div className={`overlay ${mobileMenuOpen ? 'open' : ''}`} 
           onClick={() => setMobileMenuOpen(false)} />
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo-container">
            <img 
              src="https://image.shanshui.site/file/1772292721030_1753d26de273f43c6cc9077059ff3040.webp" 
              alt="PeaceDream Logo" 
              className="logo"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            和梦团队
          </div>
          <button 
            className="close-button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="关闭菜单"
          >
            ×
          </button>
        </div>
        
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${link.isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}