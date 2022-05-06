import { ReactComponent as Banner } from '../../assets/Banner1.svg';
import Card from '../Card/Card';
import './styles.css';
function Main() {
  const activities = [
    { total: 1000, policy: 400, claim: 800 },
    { total: 2500, policy: 1100, claim: 1400 },
    { total: 2500, policy: 1100, claim: 1400 }
  ];
  return (
    <div>
      <Banner />
      <Card item={activities} />
    </div>
  );
}

export default Main;
