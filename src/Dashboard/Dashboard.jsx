import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';

import './styles.css';

function Dashboard() {
  return (
    <div className="dashboard-con">
      <Sidebar />
      <div className="dashboard-right">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
