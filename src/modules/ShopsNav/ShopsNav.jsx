import { NavLink } from "react-router-dom";
import items from "./items";
import css from './shopsNav.module.scss'

const ShopsNav = () => {
    const elementShopNav = items.map(({ id, text, link }) => {
        return (<li key={id}>
            <NavLink className={css.shop}  to={link}>{ text}</NavLink>
        </li>)
    })
    return (
      <div className={css.markupShopNav}>
        <ul className={css.list}>{elementShopNav}</ul>
      </div>
    );
}
export default ShopsNav;