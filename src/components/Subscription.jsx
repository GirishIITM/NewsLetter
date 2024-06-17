import React from 'react'
import '../styles/subscription.css'
import MovingLogos from './MovingLogos'

export default function Subscription() {
    return (
        <div className="subscription_section">
            <div className="text_container">
                <h2>Subscribe today</h2>
                <p>
                    Read what tech pros are reading. Get weekly insights about tech, crypto, and personal growth. Delivered straight into your inbox.
                </p>
                <MovingLogos />
            </div>
            <div className="form_container">
                <img src='https://substackcdn.com/image/fetch/w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F90cf165a-8452-4c9d-a017-f296a7181d43_1020x1020.png' alt="Logo" className="logo" />
                <h1>Atomic Learnings</h1>
                <p>Insights about business, crypto, and personal development delivered through atomic essays</p>
                <p className="author">By Firdavs Abdunazarov</p>
                <div className="input_container">
                    <input type="email" placeholder="Type your email..." />
                    <button>Subscribe</button>
                </div>
                <p className="terms">
                    By subscribing you agree to Substack's <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a> and <a href="#">Information collection notice</a>
                </p>
            </div>
        </div>
    )
}
