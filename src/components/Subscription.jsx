import React from 'react'
import '../styles/subscription.css'
import MovingLogos from './MovingLogos'

export default function Subscription() {
    return (
        <div className="subscription_section">
            <div className="text_container">
                <h2>Subscribe today</h2>
                <p>
                    Read what OSINT pros are reading. Get weekly industry updates new blogs, videos, new features in
                    tools, jobs and OSINT related news, podcast, OSINT tips, and many more, delivered straight in your
                    inbox.
                </p>
                <MovingLogos/>
            </div>
            <div className="form_container">
                <iframe className='iframe_form' src="https://osintambition.substack.com/embed" width='100%' height='100%'>
                </iframe>
            </div>
        </div>
    )
}
