import React, { useEffect } from 'react';
import '../styles/page2.css';
import MovingLogos from '../components/MovingLogos';

export default function Page2() {


    return (
        <div className='page2'>
            <h3 className='page_h3'>Trusted by 10,000+ Pros from </h3>
            {<MovingLogos />}
        </div>
    );
}
