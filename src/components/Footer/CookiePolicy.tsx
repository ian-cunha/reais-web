import React, { useEffect } from 'react';

const CookiePolicy: React.FC = () => {
    useEffect(() => {
        const loadIubendaScript = () => {
            const script = document.createElement('script');
            script.src = 'https://cdn.iubenda.com/iubenda.js';
            script.async = true;
            document.body.appendChild(script);
        };

        loadIubendaScript();

        return () => {
            const existingScript = document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <a
            href="https://www.iubenda.com/privacy-policy/38839118/cookie-policy"
            className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
            title="Política de Cookies"
        >
            Política de Cookies
        </a>
    );
};

export default CookiePolicy;
