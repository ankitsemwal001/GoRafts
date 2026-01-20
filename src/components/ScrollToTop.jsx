import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 🔥 This line was missing

  useEffect(() => {
    const root = document.getElementById('root') || document.documentElement;

    setTimeout(() => {
      root.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 300);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
