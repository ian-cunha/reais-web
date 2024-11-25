/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    const loader = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.iubenda.com/iubenda.js';
      script.async = true;
      document.body.appendChild(script);
    };

    if (window.addEventListener) {
      window.addEventListener('load', loader);
    } else if ((window as any).attachEvent) {
      (window as any).attachEvent('onload', loader);
    } else {
      window.onload = loader;
    }
  }, []);

  return (
    <a
      href="https://www.iubenda.com/privacy-policy/38839118"
      className="iubenda-black iubenda-noiframe iubenda-embed"
      title="Política de Privacidade"
    >
      Política de Privacidade
    </a>
  );
};

export default PrivacyPolicy;
