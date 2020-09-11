import React from 'react'
import './Product.css'
import {useStateValue} from '../../StateProvider';
function Product({id, title, price, rating, image}) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        // add item to basket
        dispatch({
            type: 'ADD_TO_DATALAYER',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="stars">
                {rating} stars
            </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
