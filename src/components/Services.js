import React from 'react'
import AnimatedNumber from "./AnimatedNumbers"
import "./assets/styles/Services.css";

const Services = () => {
  return (
    <section class="services py-4" >
      <h1 className='text' id='services' >Services</h1>
      <div className='container'>
        <h3 className='heading'>Services We Offer</h3>
        <div className='row d-flex justify-content-between'>
          <div className='col-md-3 panel shadow rounded text-center '><p className='label'>App<br /> Development</p></div>
          <div className='col-md-3 panel shadow rounded text-center '><p className='label'>Website <br />Development</p></div>
          <div className='col-md-3 panel shadow rounded text-center '><p className='label'>Website <br />Hosting</p></div>
        </div>


        <h3 className='heading'>Our Stats</h3>

        <div className='row d-flex justify-content-between'>
          <div className='col-md-3 panel shadow rounded text-center '><span className='number'><AnimatedNumber value={600} /></span> <span className='label'> Customers</span></div>
          <div className='col-md-3 panel shadow rounded text-center '><span className='number'><AnimatedNumber value={800} /></span> <span className='label'>Projects</span></div>
          <div className='col-md-3 panel shadow rounded text-center '><span className='number'><AnimatedNumber value={935} /></span> <span className='label'>Orders</span></div>
        </div>
      </div>
    </section >
  )
}

export default Services;
