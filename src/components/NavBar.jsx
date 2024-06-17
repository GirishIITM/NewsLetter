import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { navBtn } from '../assets'
import { plusIcon } from '../assets'

export default function NavBar() {

    const [navOpen, setNavOpen] = React.useState(false)
    const handleClick = () => setNavOpen(!navOpen);

    return (
        <header style={{
            backdropFilter: navOpen ? "blur(15px)" : "none",
        }}>
            <div className='header_flex'>
                <Link to='/' className='home_logo'>OSINT Ambition</Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/">All essays</Link></li>
                    </ul>
                </nav>
                <button className='button_1'>Get it today - $0</button>
                <img onClick={handleClick} src={plusIcon} className='rotate_plus' style={{
                    opacity: navOpen ? 1 : 0,
                    width: navOpen ? '30px' : '0px',
                }} />
                <img onClick={handleClick} className='nav_btn' src={navBtn} alt="" style={{
                    opacity: navOpen ? 0 : 1,
                    width: navOpen ? '0px' : '30px',
                }} />
            </div>
            <div className='nav_wrapper_links'
                style={{
                    height: navOpen ? '100vh' : '0px',
                    opacity: navOpen ? 1 : 0,
                    zIndex: navOpen ? 1 : -1,
                }}
            >
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">All essays</Link></li>
                </ul>
                <button className='button_1'
                    style={{
                        display: navOpen ? 'block' : 'none',
                    }}
                >Get it Today - 0$</button>
            </div>
        </header>
    )
}
