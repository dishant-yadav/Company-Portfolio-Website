import React from 'react';
import "./assets/styles/Contact.css";

const Contact = () => {
    return (
        <div className='container-fluid' id='contact'>
            <h2 className='text fix'>Contact</h2>
            <div className='row fix'>
                <div className='col-xl-6 text-center'><h3 className='head'>Information</h3>
                    <br />
                    <br/>
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
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                        <button className="btn btn-primary btn-lg my-4" id='submit'>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact;