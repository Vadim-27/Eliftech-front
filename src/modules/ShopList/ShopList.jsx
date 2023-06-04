import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProducts, addToOrder } from 'redux/shop/shop-operation';

import css from './shopList.module.scss';

const ShopList = () => {
    const items = useSelector(store => store.shops.products);
    const dispatch = useDispatch();
    const params = useParams();
 
   

useEffect(() => {
  dispatch(fetchProducts(params));
}, [params, dispatch]);


    const handleBuyClick = (product) => {
         dispatch(addToOrder(product));
       
      };
    const markup = items.map(({ _id, title, price, shop }) => {
      const product = { id: _id, title, price, shop };
    return (
      <li className={css.items} key={_id}>
        <div className={css.shopBox}>{shop}</div>
        <p className={css.titleShopList}>{title}</p>
        <p className={css.price}>Price: {price}</p>
        <button
          className={css.buyButton}
          onClick={() => handleBuyClick(product)}
        >
          Buy
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul className={css.markupShopList}>{markup}</ul>
    </div>
  );
};
export default ShopList;
