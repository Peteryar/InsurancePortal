import { useState } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import Logo from '../Logo/Logo';
import UserInfo from '../UserInfo/UserInfo';
import Button from './Button/Button';
import './styles.css';

function Sidebar({ showSidebar, closeSidebar }) {
  const [active, setActive] = useState(2);
  // const [deviceWidth, setDeviceWith] = useState(window.innerWidth);

  const navigate = (path) => {
    setActive(path);
    closeSidebar();
  };

  const items = [
    { name: 'Overview', icon: 'grid_view' },
    { name: 'Policy', icon: 'policy' },
    { name: 'Reports', icon: 'bug_report' },
    { name: 'Company', icon: 'villa' },
    { name: 'User Account', icon: 'account_circle_full' },
    { name: 'History', icon: 'description' }
  ];
  return (
    <div
      data-testid="sidebar"
      style={{ display: showSidebar ? 'flex' : null }}
      className="sidebar-con">
      <div className="sidebar-top">
        <Logo />
        <UserInfo />
        <Button />
        {items.map((item, i) => (
          <Item
            active={active === i ? true : false}
            navigate={(path) => navigate(path)}
            handle
            key={i}
            index={i}
            text={item.name}
            icon={item.icon}
          />
        ))}
      </div>
      <div>
        <Item text="Log Out" />
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  showSidebar: PropTypes.bool,
  closeSidebar: PropTypes.func
};

export default Sidebar;
