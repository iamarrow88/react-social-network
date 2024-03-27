import style from './ProfileInfo.module.css';
import profileAvaMale from '../../Chats/chat-item/Chat-Item/avatar-male.png';
import profileAvaFemale from '../../Chats/chat-item/Chat-Item/avatar-female.png';

const ProfileInfo = ({ username, age, isMale }) => {
  const image = isMale ? profileAvaMale : profileAvaFemale
  return (
      <div className={style.profileInfo}>
        <img src={ image } alt="user avatar" className={style.avatar}/>

        <div className={style.infoBlock}>
          <p><span className={style.title}>Name: </span>{username}</p>
          <p><span className={style.title}>Age: </span>{age}</p>
        </div>

      </div>
  );
};

export default ProfileInfo;