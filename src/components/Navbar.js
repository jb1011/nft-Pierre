import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light fixed-top" id="mainNav">
            <div class="container">
                <NavLink exact to="/" class="navbar-brand text-purple" >HALFLINGS</NavLink>
                {/* <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a> */}
                {/* <img class="mx-auto rounded-circle" src="" alt="..." /> */}

                <button class="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item">
                        <NavLink exact to="/" class="nav-link text-dark" >Home</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink exact to="/Gallery" class="nav-link text-dark" >Gallery</NavLink></li>
                        <li class="nav-item"><NavLink exact to="/About" class="nav-link text-dark" >About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar
