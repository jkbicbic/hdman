import React from 'react'
import './body.css'
import Hero from './hero/hero'
import Rooms from './rooms/rooms'
import About from './about/about'
import Amenities from './amenities/amenities'
import Contact from './contact/contact'
import Footer from './footer/footer'

const Body = () => {
    return(
        <div className="body">
            <Hero />
            <Rooms />
            <About />
            <Amenities />
            <Contact />
            <Footer />
        </div>
    )
}

export default Body