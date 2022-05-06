import avatar from '../../assets/avatar.png';
import './styles.css';

function UserInfo() {
  return (
    <div className="user-info-con">
      <img src={avatar} width="100px" height="100px" />
      <p className="user-text1">Hello ! Rusalba Ruiz</p>
      <p className="user-text2">Welcome Back To Your Insurance Portal</p>
      <p className="user-text3">
        Your Plan : <em>Free</em>
      </p>
    </div>
  );
}

export default UserInfo;
