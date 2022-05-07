import PropTypes from 'prop-types';
import './styles.css';

function Card({ item }) {
  return (
    <div className="card-con">
      <div className="card-texts-con">
        <p className="card-item-total">
          {item.total}
          <sup>$</sup>
        </p>
        <p className="card-item-des">The total value of Disbursement</p>
      </div>
      <div className="card-liners-con">
        <Liner
          title="Policy"
          value={item.policy}
          percent={Math.floor((item.policy / item.total) * 100)}
          color="linear-gradient(90deg, #33D69F 0%, #50EDB8 111.47%)"
        />
        <Liner
          title="Claim"
          value={item.claim}
          percent={Math.floor((item.claim / item.total) * 100)}
          color="linear-gradient(90deg, #713BDB 0%, #A886E9 111.47%)"
        />
      </div>
    </div>
  );
}

function Liner({ title, value, percent, color }) {
  return (
    <div className="liner-con">
      <div className="liner-title-con">
        <p>{title}</p>
        <p>
          {value}
          <sup>$</sup>
        </p>
      </div>
      <div className="liner-line"></div>
      <div style={{ background: color, width: `${percent}%` }} className="liner-line1"></div>
    </div>
  );
}

Liner.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  percent: PropTypes.number,
  color: PropTypes.string
};

Card.propTypes = {
  item: PropTypes.object
};
export default Card;
