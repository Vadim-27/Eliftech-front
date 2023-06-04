import { NavLink } from "react-router-dom";
import items from "./items";
import css from './shopsNav.module.scss'

const ShopsNav = () => {
    const elementShopNav = items.map(({ id, text, link }) => {
        return (<li key={id}>
            <NavLink to={link}>{ text}</NavLink>
        </li>)
    })
    return (
      <div className={css.markupShopNav}>
        <ul className={css.markupShopNav}>{elementShopNav}</ul>
      </div>
    );
}
export default ShopsNav;