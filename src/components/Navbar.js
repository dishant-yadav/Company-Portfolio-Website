import React from 'react'
import logo from "./../assets/images/logo.png"
import "./../assets/styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container-fluid px-4">
                <a className="navbar-brand" href="/"><image src={logo} width="100" height="50" />Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto p-nav">
                        <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Reviews</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

