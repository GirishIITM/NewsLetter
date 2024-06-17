import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <Link to='/' className='home_logo'>Substackr</Link>
            <nav>
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">All essays</Link></li>
                </ul>
            </nav>
            <button className='button_1'>Get it today - $49</button>
        </header>
    )
}
