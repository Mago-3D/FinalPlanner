import React from "react";
import './pages.css'

export default function Contact() {
    return(
        <div className="contact">
            <h1 className='contact-h1'>Contact with Us</h1>
            <p>Whatsapp: +994555548833</p>
            <p>Info: info.imagine@gmail.com</p>
            

            <div className="icons">
                <img className="icons-img" src="https://cdn1.iconfinder.com/data/icons/social-networks-3/512/twitter-256.png"/> 
                <img className="icons-img" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/83-facebook-256.png"/> 
                <img className="icons-img" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/74-outlook-256.png"/> 
                <img className="icons-img" src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-256.png"/> 

            </div>
        </div>
    )
}