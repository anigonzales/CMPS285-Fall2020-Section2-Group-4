import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import TabsState from './tabs-state';
import { Link } from "react-router-dom";

function TabsNav() {
    return (
        <div className="tabsNav">
            <Tabs>
                <TabList>
                    <Link to="/home/services"> <Tab> Services </Tab> </Link>
                    <Link to="/home/about"><Tab>About Us</Tab> </Link>
                    <Link to="/home/contact"><Tab>Contact Us</Tab> </Link>
                </TabList>



            </Tabs>
        </div>

    )
}

export default TabsNav;