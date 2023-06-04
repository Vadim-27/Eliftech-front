import { NavLink } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import items from './items';

import css from "./navbar.module.scss";


const Navbar = () => {
 
  

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.menu}>
      <ul className={css.menu}>{elements}</ul>

    
    </div>
  );
};

export default Navbar;
