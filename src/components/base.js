import React from 'react'
import Header from './header'
import Footer from './footer'

const Base = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Base