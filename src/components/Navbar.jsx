import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     
      <header id="header" className="fixed-top  ">
    <div className="container d-flex align-items-center ">

      <h1 className="logo me-auto color:'red"><Link to="/">Arsha</Link></h1>
      
      
      <nav id="navbar" className="navbar ">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link className="nav-link scrollto" to="/Aboutus">About</Link></li>
          <li><Link className="nav-link scrollto" to="/services">Services</Link></li>
          <li><Link className="nav-link   scrollto" to="/portfolio">Portfolio</Link></li>
          <li><Link className="nav-link scrollto" to="/team">Team</Link></li>
          
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
          <li><Link className="getstarted scrollto" to="/registerpage">Register</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
     
<section id="hero" className="d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Better Solutions For Your Business</h1>
      <h2>We are team of ta
        lented designers making websites with Bootstrap</h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img">
    <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/> 
    </div>
  </div>
</div>

</section>
    </div>
  )
}

export default Navbar