import React from 'react'
import '../styles/page3.css'
import { profile_png } from '../assets'

export default function Page3() {
    return (
        <div className='page3'>
            <h3 className='page_h3'>What's it about</h3>
            <div className='about_page'>
                <div className='about_flex'>
                    <div className='about_left'>
                        <img src={profile_png} alt="" />
                        <h3>John Doe</h3>
                        <p>Writer, Substrackr</p>
                    </div>
                    <div className='about_right'>
                        <h2>Business strategy and trends, but not boring</h2>
                        <p>Substackr is the most fun way to learn about what’s going on in business and the strategy behind the decisions companies make. If Ben Thompson and Bill Simmons had a baby, it would look like Substackr. </p>
                        <p className='about_margin'>Subsctackr is two e-mails per week:</p>
                        <ul>
                            <li> <strong> Monday </strong>- Longform essays on the trends, strategies, companies, and protocols shaping the world of business.</li>
                            <li><strong> Thursday</strong> - Sponsored Deep Dives, Guest Posts, and building in Public  </li>
                        </ul>
                    </div>
                </div>
                <div className='about_end'>
                    <button className='button_1'>Subscribe now it's free</button>
                    <p>Join 10,000+ smart & curious readers</p>
                </div>
            </div>
        </div>
    )
}
