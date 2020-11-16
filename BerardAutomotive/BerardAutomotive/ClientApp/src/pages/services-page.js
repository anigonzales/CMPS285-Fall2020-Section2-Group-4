import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const ServicesPage = () => {
    return (
        <div>
            <div className="ServicesTabsNav">
                <Tabs>
                    <TabList>
                        <Tab>Brake Service and Repair</Tab>
                        <Tab>Batteries/ Starters/ Alternators</Tab>
                        <Tab>Alignment/ Wheel Balance</Tab>
                        <Tab>Air Conditioning Service and Repair</Tab>
                    </TabList>

                    <TabPanel>
                        <h1> Brake Inspection System</h1>
                        <p> At BERARDS AUTOMOTIVE in Mandeville, La. all brake systems are diagnosed and tested by ASE-master
                        certified technician Tye Berard. Tye has been servicing automobiles since 1984. Over the last 30
                        years Tye has performed thousand’s of brake jobs. He will test and diagnose your brake system problem
                        and determine what needs to be repaired. He can tell you if you need a brake pad replacement or if
                        you need any other brake services. He will determine what brake repair options you may have. There
                                are always options to meet your budget. </p>

                        <h3>
                            Common brake problems include:
                                </h3>

                        <p>
                            Squealing or grinding noise
                            Brake pedal pulsating
                            Brake pedal feels spongy
                            Steering wheel shakes, when braking
                            Brake fluid leaking
                                </p>
                        <p>
                            The brake system is the most important safety system on your vehicle. Never put off brake inspections
                            or any needed service or repair. Addressing problems early can save on more extensive and costly
                                repairs down the road.</p>
                    </TabPanel>

                    <TabPanel>
                        <h1>Battery Service and Repair</h1>

                        <p>
                            At BERARDS AUTOMOTIVE in Mandeville, La. we service/repair/replace batteries, starters, and alternators.
                            Diagnosis and testing is preformed by ASE-master certified technician Tye Berard. If any service or repair
                            is performed, Tye does a complete inspection of the work. He also runs the engine and does a test drive.
                                </p>

                        <h3>
                            Some common battery problems are:
                                </h3>

                        <p>
                            Engine won’t crank – (no noise at all)
                            Starter making a series of click sounds
                            No start, no lights, no power
                            Battery light on with engine running
                            Sometimes engine is slow to start
                            Hard to start when cold
                            Problems with electrical systems in the car
                                </p>

                        <p>
                            Because a battery is part of a larger system connected to other parts of the vehicle , a bad battery may
                            indicate a deeper problem.
                                </p>
                    </TabPanel>

                    <TabPanel>
                        <h1> Alignment Service and Repair </h1>

                        <p>
                            At BERARDS AUTOMOTIVE on Girod street in Old Mandeville, La. all wheel alignments are performed by ASE-Master
                            Certified Technician Tye Berard or one of his ASE-certified technicians. Tye has been working on automobiles since 1984;
                            opening BERARD’S AUTOMOTIVE on Girod st. in Mandeville, La. in 1998. He started his career as an alignment specialist,
                            performing thousands of alignments through the years. We can check to see if you need an alignment before its performed,
                            often the alignment is O.K. Surprisingly a tire low on air pressure or out of balance can be the problem.
                            </p>

                        <h3>Some of the things that can cause your alignment of going out of specification are: </h3>

                        <p>Hitting pot holes
                        Bumping into a curb
                        Regular bangs and bumps of rough roads
                        Worn steering parts
                            Slack in your suspension</p>

                        <p>All of these can add up and eventually cause your vehicle to be out of alignment.</p>

                        <p>We measure each wheel’s angle and alignment, that measurement is taken and compared to factory specification.
                        Adjustments are made to bring your alignment to its original setting. While the vehicle is on the alignment rack, we
                            diagnose steering and suspension components for damage or wear as well as the tires.</p>

                    </TabPanel>

                    <TabPanel>
                        <h1> A/C Performance Check</h1>

                        <p>At BERARDS AUTOMOTIVE in Mandeville, La. all A/C systems are diagnosed and tested by ASE-master certified
                        technician Tye Berard. He has also completed training and testing through EPA-approved A/C programs. Tye
                        has been working on automobiles since 1984; opening BERARDS’S AUTOMOTIVE at 723 Girod street, Old Mandeville,
                        in 1998. We have repaired thousand’s of air conditioning systems over the years. He will test and diagnose
                                your A/C problems and determine what needs to be repaired.</p>

                        <h3>Some common A/C problems are:</h3>

                        <p>Hot air blowing out vents
                        Air not cold enough
                        Lack of air pressure
                        Noise coming from blower
                                A/C wont blow at all</p>

                        <p>The number one problem we find is low refrigerant. Air conditioner systems are filled with refrigerant which is
                        responsible for the cold air that comes out your vents. Over time A/C O-rings, hoses and seals wear out – and
                        refrigerant leaks out, therefore your A/C stops cooling. The refrigerant in the a/c system has a special compressor
                        oil mixed with it. When the refrigerant leaks out, so does the compressor oil. This special refrigerant oil lubricates
                        and cools the A/C parts. When enough refrigerant and refrigerant oil leaks out, the parts don’t get cooled and lubricated
                                and they wear out. Addressing problems early can save on more extensive and costly repairs down the road.</p>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    )
}
