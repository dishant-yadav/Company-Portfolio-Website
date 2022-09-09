import React from 'react';
import image from "./assets/images/logo.png";
import "./assets/styles/Contact.css";


const Contact = () => {
    return (
        <>
            <div className='container-fluid' id='contact'>
                <h2 className='text fix'>Contact</h2>
                <div className='row'>
                    <div className='col-xl-6 text-center'><h3 className='head'>Information</h3>
                        <br />
                        <br />
                        <p id='info'>Contact us to order or get more Information on any of plans.<br /> Our operators will provide you with all Informations regarding the plans</p>
                    </div>
                    <div className='col-xl-6 text-center'><h3 className='head my-2'>Contact Form</h3>
                        <form>
                            <div class="col-md my-4">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                                    <label for="floatingInputGrid">Email address</label>
                                </div>
                            </div>
                            <div class="col-md my-4">
                                <div class="form-floating">
                                    <input type="name" class="form-control" id="" placeholder="name" />
                                    <label for="floatingInputGrid">Name</label>
                                </div>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                            <button className="btn btn-primary btn-lg my-4" id='submit'>Submit</button>
                        </form>
                        <br />
                    </div>
                </div>
            </div>
            <footer className='container-fluid bg-dark' style={{ height: "fit-content" }}>
                <div className='row footer'>
                    <div className='col-6'><a href='/'><img className='img-fluid rounded-4 shadow' src={image} alt={"..."} width="300" id='fImage' /></a>
                    </div>
                    <div className='col-6'>
                        <h4>Sign up for our newsletter</h4>
                        <input type="text" id='email' placeholder='  Enter your email address' />
                        <button type='submit' id='emailBtn'>Submit</button>
                    </div>
                    <p className='text-center' id='copy'>Copyright &copy; 2022 WebMasters</p>
                </div>
            </footer>
        </>
    )
}

export default Contact;