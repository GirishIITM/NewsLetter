import React, { useEffect } from 'react';
import '../styles/testimonials.css';

const TestiNomials = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '../../public/senja_cdn.js';
        script.type = 'text/javascript';
        script.onload = () => {
            window.iFrameResize({ log: false, checkOrigin: false }, '#wall-of-love-BT3WPs');
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='testinomials'>
            <iframe
                id="wall-of-love-BT3WPs"
                src="https://senja.io/p/substack-XOE/BT3WPs?hideNavigation=true&embed=true"
                title="Wall of Love"
                width="100%"
            ></iframe>
        </div>
    );
};

export default TestiNomials;
