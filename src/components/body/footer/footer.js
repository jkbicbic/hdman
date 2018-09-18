import React from 'react'
import './footer.css'
import logo from '../../../img/logo-reverse.png'

const Footer = () => {

    return (

        <div className="footer">
            <div className="footer__content">
                <img className="footer__logo" src={logo}/>
                <div className="footer__text">
                    <h3>Connect with us</h3>
                    <h5>SOCIAL MEDIA CHANNELS</h5>
                </div>
                <div className="footer__sns-icon icon--facebook"></div>
                <div className="footer__sns-icon icon--instagram"></div>
                <div className="footer__navs">
                    <ul className="footer__links footer--left">
                        <li className="footer__item"><a href="#">Home</a></li>
                        <li className="footer__item"><a href="#">Rooms</a></li>
                        <li className="footer__item"><a href="#">Reservation</a></li>
                        <li className="footer__item"><a href="#">Dining</a></li>
                        <li className="footer__item"><a href="#">Blog</a></li>
                        <li className="footer__item"><a href="#">Contact</a></li>
                    </ul>
                    <ul className="footer__links footer--right">
                        <li className="footer__item"><p>Copyright 2017. Hotel Inc.</p></li>
                    </ul>
                </div>
            </div>
        </div>

    )

}

export default Footer 