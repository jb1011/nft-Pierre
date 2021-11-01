import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div>
            <section class="page-section bg-dark" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase text-purple">Portfolio</h2>
                    <h3 class="section-subheading text-muted text-purple">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">

                        <Card title="Carte 1" text="Achete ce NFT" img="https://www.lootproject.com/genesis.svg"/>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">

                    <Card title="Carte 2" text="Achete ce NFT" img="https://www.lootproject.com/genesis.svg"/>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">

                    <Card title="Carte 3" text="Achete ce NFT" img="https://www.lootproject.com/genesis.svg"/>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">

                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Cards
