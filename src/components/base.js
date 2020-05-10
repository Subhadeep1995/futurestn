import React from 'react'
import Header from './header'
import Footer from './footer'

const Base = (props) => {
    return (
        <div>
            <Header/>
            <div className="container">
            {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Base