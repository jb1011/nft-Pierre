import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import Card from './Card'

function Cards() {

  useEffect(() => {
    Aos.init({
        duration: 2000
    });
}, []);

  return (
    <div data-aos="zoom-in" >
      <section class="page-section" id="portfolio">
        <div class="container animate-fadein">
          <div class="text-center">
            <h2 class="section-heading text-uppercase text-purple">
              Portfolio
            </h2>
            <h3 class="section-subheading text-muted text-purple">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <Card
                title="Carte 1"
                text="Achete ce NFT"
                img="assets/img/pepite2.jpg"
              />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <Card
                title="Carte 2"
                text="Achete ce NFT"
                img="assets/img/pepite2.jpg"
              />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <Card
                title="Carte 3"
                text="Achete ce NFT"
                img="assets/img/pepite2.jpg"
              />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards
