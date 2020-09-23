import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function tabsNav() {
    return (
        <div className="tabsNav">
            <Tabs>
                <TabList>
                    <Tab>Pricing</Tab>
                    <Tab>About Us</Tab>
                    <Tab>Contact Us</Tab>
                </TabList>

                <TabPanel>add link to pricing page</TabPanel>
                <TabPanel>add link to about us page</TabPanel>
                <TabPanel>add link to contact us page</TabPanel>
            </Tabs>
        </div>
    )
}

// class tabsNav extends Component { 
//     render (){
//         const displayPosts = (
//         // <Tabs defaultIndex = {1} onSelect = {index => console.log(index)}>
//             <Tabs>
//             <TabList>
//                 <Tab>Pricing</Tab>
//                 <Tab>About Us</Tab>
//                 <Tab>Contact Us</Tab>
//             </TabList>

//             <TabPanel>add link to pricing page</TabPanel>
//             <TabPanel>add link to about us page</TabPanel>
//             <TabPanel>add link to contact us page</TabPanel>
//         </Tabs>
//         );
//         return (
//             // <div>
//                 {displayPosts}
//             // </div>
//         )
//     }
// }

export default tabsNav;