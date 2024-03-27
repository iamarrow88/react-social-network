import style from './App.module.css';
import Header from "./components/header/Header/Header";
import Sider from "./components/aside/Sider/Sider";
import ProfilePage from "./components/page/pages/profile/ProfilePage/ProfilePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Chats from "./components/page/pages/Chats/Chats/Chats";
import News from "./components/page/pages/News/News";
import Music from "./components/page/pages/Music/Music";
import Settings from "./components/page/pages/Settings/Settings";

function App({ chats, userInfo }) {
  return (
      <BrowserRouter>
        <div className={style.appContainer}>
          <Header/>
          <Sider/>
          <Routes>
            <Route element={<ProfilePage userInfo={userInfo} />} path='/profile' />
            <Route element={<Chats chatsData={chats}/>} path='/chats' />
            <Route element={<News />} path='/news' />
            <Route element={<Music />} path='/music' />
            <Route element={<Settings />} path='/settings' />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
