import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import TabsState from './tabs-state';
import {
    Link
  } from "react-router-dom";

function TabsNav() {
    return (
        <div className="tabsNav">
            <Tabs>
                <TabList>
                    <Tab as = {Link} to = "/services">Pricing </Tab>
                    <Tab as = {Link} to = "/home">About Us</Tab>
                    <Tab as = {Link} to = "/other">Contact Us</Tab>
                </TabList>

                <TabPanel>
                    {/* <a href = {ServicesPage}> </a>      */}
                </TabPanel>
                <TabPanel>add link to about us page </TabPanel>
                <TabPanel>add link to contact us page</TabPanel>
            </Tabs>
        </div>
       
    )
}

export default TabsNav;