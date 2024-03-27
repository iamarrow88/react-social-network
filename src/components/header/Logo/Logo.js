import style from './Logo.module.css';

const Logo = () => {
  return (
      <img className={style.logo}
           src='./logo.png'
           alt='logo'></img>
  );
};

export default Logo;