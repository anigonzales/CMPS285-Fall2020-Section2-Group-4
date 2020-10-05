import React from 'react';
import { Tab, Tabs, TabList} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from "react-router-dom";

function TabsNav() {
    return (
        <div className="tabsNav">
            <Tabs>
                <TabList>
                    <Link to = "/services"> <Tab> Services </Tab> </Link>
                    <Link to = "/about"><Tab>About Us</Tab> </Link>
                    <Link to = "/contact"><Tab>Contact Us</Tab> </Link>
                </TabList>
            </Tabs>
        </div>
       
    )
}

export default TabsNav;