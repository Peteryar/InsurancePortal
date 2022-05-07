// import { ReactComponent as Banner } from '../../assets/banner.svg';
import banner from '../../assets/banner.svg';
import Card from '../Card/Card';
import './styles.css';
function Main() {
  const activities = [
    { total: 1000, policy: 400, claim: 800 },
    { total: 2500, policy: 1100, claim: 1400 },
    { total: 2500, policy: 1100, claim: 1400 }
  ];
  return (
    <div data-testid="main" className="main-con">
      <div className="main-banner-con">
        <img width="100%" src={banner} />
      </div>
      <div className="main-cards-con">
        {activities.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Main;
