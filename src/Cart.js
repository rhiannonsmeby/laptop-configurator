import React from 'react'

function Cart(props) {
    return (
        <div>
            <h2>Your cart</h2>
                {props.summary}
        </div>
    )
}

export default Cart