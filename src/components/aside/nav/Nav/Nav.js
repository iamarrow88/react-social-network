import NavItem from "../NavItem/NavItem";
import style from './Nav.module.css';

const Nav = () => {
  return (
      <nav>
        <ul className={style.menu}>
          <NavItem itemName="Profile" link='/profile' />
          <NavItem itemName="Chats" link='/chats' />
          <NavItem itemName="News Feed" link='/news' />
          <NavItem itemName="Music" link='/music' />
        </ul>
      </nav>
  );
};

export default Nav;