import { NavLink } from "react-router-dom";
import style from './NavItem.module.css';

const NavItem = ({ itemName, link}) => {
  const linkClasses = (isActive) => {
    return [style.li, isActive ? style.active : '' ].join(' ');
  }
  return (
      <li>
        <NavLink to={link} className={({isActive}) => {
          const res = isActive ? style.active : ''
          return `${style.li} ${res}`;
        }}>{itemName}</NavLink>
      </li>
  );
};

export default NavItem;