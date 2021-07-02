import { useEffect } from "react";
import Actions from "../components/actions";
import DrawerHeadTools from "../components/drawer-head-tools";
import SideNav from "../components/side-nav";
import Editor from '../components/sampleRete';
import Properties from "../components/properties";

function Dashboard() {
   
    return <section className="dashboard">
        <div className="sidebar">
            <SideNav />
        </div>
        <Actions />
        <div className="drawer">
            <DrawerHeadTools />
            <Editor />
            <div class="drawer-properties">
                <Properties />
            </div>
        </div>
    </section>
}

export default Dashboard;