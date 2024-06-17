import React from 'react'
import Page1 from '../pages/Page1'
import '../styles/home.css'
import Page2 from '../pages/Page2'
import TestiNomials from '../components/TestiNomials.jsx'
import Page3 from '../pages/Page3.jsx'
import Page4 from '../pages/Page4.jsx'
import Page5 from '../pages/Page5.jsx'
import Page6 from '../pages/Page6.jsx'
import Subscription from '../components/Subscription.jsx'
import FaqPage from '../components/FaqPage.jsx'

export default function Home() {
    return (
        <>
            <Page1 />
            <Page2 />
            <TestiNomials />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Subscription />
            <FaqPage />
        </>
    )
}
