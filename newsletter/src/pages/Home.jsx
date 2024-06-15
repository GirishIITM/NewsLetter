import React from 'react'
import NavBar from '../components/NavBar'
import Page1 from '../components/Page1'
import '../styles/home.css'
import Page2 from '../components/Page2'
import TestiNomials from '../components/TestiNomials.jsx'
import Page3 from '../components/Page3.jsx'


export default function Home() {
    return (
        <>
            <NavBar />
            <Page1 />
            <Page2 />
            <TestiNomials />
            <Page3 />
        </>
    )
}
