import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    // Script'leri dinamik olarak yükle
    const scripts = [
      '/common/js/lib/jquery-3.6.0.min.js',
      '/common/js/lib/jquery-migrate-3.4.0.min.js',
      '/common/js/lib/plugins.js',
      '/common/js/gsap_lib/gsap.min.js',
      '/common/js/gsap_lib/ScrollSmoother.min.js',
      '/common/js/gsap_lib/ScrollTrigger.min.js',
      '/common/js/gsap_lib/SplitText.min.js',
      '/common/js/common_scripts.js',
      '/assets/js/scripts.js'
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadScriptsSequentially = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.warn('Script loading error:', error);
      }
    };

    loadScriptsSequentially();

    // Cleanup function
    return () => {
      scripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <>
      {/* Loader */}
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div className="loader-wrap-heading">
          <div className="load-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>

      {/* Cursor */}
      <div className="cursor"></div>

      {/* Progress wrap */}
      <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {children}
    </>
  );
} 