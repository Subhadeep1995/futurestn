import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header