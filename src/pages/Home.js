import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Drop from '../components/Drop'
import Callforaction from '../components/Callforaction'
import Presentation from '../components/Presentation'

function Home() {
    return (
        <div class="craft-bg">
            <Navbar />
            <Hero />
            <Callforaction />
            <Presentation />
            <Cards />
            <Drop />
            <Footer />
        </div>
    )
}

export default Home
