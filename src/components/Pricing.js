import React from 'react';
import "./assets/styles/Pricing.css";

const Pricing = () => {
    return (
        <div className="container-fluid" id='pricing'>
            <h2 className='text-center text'>Pricing</h2>
            <h4 className='text-center py-1 h5'>We offer the best prices over all our services</h4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-2">
                        <div className="card card1 h-100">
                            <div className="card-body">

                                <h2 className="card-title">App Development</h2>

                                <br />
                                <span className="h2">$8</span>/month
                                <hr />

                                <div className="d-grid my-2">
                                </div>
                                <ul>
                                    <li>Development</li>
                                    <li>Deployment</li>
                                    <li>Maintainence</li>

                                </ul>
                            </div>
                            <button className="btn btn-outline-dark ">Buy Now</button>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 mb-2">
                        <div className="card card2 h-100">
                            <div className="card-body">

                                <h2 className="card-title">Web Development</h2>

                                <br />
                                <span className="h2">$20</span>/month
                                <hr />

                                <div className="d-grid my-2">
                                </div>
                                <ul>
                                    <li>Development</li>
                                    <li>Deployment</li>
                                    <li>Maintainence</li>

                                </ul>
                            </div>
                            <button className="btn btn-outline-dark ">Buy Now</button>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-2">
                        <div className="card card3 h-100">
                            <div className="card-body">

                                <h2 className="card-title">Digital Marketing</h2>
                                <br />
                                <span className="h2">$40</span>/month
                                <hr />
                                <div className="d-grid my-2">
                                </div>
                                <ul >
                                    <li>Facebook Engagement</li>
                                    <li>Twitter Engagement</li>
                                    <li>Linkedin Engagement</li>

                                </ul>
                            </div>


                            <button className="btn btn-outline-dark ">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;