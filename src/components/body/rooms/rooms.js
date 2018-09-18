import React from 'react'
import './rooms.css'
import room1 from '../../../img/room-1.png';
import room2 from '../../../img/room-2.png';
import room3 from '../../../img/room-3.png';

const Rooms = () => {
    return(
        <section className="rooms">
            <div className="rooms__content">
                <div className="rooms__list">
                    <div className="rooms__card 320px 768px">
                        <img className="rooms__image" src={room1}/>
                        <div className="rooms__info">
                            <h3 className="rooms__name">MASTER SUITE</h3>
                            <h4 className="rooms__name">$300 / night</h4>
                            <div className="rooms__rating">
                                <div className="rooms__rate">
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                </div>
                                <div className="rooms__reviews">60 reviews</div>
                                <a className="rooms__view-button" href="#">view</a>
                            </div>
                        </div>
                    </div>
                    <div className="rooms__card 320px 768px">
                        <img className="rooms__image" src={room2}/>
                        <div className="rooms__info">
                            <h3 className="rooms__name">MINI-SUITE</h3>
                            <h4 className="rooms__name">$200 / night</h4>
                            <div className="rooms__rating">
                                <div className="rooms__rate">
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                </div>
                                <div className="rooms__reviews">60 reviews</div>
                                <a className="rooms__view-button" href="#">view</a>
                            </div>
                        </div>
                    </div>
                    <div className="rooms__card 320px 768px">
                        <img className="rooms__image" src={room3}/>
                        <div className="rooms__info">
                            <h3 className="rooms__name">KING SUITE</h3>
                            <h4 className="rooms__name">$150 / night</h4>
                            <div className="rooms__rating">
                                <div className="rooms__rate">
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                    <span className="rooms__star"></span>
                                </div>
                                <div className="rooms__reviews">60 reviews</div>
                                
                                <a className="rooms__view-button" href="#">view</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rooms__bottom-link">
                    <a className="rooms__button-more" href="#">
                        All Rooms
                        <span className="rooms__button-arrow"></span>
                    </a>
                </div>
            </div>
        </section>
    )

}

export default Rooms