import React from 'react'
import './about.css'

const About = () => {
    return(
        <div className="about">
            <div className="about__content">
                <div className="about__article">
                    <header className="about__header-text">
                        The right choice for everyone looking for classical elegance and modern comfort. 
                    </header>
                    <p className="about__body-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                    </p>
                    <p className="about__body-text">
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.  
                    </p>
                </div>
            </div>
            <div className="about__image"></div>
        </div>
    )
}

export default About