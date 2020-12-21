import React from 'react'
import Cart from './Cart'
import CartTotal from './CartTotal'

function MainSummary(props) {
    return (
      <section className="main__summary">
          <Cart USCurrencyFormat={props.USCurrencyFormat} selected={props.selected}/>
          <CartTotal USCurrencyFormat={props.USCurrencyFormat} selected={props.selected} />
      </section>
    )
}

export default MainSummary