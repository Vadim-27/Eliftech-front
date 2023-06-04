import { useSelector } from 'react-redux';
import { useState } from 'react';

import css from "./orderList.module.scss"

const OrderList = () => {
    const items = useSelector(store => store.shops.orders);
    
    
  const [orderItems, setOrderItems] = useState(
    items.map(item => ({ ...item, quantity: 0 }))
  );

  const handleIncrementQuantity = id => {
    setOrderItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrementQuantity = id => {
    setOrderItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };
    
    const orderCard = orderItems.map(({ id, quantity, title, price, shop }) => {
     
      const orderPrice = price * quantity;
      return (
        <li className={css.items} key={id}>
          <div className={css.shopBox}>{shop}</div>
          <p className={css.titleShopList}>{title}</p>
          <p className={css.price}>Price: {price}</p>
          <button
            className={css.buttonQuantity}
            type="button"
            onClick={() => handleDecrementQuantity(id)}
          >
            -
          </button>
          <span className={css.quantity}>{quantity}</span>
          <button
            className={css.buttonQuantity}
            type="button"
            onClick={() => handleIncrementQuantity(id)}
          >
            +
          </button>
          <p className={css.orderPrice}>Order price: {orderPrice} </p>
        </li>
      );
    });
    const totalPrise = orderItems.reduce((total, { price, quantity }) => {
      return total + price * quantity;
    }, 0);
    return (
      <div>
        <ul className={css.markupShopList}>{orderCard}</ul>
        <p className={css.totalPrise}>Total prise: {totalPrise}</p>
      </div>
    );
}
export default OrderList;