import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <Link to='/' className='home_logo'>Substackr</Link>
            <nav>
                <ul>
                    <li><Link href="/">Home 1</Link></li>
                    <li><Link href="/">Home 2</Link></li>
                    <li><Link href="/">Products</Link></li>
                    <li><Link href="/">All essays</Link></li>
                </ul>
            </nav>
            <button className='button_1'>Get it today - $49</button>
        </header>
    )
}
