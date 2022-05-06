import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import './styles.css';

function UserInfo() {
  return (
    <div className="user-info-con">
      <Avatar width="100px" height="100px" />
      <p className="user-text1">Hello ! Rusalba Ruiz</p>
      <p className="user-text2">Welcome Back To Your Insurance Portal</p>
      <p className="user-text3">
        Your Plan : <em>Free</em>
      </p>
    </div>
  );
}

export default UserInfo;
