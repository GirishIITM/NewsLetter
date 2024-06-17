import React, { useEffect } from 'react'
import { company_images } from '../assets';


export default function MovingLogos() {

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
        <div className='company_logos'>
            <div className='logo_slide' ref={logoRef}>
                {company_images.map((company, index) => (
                    <img src={company} alt={`company_logo_${index}`} key={index} />
                ))}
            </div>
        </div>
    )
}
