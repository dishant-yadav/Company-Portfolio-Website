import React from 'react';
import "./assets/styles/Hero.css"
import image from "./assets/images/back2.webp";

const Hero = () => {
    return (
        <div className="container-fluid hero" id='home'>
            <div className="row">
                <div className="col-6">
                    <p className="text">
                        We provide solution to <br />
                        all your <span id="dig">digital</span> needs.
                    </p>
                    <a href='#contact' className='btn btn-primary btn-lg' id="contBtn">Contact Us</a>

                </div>
                <div className='col-6'>
                    <img src={image} id="heroImage" />
                </div>
            </div>
        </div>
    )
}

export default Hero;    