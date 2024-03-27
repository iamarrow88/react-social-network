import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import style from './ProfilePage.module.css';

const ProfilePage = ({userInfo}) => {
  return (
      <div className={style.profile}>
        <h2 className={style.title}>Profile</h2>
        <ProfileInfo {...userInfo} />
      </div>
  );
};

export default ProfilePage;