import React from 'react';
import './Navbar.css';
import amazon from './amazon.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={amazon} alt="" className="amazon-logo"/>
            </Link>

            <div className="nav-search">
                <input type="text" className="navbar-input"/>
                <SearchIcon className="navbar-search-icon"/>
            </div>
            <div className="nav-links">
                <Link to="/login" className="link">
                    <div className="nav-options">
                        <span className="option1">hello</span>
                        <span className="option2">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="link">
                    <div className="nav-options">
                        <span className="option1">Returns</span>
                        <span className="option2">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="link">
                    <div className="nav-options">
                        <span className="option1">Your</span>
                        <span className="option2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="link">
                    <div className="option-basket">
                        
                        <ShoppingBasketIcon />
                        <span className="option2 basket-counter">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
