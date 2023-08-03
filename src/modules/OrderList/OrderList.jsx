import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import SvgSelectors from 'components/svgSelectors/SvgSelectors';
import { dellItemOrder, dellAllOrder } from 'redux/shop/shop-operation';
import { useEffect } from 'react';
import css from "./orderList.module.scss"

const OrderList = () => {
  const items = useSelector(store => store.shops.orders);
  
  const dispatch = useDispatch();
    useEffect(() => {
      setOrderItems(items.map(item => ({ ...item, quantity: 1 })));
    }, [items]);
  const [orderItems, setOrderItems] = useState([]);
  
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
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };
  const deleteItem = id => {
    dispatch(dellItemOrder(id))
  }
  const deleteAllItem = orderItems => {
    dispatch(dellAllOrder(orderItems));
  };
    
    const orderCard = orderItems.map(({ id, quantity, title, price, shop }) => {
     
      const orderPrice = price * quantity;
      return (
        <li className={css.items} key={id}>
          <button type='button' className={css.btnTrash} onClick={()=>deleteItem(id)}>
            <SvgSelectors styles={css.trash} id="delete" />
          </button>
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
  
  const totalPrise =  orderItems.reduce((total, { price, quantity }) => {
    return total + price * quantity;
  }, 0);
  
    return (
      <>
        {orderItems.length > 0 && (
          <div>
            <ul className={css.markupShopList}>{orderCard}</ul>
            
              <p className={css.totalPrise}>Total prise: {totalPrise}</p>
            
             
              <button
                type="button"
                className={css.btnDeleteAll}
                onClick={() => deleteAllItem(orderItems)}
              >
                Delete all
              </button>
            
          </div>
        )}
      </>
    );
}
export default OrderList;