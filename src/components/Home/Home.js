import React from 'react'
import './Home.css'
import astro from './ast.jpg'
function Home() {
    return (
        <div className="home">
            <img src={astro} alt="" className="home-img" />
        </div>
    )
}

export default Home
