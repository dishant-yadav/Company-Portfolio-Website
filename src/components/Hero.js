import React from 'react';
import "./assets/styles/Hero.css"
import image from "./assets/images/clip-409.png";

const Hero = () => {
    return (
        <div className="container-fluid hero" id='home'>
            <div className="row">
                <div className='col-5'>
                    <img className='px-4' src={image} width="500" height="300" />
                </div>
                <div className="col-7">
                    <p className="text">
                        We provide solution to <br />
                        all your digital needs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero;    