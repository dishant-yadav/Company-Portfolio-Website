import React from 'react'
import about from "./../images/about.png"
import "./../styles/About.css";

const About = () => {
    return (

        <div class="bg-light" id='about'>
            <div class="container py-5">
                <div class="row h-100 align-items-center py-5">
                    <h1 class="display-4 text-center">About Us</h1>
                    <div class="col-lg-6">
                        <p class="lead text mb-0">We are a team of people, commited towards our work.</p>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block"><img src={about} alt="" class="img-fluid" /></div>
                </div>
            </div>
        </div>
    );
}

export default About;