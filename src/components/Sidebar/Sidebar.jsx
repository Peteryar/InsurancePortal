import Item from "../Item/Item";
import Logo from "../Logo/Logo";
import UserInfo from "../UserInfo/UserInfo";
import Button from "./Button/Button";
import './styles.css'

function Sidebar() {
    const items = [{ name: 'Overview', icon: 'MenuIcon' }, { name: 'Policy', icon: 'PolicyIcon' }, { name: 'Reports', icon: 'ReportsIcon' }, { name: 'Company', icon: 'CompanyIcon' }, { name: 'User Account', icon: 'UserIcon' }, { name: 'History', icon: 'HistoryIcon' }]
    return (
        <div className="sidebar-con">
            <div className="sidebar-top">
                <Logo />
                <UserInfo />
                <Button />
                {items.map((item, i) => <Item key={i} text={item.name} icon={item.icon} />)}
            </div>
            <Item text='Log Out' />
        </div>
    )
}

export default Sidebar;