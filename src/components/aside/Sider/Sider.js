import Nav from "../nav/Nav/Nav";
import style from './Sider.module.css';

const Sider = () => {
  return (
      <aside className={style.sider}>
        <Nav />
      </aside>
  );
};

export default Sider;