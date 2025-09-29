// components/AosInitializer.js
'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AosInitializer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
};

export default AosInitializer;