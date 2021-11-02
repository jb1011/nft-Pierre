import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark fixed-top" id="mainNav">
            <div class="container">
            <i class="navbar-brand fas fa-home fa-10x"></i>
                {/* <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a> */}
                {/* <img class="mx-auto rounded-circle" src="assets/img/pepite2.jpg" alt="..." /> */}
                <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item">
                        <NavLink exact to="/Gallery" class="nav-link" >Gallery</NavLink></li>
                        <li class="nav-item"><NavLink exact to="/About" class="nav-link" >About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar
