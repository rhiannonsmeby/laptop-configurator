import React from 'react'

function CartTotal(props) {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {props.USCurrencyFormat.format(props.total)}
            </div>
        </div>
    )
}

export default CartTotal