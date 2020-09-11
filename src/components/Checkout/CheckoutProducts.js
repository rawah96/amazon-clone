import React from 'react'
import './CheckoutProducts.css'
import {useStateValue} from '../../StateProvider'

function CheckoutProducts({id, title, image, price, rating}) {
    const [{dataLayer} , dispatch] = useStateValue();

    // we remove the item by finding the id in the store
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_DATALAYER",
            id: id
        })
    }

    const removeAll = () => {
        dispatch({
            type: "REMOVE_ALL",
        })
    }
    return (
        <div className="checkout-products">
            <img src={image} alt="" />
            <div className="checkout-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {rating} stars {/* .. need to implement correctly  */}
                </div>

                    <button
                    onClick={removeFromBasket}
                    >Remove from basket</button>

                    <button
                    onClick={removeAll}
                    >remove all</button>
                    {/* change the remove all buttons to be another thing, not a button */}
            </div>
        </div>
    )
}

export default CheckoutProducts
