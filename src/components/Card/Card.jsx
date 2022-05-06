import PropTypes from 'prop-types';

function Card({ item }) {
  return (
    <div className="card-con">
      <p>
        {item.total}
        <sub>$</sub>
      </p>
      <p>The total value of Disbursement</p>
      <Liner title="Policy" value={item.policy} />
      <Liner title="Claim" value={item.claim} />
    </div>
  );
}

function Liner({ title, value }) {
  <div>
    <div>
      <p>{title}</p>
      <p>
        {value}
        <sub>$</sub>
      </p>
    </div>
    <div className="liner-line"></div>
  </div>;
}

Card.propTypes = {
  item: PropTypes.object
};
export default Card;
