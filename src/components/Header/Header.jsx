import { useState } from 'react';
import './styles.css';
function Header() {
  const [active, setActive] = useState('reports');

  const navigate = (pathName) => {
    setActive(pathName);
  };
  return (
    <div className="header-con">
      <ul>
        <span className={active === 'overview' ? 'nav-item-con-active' : 'nav-item-con'}>
          <li onClick={() => navigate('overview')}>Overview</li>
          <div></div>
        </span>
        <span className={active === 'policy' ? 'nav-item-con-active' : 'nav-item-con'}>
          <li onClick={() => navigate('policy')}>Policy</li>
          <div></div>
        </span>
        <span className={active === 'reports' ? 'nav-item-con-active' : 'nav-item-con'}>
          <li onClick={() => navigate('reports')}>Reports</li>
          <div></div>
        </span>
      </ul>
    </div>
  );
}

export default Header;
