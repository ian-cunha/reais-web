import React, { useEffect } from 'react';

const IubendaConsent: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        "siteId": 3848926,
        "cookiePolicyId": 38839118,
        "lang": "pt-BR",
        "storage": { "useSiteId": true }
      };
    `;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://cs.iubenda.com/autoblocking/3848926.js';
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'text/javascript';
    script3.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
    script3.charset = 'UTF-8';
    script3.async = true;
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
};

export default IubendaConsent;
