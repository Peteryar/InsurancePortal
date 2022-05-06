import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import './styles.css'

function Dashboard(){
    return (
    <div className="dashboard-con">
        <Sidebar/>
        <Header/>
    </div>
    )
}

export default Dashboard