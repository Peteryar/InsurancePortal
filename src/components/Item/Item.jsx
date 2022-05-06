import icons from '../../imageUtil';
import './styles.css';
import { ReactComponent as LogOutIcon } from '../../assets/log-out.svg';
import PropTypes from 'prop-types';

function Item({ text, icon }) {
  return (
    <div className={text === 'Log Out' ? 'item-con1' : 'item-con'}>
      {text === 'Log Out' ? <LogOutIcon style={{ marginRight: 25 }} /> : <img src={icons[icon]} />}
      <p>{text}</p>
    </div>
  );
}

Item.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string
};

export default Item;
