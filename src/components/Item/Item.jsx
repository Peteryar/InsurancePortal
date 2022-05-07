import './styles.css';
import { ReactComponent as LogOutIcon } from '../../assets/log-out.svg';
import PropTypes from 'prop-types';

function Item({ text, icon, navigate, index, active }) {
  return (
    <div onClick={() => navigate(index)} className={text === 'Log Out' ? 'item-con1' : 'item-con'}>
      {text === 'Log Out' ? (
        <LogOutIcon style={{ marginRight: 15 }} />
      ) : (
        <span
          style={{ marginRight: 25, color: active ? '#713BDB' : '#A2A4B9' }}
          className="material-symbols-outlined">
          {icon}
        </span>
      )}
      <p style={{ color: active ? '#713BDB' : null }}>{text}</p>
    </div>
  );
}

Item.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  navigate: PropTypes.func,
  index: PropTypes.number,
  active: PropTypes.bool
};

export default Item;
