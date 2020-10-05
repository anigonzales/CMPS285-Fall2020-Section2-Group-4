import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../ServicesTab.css';
// import {Tab as Vert} from 'semantic-ui-react';

class ServicesPage extends Component {
    render() {
        return (
            <div>
                <div className="ServicesTabsNav">
                    <Tabs>
                        {/* <Vert menu = {{fluid: true, vertical: true, tabular: true}} Tabs= {{Tabs}}> */}
                        <TabList>
                            <Tab>Brake Service and Repair</Tab>
                            <Tab>Batteries/ Starters/ Alternators</Tab>
                            <Tab>Alignment/ Wheel Balance</Tab>
                            <Tab>Air Conditioning Service and Repair</Tab>
                        </TabList>

                        <TabPanel>
                            <h1> Brake Inspection System</h1>
                            <p> At MIKES AUTOMOTIVE in Mandeville, La. all brake systems are diagnosed and tested by ASE-master
                                certified technician Mike Levytskyi. <br /> Mike has been servicing automobiles since 2000. Over the last 20
                                years Mike has performed thousand’s of brake jobs. <br />He will test and diagnose your brake system problem
                                and determine what needs to be repaired. He can tell you if you need a brake pad replacement or if
                                you need any other brake services. <br /> He will determine what brake repair options you may have. There
                                are always options to meet your budget. </p>

                            <h3>
                                Common brake problems include:
                            </h3>

                            <ul style={{"textAlign": "center", "display" : "inline"}}>
                                <li>Squealing or grinding noise</li>
                                <li>Brake pedal pulsating</li>
                                <li>Brake pedal feels spongy</li>
                                <li>Steering wheel shakes, when braking</li>
                                <li>Brake fluid leaking</li>
                            </ul>

                            <br />

                            <p> <b>
                                The brake system is the most important safety system on your vehicle. Never put off brake inspections
                                or any needed service or repair. <br /> Addressing problems early can save on more extensive and costly
                                repairs down the road. </b> </p>
                        </TabPanel>

                        <TabPanel>
                            <h1>Battery Service and Repair</h1>
                            <p>
                                At MIKES AUTOMOTIVE in Mandeville, La., we service/repair/replace batteries, starters, and alternators.<br />
                                Diagnosis and testing is preformed by ASE-master certified technician Mike Levytskyi. <br />If any service or repair
                                is performed, Mike does a complete inspection of the work. He also runs the engine and does a test drive.
                                </p>

                            <h3>
                                Some common battery problems are:
                            </h3>

                                <ul style={{"textAlign": "center", "display" : "inline"}}>
                                    <li>Engine won’t crank – (no noise at all)</li>
                                    <li>Starter making a series of click sounds</li>
                                    <li>No start, no lights, no power</li>
                                    <li>Battery light on with engine running</li>
                                    <li>Sometimes engine is slow to start</li>
                                    <li>Hard to start when cold</li>
                                    <li>Problems with electrical systems in the car</li>
                                </ul>

                                <br />

                            <p><b>
                                Because a battery is part of a larger system connected to other parts of the vehicle, a bad battery may
                                indicate a deeper problem.
                                </b></p>
                        </TabPanel>

                        <TabPanel>
                            <h1> Alignment Service and Repair </h1>

                            <p>
                                AT MIKES AUTOMOTIVE on Girod street in Old Mandeville, La. all wheel alignments are performed by ASE-Master
                                Certified Technician Mike Levytskyi <br /> or one of his ASE-certified technicians. Mike has been working on automobiles since 2000;
                                opening MIKE’S AUTOMOTIVE on Girod st. in Mandeville, La. in 2010. <br /> He started his career as an alignment specialist,
                                performing thousands of alignments through the years. We can check to see if you need an alignment before its performed,<br />
                                often the alignment is O.K. Surprisingly a tire low on air pressure or out of balance can be the problem.
                            </p>

                            <h3>Some of the things that can cause your alignment of going out of specification are: </h3>

                            <ul style={{"textAlign": "center", "display" : "inline"}}>
                                <li>Hitting pot holes</li>
                                <li>Bumping into a curb</li>
                                <li>Regular bangs and bumps of rough roads</li>
                                <li>Worn steering parts</li>
                                <li>Slack in your suspension</li>
                            </ul>

                            <br />

                            <p> <b>All of these can add up and eventually cause your vehicle to be out of alignment.</b></p> <br />

                            <p> <b>We measure each wheel’s angle and alignment, that measurement is taken and  <br /> compared to factory specification.
                            Adjustments are made to bring your alignment to its original setting. While the vehicle is  <br />on the alignment rack, we
                            diagnose steering and suspension components for damage or wear as well as the tires.</b></p>

                        </TabPanel>

                        <TabPanel>
                            <h1> A/C Performance Check</h1>

                            <p>At MIKES AUTOMOTIVE in Mandeville, La. all A/C systems are diagnosed and tested by ASE-master certified
                                technician Mike Levytskyi. <br /> He has also completed training and testing through EPA-approved A/C programs. Mike
                                has been working on automobiles since 2000; <br /> opening MIKE’S AUTOMOTIVE at 723 Girod street, Old Mandeville,
                                in 2010. We have repaired thousand’s of air conditioning systems over the years. <br />He will test and diagnose
                                your A/C problems and determine what needs to be repaired.</p>

                            <h3>Some common A/C problems are:</h3>

                            <ul style={{"textAlign": "center", "display" : "inline"}}>
                                <li>Hot air blowing out vents</li>
                                <li>Air not cold enough</li>
                                <li>Lack of air pressure</li>
                                <li>Noise coming from blower</li>
                                <li>A/C wont blow at all</li>     
                            </ul>

                            <br />

                            <p><b>The number one problem we find is low refrigerant. Air conditioner systems are filled with refrigerant which is<br />
                                responsible for the cold air that comes out your vents. Over time A/C O-rings, hoses and seals wear out – and
                                refrigerant leaks out, therefore your A/C stops cooling.<br /> The refrigerant in the a/c system has a special compressor
                                oil mixed with it. When the refrigerant leaks out, so does the compressor oil. This special refrigerant  <br /> oil lubricates
                                and cools the A/C parts. When enough refrigerant and refrigerant oil leaks out, the parts don’t get cooled and lubricated  <br />
                                and they wear out. Addressing problems early can save on more extensive and costly repairs down the road.</b></p>
                        </TabPanel>
                        {/* </Vert> */}
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default ServicesPage;