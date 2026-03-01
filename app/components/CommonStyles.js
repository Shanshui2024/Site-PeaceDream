'use client';

// 公共样式组件
export const PageContainer = ({ children, maxWidth = '1280px' }) => (
  <div style={{ 
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", 
    lineHeight: '1.6', 
    color: '#1a1a1a', 
    minHeight: '100vh', 
    backgroundColor: '#fafafa' 
  }}>
    <main style={{ maxWidth, margin: '0 auto', padding: '60px 20px' }}>
      {children}
    </main>
  </div>
);

// 卡片容器样式
export const CardContainer = ({ children, style = {} }) => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    overflow: 'hidden',
    ...style
  }}>
    {children}
  </div>
);

// 标题样式
export const SectionTitle = ({ children, style = {} }) => (
  <h2 style={{ 
    fontSize: '24px', 
    fontWeight: '700', 
    marginBottom: '30px', 
    letterSpacing: '-0.5px',
    ...style
  }}>
    {children}
  </h2>
);

// 悬停效果Hook
export const useHoverEffect = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.borderColor = '#000';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
    e.currentTarget.style.transform = 'translateY(-4px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.borderColor = '#e0e0e0';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return { handleMouseOver, handleMouseOut };
};