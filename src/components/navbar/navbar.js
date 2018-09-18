import React from 'react'
import './navbar.css'
import Logo from '../../img/logo.png'

const NavBar = () =>{
    return(
        <nav className="navbar">
            <div className="navbar__center">
                <img className="navbar__logo" src={Logo} />
                <div className="navbar__navs">
                    <ul className="navbar__links navbar--left">
                        <li className="navbar__item"><a href="#">Home</a></li>
                        <li className="navbar__item"><a href="#">Rooms</a></li>
                        <li className="navbar__item"><a href="#">Reservation</a></li>
                        <li className="navbar__item"><a href="#">Dining</a></li>
                        <li className="navbar__item"><a href="#">Blog</a></li>
                        <li className="navbar__item"><a href="#">Contact</a></li>
                    </ul>
                    <ul className="navbar__links navbar--right">
                        <li className="navbar__item"><a href="#">Sign In</a></li>
                        <li className="navbar__item"><a href="#">Sign Out</a></li>
                    </ul>
                </div>
                <button className="navbar__mobile-button">
                    <span className="navbar__cross cross--left"></span>
                    <span className="navbar__cross cross--right"></span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar