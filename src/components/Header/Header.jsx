import { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Header({ toggleSidebar, showSidebar }) {
  const [active, setActive] = useState('reports');

  const navigate = (pathName) => {
    setActive(pathName);
  };
  return (
    <div data-testid="header" className="header-con">
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
      <div>
        {showSidebar ? (
          <span onClick={toggleSidebar} className="material-symbols-outlined hamburger-menu">
            close
          </span>
        ) : (
          <span onClick={toggleSidebar} className="material-symbols-outlined hamburger-menu">
            menu
          </span>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  toggleSidebar: PropTypes.func,
  showSidebar: PropTypes.bool
};

export default Header;
