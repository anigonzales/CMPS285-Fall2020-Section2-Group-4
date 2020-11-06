import React from 'react';
import { Container, Divider, Header, Image } from 'semantic-ui-react'
import pic7 from '../pictures/pic7.jpg'
import pic9 from '../pictures/pic9.jpg'
import pic10 from '../pictures/pic10.jpg'

export const AboutPage = () => {
    return (
        <>
            <div >
                <Container className='about'>
                    <Divider horizontal>
                        <Header as='h2'>
                            Brief History
                        </Header>
                    </Divider>

                    <p text-align='right'>
                        Owner and operator Mike Levytskyi has been working in the
                        automotive field since 2010. Started acquiring ASE certifications
                        in 2005 while working at Firestone, in the fields of Engine Repair,
                        Automatic Transmission/Transaxle, Manual Drivetrain and Axles,
                        Suspension and Steering, Brakes, Electrical/ Electronic Systems,
                        Heating and A/C, and Engine Performance. Taking and passing all 8
                        tests allows Mike to be Master Certified in Automotive Repair. A
                        large number of years Mike worked at Efficient Transmission in
                        Mandeville, LA. In 2005, Mike decided to venture out on his own and
                        opened Mike’s Automotive in the Old Mandeville section of town.
                        In business for over 5 years, this shop has become quite a reliable
                        fixture in Old Mandeville area. Family oriented, reliable service,
                        fair pricing, quality work, are just a few things that the people
                        of St. Tammany have come to know about Mike’s Automotive.
                    </p>

                    <Divider horizontal>
                        <Header as='h2'>
                            Our Automotive Family
                        </Header>
                    </Divider>
                </Container>
            </div>

            <div className='aboutTwo'>
                <Image src={pic9} size='medium' verticalAlign='top' />
                <span >Matthew Ryan -  Matt has extensive experience in maintenance, repair, service, machinery, and equipment. He has an extensive background in welding and fabrication. Matt is a very motivated and ambitious worker and has developed quite a following with our customers! </span>
                <Divider />

                <Image src={pic7} size='medium' verticalAlign='top' />
                <span>Mark MacTurk -  Mark is a Service Technician. He has been in the automotive business for over 15 years. Mark is an ASE Certified Master Technician in all areas of automotive repair, specializing in Light Diesel Repair, Alternative Fuels and Smog Inspection.</span>
                <Divider />

                <Image src={pic10} size='medium' verticalAlign='top' />
                <span>Donnie Tyson - Don is an ASE Certified Master Technician in all areas of automotive repair, specializing in everything to do with passenger cars and light truck diagnostics and repair. He is best known as one of the top technicians in the area by once winning the AC Delco “Top Shop Shoot Out” Diagnostics competition for the western 13 states.</span>
                <Divider />

                <Divider />
            </div>

        </>

    )

}

export default AboutPage;