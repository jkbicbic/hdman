import React from 'react'
import './amenities.css'
import Am1 from '../../../img/Am1.jpg'
import Am2 from '../../../img/Am2.jpg'
import Am3 from '../../../img/Am3.jpg'
import Am4 from '../../../img/Am4.png'
import Am5 from '../../../img/Am5.jpg'

const Amenities = () => {

    return(

        <div className="amenities">
            <div className="amenities__content">
                <label className="amenities__label">Featured Amenities</label>
            </div>
            <div className="amenities__slider">
                <div className="amenities__card">
                    <img className="amenities__image" src={Am1}/>
                    <div className="amenities__info">
                        <h3 className="amenities__name">SPA</h3>
                        <p className="amenities__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    </div>
                </div>
                <div className="amenities__card">
                    <img className="amenities__image" src={Am2}/>
                    <div className="amenities__info">
                        <h3 className="amenities__name">MINI BAR</h3>
                        <p className="amenities__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    </div>
                </div>
                <div className="amenities__card">
                    <img className="amenities__image" src={Am3}/>
                    <div className="amenities__info">
                        <h3 className="amenities__name">RESTAURANT</h3>
                        <p className="amenities__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    </div>
                </div>
                <div className="amenities__card">
                    <img className="amenities__image" src={Am4}/>
                    <div className="amenities__info">
                        <h3 className="amenities__name">BREAKFAST</h3>
                        <p className="amenities__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    </div>
                </div>
                <div className="amenities__card">
                    <img className="amenities__image" src={Am5}/>
                    <div className="amenities__info">
                        <h3 className="amenities__name">ROOM SERVICE</h3>
                        <p className="amenities__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    </div>
                </div>
            </div>
            <button className="amenities__slider-button left"></button>
            <button className="amenities__slider-button right"></button>
        </div>

    )

}

export default Amenities