import React from 'react'
import '../styles/page1.css'
import { page_1_image, page_1_image2 } from '../assets'

export default function Page1() {
    return (
        <div className='page1'>
            <div className='page_left'>
                <h1>Insights about tech, business & crypto</h1>
                <p>Get weekly insights about what's happening in tech. Subscribe today. </p>
                <button className='button_1'>Subscribe for free</button>
            </div>
            <div className='page_right'>
                <img className='page1img1' src={page_1_image} alt="" />
                <img className='page1img2' src={page_1_image2} alt="" />
            </div>
        </div>
    )
}
