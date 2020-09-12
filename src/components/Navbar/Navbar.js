import React from 'react';
import './Navbar.css';
import amazon from './amazon.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from '../../StateProvider'
import {auth} from '../../firebase';

function Navbar() {
    // using the data layer
    // dispatching makes us use the actions/logic in the reducer
    //const [{dataLayer}, dispatch] = useStateValue();
    // at this point we only want the basket
    const [{dataLayer, user}] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
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
                <Link to={!user && "/login"} className="link">
                    <div 
                    onClick={login}
                    className="nav-options">
                        <span className="option1">Hello {user ? user.email: null}</span>
                        <span className="option2">{user? (<h1>Sign out</h1>) : (<h1>Sign in</h1>)}</span>
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
                        <span className="option2 basket-counter">
                            {/* using the data layer */}
                            {dataLayer? dataLayer.length : null}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
