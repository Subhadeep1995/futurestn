import React from 'react'
import Base from '../components/base'
import contactStyles from '../components/contact.module.css'


const contact = () => {
    return (
        <Base>
            <h1>Contact Us</h1>
            <div className={contactStyles.contact}>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <p><input class={contactStyles.contact_input} type="hidden" name="form-name" value="contact" /></p>
                    <p><input class={contactStyles.contact_input} type="text" name="name" placeholder="Your Full Name"/></p>
                    <p><input class={contactStyles.contact_input} type="email" name="email" placeholder="Your Email Address"/></p>
                    <p><textarea class={contactStyles.contact_input} name="message" id="message" cols="30" rows="10"></textarea></p>
                    <p><input class={contactStyles.contact_input} type="submit" value="Send"/></p>
                </form>
            </div>
            <div className="address"></div>
        </Base>
    )
}

export default contact