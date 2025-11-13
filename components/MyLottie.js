// components/MyLottie.js
import { useEffect, useRef } from 'react';

export default function MyLottie() {
  const container = useRef(null);

  useEffect(() => {
    // Only import lottie-web in the browser
    const lottie = require('lottie-web');

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation.json', // replace with your actual animation JSON path
    });

    // Cleanup on unmount
    return () => anim.destroy();
  }, []);

  return <div ref={container} style={{ width: 300, height: 300 }}></div>;
}
