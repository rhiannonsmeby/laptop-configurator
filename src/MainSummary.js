import React from 'react'
import Cart from './Cart'
import CartTotal from './CartTotal'

function MainSummary(props) {
    return (
      <section className="main__summary">
          <Cart summary={props.summary} USCurrencyFormat={props.USCurrencyFormat} selected={props.selected}/>
          <CartTotal total={props.total} USCurrencyFormat={props.USCurrencyFormat} selected={props.selected} />
      </section>
    )
}

export default MainSummary