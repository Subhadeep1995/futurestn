import React from 'react'
import { Link } from 'gatsby'
import './global.css'
import headerStyles from './header.module.css'
import logo from '../images/logo.png'
// import Head from './head'

const Header = () => {
    return (
        <div>
            <header className={headerStyles.header}>
                <Link to="/" className={headerStyles.logo}><img src={logo} alt="futurestation" height="50px"/></Link>
                <nav>
                    <ul className={headerStyles.nav_list}>
                        <li className={headerStyles.nav_item}><Link to="/articles" className={headerStyles.link}>Articles</Link></li>
                        <li className={headerStyles.nav_item}><Link to="/services" className={headerStyles.link}>Services</Link></li>
                        <li className={headerStyles.nav_item}><Link to="/contact" className={headerStyles.link}>Contact</Link></li>
                        <li className={headerStyles.nav_item}><Link to="/about" className={headerStyles.link}>About</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header