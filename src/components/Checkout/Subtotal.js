import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../StateProvider' 
import { getBasketTotal } from '../../reducer';

function Subtotal() {
    const [{dataLayer}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
              renderText={(value) => (
                  <>
                    <p>
                        Subtotal ({dataLayer.length} items): <string>
                        {`$ ${value}`} {dataLayer.price}
                        </string></p>
                    <small className="subtotal-gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                  </>
              )}
              decimalScale={2}
              value={getBasketTotal(dataLayer)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button className="subtotal-checkout">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
