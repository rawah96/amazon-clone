import React from 'react'
import './Home.css'
import astro from './ast.jpg'
import Product from '../Products/Product'
import short from './short.jpg'
import short2 from './short2.jpg'
import astro2 from './astro3.jpg'
import mask from './mask.jpg'
import ast from './ast.jpg'
function Home() {
    return (
        <div className="home">
            <img src={astro} alt="" className="home-img" />
            <div className="home-row">

            <Product 
            id="DANCE-MONKEY"
            title="Dance Monkey Tshirt"
            price={39.99}
            rating={4.8}
            image={astro2}
            />

            <Product 
            id="SAUDI-ARABIA"
            title="Saudi Arabia Short"
            price={32.99}
            rating={5}
            image={short}
            />

            <Product 
            id="DOUBT-ME"
            title="Doubted Me Short"
            price={32.99}
            rating={5}
            image={short2}
            />
            </div>
                <div className="home-row">
                <Product 
                id="SAFE-COMMUNITY"
                title="Safe Community Will Survive Mask" 
                price={10.99}
                rating={5}
                image={mask}
                />

                <Product 
                id="SHIRTS"
                title="Fall'20 Shirts"
                price={39.99}
                rating={5}
                image={ast}
                />
            </div>
        </div>
    )
}

export default Home
