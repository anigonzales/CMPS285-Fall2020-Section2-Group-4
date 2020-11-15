import React from 'react';
import { Tab, Tabs, TabList} from 'react-tabs';
// import { Tab, Tabs, TabList } from 'semantic-ui-react'
import 'react-tabs/style/react-tabs.css';
import {Link} from "react-router-dom";
// import AboutPage from '../../pages/about-page';


// const panes = [
//     // { menuItem: 'Services', render: () => 
//     //     <Tab.Pane>
//     //         Tab 1 Content
//     //     </Tab.Pane> },

//     { menuItem: 'About Us', render: () => 
//         <Tab.Pane as = 'NavLink' to = "/about" >
//             <AboutPage/>
//         </Tab.Pane> },

//     { menuItem: 'Contact Us', render: () => 
//         <Tab.Pane>
//             Tab 3 Content
//         </Tab.Pane> },
//   ]

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
            {/* <Tab panes={panes} /> */}
        </div>
       
    )
}

export default TabsNav;