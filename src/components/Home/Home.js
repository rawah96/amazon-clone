import React from 'react'
import './Home.css'
import astro from './ast.jpg'
import Product from '../Products/Product'
import short from './short.jpg'
import short2 from './short2.jpg'
import astro2 from './astro3.jpg'
function Home() {
    return (
        <div className="home">
            <img src={astro} alt="" className="home-img" />
            <div className="home-row">
            <Product 
            id="SEVEN-STARS"
            title="No Tax Seven Stars Tshirt" 
            price={39.99}
            rating={7}
            image={astro2}
            />

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
                id="SEVEN-STARS"
                title="No Tax Seven Stars Tshirt" 
                price={39.99}
                rating={7}
                image={astro2}
                />
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
            </div>

            <div className="home-row">
                <Product 
                id="SEVEN-STARS"
                title="No Tax Seven Stars Tshirt" 
                price={39.99}
                rating={7}
                image={astro2}
                />

                <Product 
                id="DANCE-MONKEY"
                title="Dance Monkey Tshirt"
                price={39.99}
                rating={4.8}
                image={astro2}
                />
            </div>
        </div>
    )
}

export default Home
