import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header/Header";
import Sider from "./components/aside/Sider/Sider";

function App() {
  return (
        <div className={style.appContainer}>
          <Header/>
          <Sider/>
        </div>
  );
}

export default App;
