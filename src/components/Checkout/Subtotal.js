import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../StateProvider' 
import { getBasketTotal } from '../../reducer';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const [{dataLayer, user}, dispatch] = useStateValue();
    const history = useHistory();

    const handleClick = () => {
        if(user) {
            history.push("/payment")
        } else {
            history.push("/login");
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat 
              renderText={(value) => (
                  <>
                    <p>
                        Subtotal ({dataLayer.length} 
                        {dataLayer.length > 1 ? ' items' : ' item'}
                        ): <string>
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
              /*prefix={"$"}*/
            />
            <button className="subtotal-checkout"
            onClick={handleClick}
            >Proceed to checkout</button>
            {/* redirect to sign in if the user isn't signed in. */}
        </div>
    )
}

export default Subtotal
