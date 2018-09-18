import React from 'react'
import './hero.css'

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__text">Luxury space that you can afford where dreams come true</h1>
                <div className="hero__booking">
                    <div className="hero__input">
                        <label className="hero__label">Check In</label>
                        <p className="hero__date">Mon, May 8</p>
                    </div>
                    <div className="hero__input">
                        <label className="hero__label">Check Out</label>
                        <p className="hero__date">Tue, May 9</p>
                    </div>
                    <div className="hero__input hero--guest">
                        <label className="hero__label">Guests</label>
                        <p className="hero__date">1 guest</p>
                    </div>
                    <div className="hero__input hero--button">
                        <button className="hero__book-button">
                            Check Availability
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero