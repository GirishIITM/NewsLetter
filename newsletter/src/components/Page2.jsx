import React, { useEffect } from 'react';
import '../styles/page2.css';
import { company_images } from '../assets';

export default function Page2() {
    const logoRef = React.createRef();
    useEffect(() => {
        const slides = [...logoRef.current.children];
        slides.forEach(slide => {
            const clonedSlide = slide.cloneNode(true);
            clonedSlide.setAttribute('aria-hidden', true);
            slide.parentNode.appendChild(clonedSlide);
        });
    }, []);

    return (
        <div className='page2'>
            <h3 className='page_h3'>Trusted by 10,000+ Pros from </h3>
            <div className='company_logos'>
                <div className='logo_slide' ref={logoRef}>
                    {company_images.map((company, index) => (
                        <img src={company} alt={`company_logo_${index}`} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
