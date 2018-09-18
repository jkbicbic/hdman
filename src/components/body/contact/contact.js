import React from 'react'
import './contact.css'

const Contact = () => {

    return(

        <div className="contact">
            <div className="contact__image">  </div>
            <div className="contact__content">
                <div className="contact__card">
                    <h1 className="contact__text">Make your dinner reservation</h1>
                    <div className="contact__info">
                        <h5>reservation@hotel.com</h5>
                        <h6>EMAIL ADDRESS</h6>
                    </div>
                    <div className="contact__info">
                        <h5>+385 100 200</h5>
                        <h6>PHONE NUMBER</h6>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Contact