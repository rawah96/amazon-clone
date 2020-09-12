import React from 'react'
import './Checkout.css'
import {useStateValue} from '../../StateProvider';
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal'

function Checkout() {
    // pull in the data layer from the store
    // the dispatch is used when we wanna manipulate state/data layer
    const [{dataLayer, user}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
            <img className="checkout-ad" 
            src= "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""/>

            {dataLayer.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>
                        You have no items in your basket. To but one or more items,
                        click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout-title">Your Shopping Basket</h2>
                    {dataLayer.map(item => (
                        <CheckoutProducts 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {dataLayer.length > 0 ? (
                <div className="checkout-right">
                    {/*user? <Subtotal /> : <h1>Sign in first</h1>*/}
                    <Subtotal />
                </div>
            ): null}
            
        </div>
    )
}

export default Checkout
