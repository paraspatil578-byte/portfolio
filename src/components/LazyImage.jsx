import { useEffect, useRef, useState } from 'react';

// Loads the image only when it is about to enter the viewport.
export default function LazyImage({ src, alt, width, height }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="img-box" style={{ aspectRatio: `${width} / ${height}` }}>
      {visible && <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />}
    </div>
  );
}
