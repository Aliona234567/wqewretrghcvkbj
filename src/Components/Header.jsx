import React, { useState } from 'react'
import { PiShoppingCart } from "react-icons/pi";
import Order from './Order';
const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.prace))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>
        Сумма: {new Intl.NumberFormat().format(summa)}$
      </p>
    </div>
  );
}
const showNothing = () => {
  return (
    <div className='emty'>
      <h2>Товаром нету</h2>
    </div>
  );
}
export default function Header(props) {
  let [cartOpen, setCertOpen] = useState(false)
  return (
    <header>
      <div className='qwe'>
        <span className='logo'>Sugar</span>
        <ul   >
          <li>Католог</li>
          <li>О нас </li>
          <li>Контакты</li>
        </ul>
        <PiShoppingCart onClick={() => setCertOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />


        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()} {}
          </div>
        )}

      </div>
      <div className='presentesion'>

      </div>
    </header>
  )
}