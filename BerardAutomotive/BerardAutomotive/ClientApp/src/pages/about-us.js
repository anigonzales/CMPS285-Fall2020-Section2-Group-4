import React from 'react'
import { Container, Divider, Header, Image, Embed } from 'semantic-ui-react'

export const AboutUsPage = () => {

    const src = '/images/wireframe/image.png'

    return (
        <>
            <div >
                <Container className='about'>
                    <Divider horizontal>
                        <Header as='h4'>
                            History
      </Header>
                    </Divider>
                    <p textAlign='right'>
                        Owner and operator Tye S. Berard has been working in the
                        automotive field since 1984. Started acquiring ASE certifications
                        in 1987 while working at Firestone, in the fields of Engine Repair,
                        Automatic Transmission/Transaxle, Manual Drivetrain and Axles,
                        Suspension and Steering, Brakes, Electrical/ Electronic Systems,
                        Heating and A/C, and Engine Performance. Taking and passing all 8
                        tests allows Tye to be Master Certified in Automotive Repair. A
                        large number of years Tye worked at Efficient Transmission in
                        Mandeville, LA. In 1997, Tye decided to venture out on his own and
                        opened Berard’s Automotive in the Old Mandeville section of town.
                        In business for over 18 years, this shop has become quite a reliable
                        fixture in Old Mandeville area. Family oriented, reliable service,
                        fair pricing, quality work, are just a few things that the people
                        of St. Tammany have come to know about Berard’s Automotive.
                    </p>
                    <p>
                        Tye and Melissa Berard have been together since 1991 and married since
                        1995. Working together harmoniously since 1997 when the shop opened. They
                        have 4 children of which participated in sports i.e., CRD football CRD
                        basketball, CRD Cheerleading, Fontainebleau High School Football, Football
                        Trainer. Tye was assistant coach for CRD Vikings for many years and gave
                        many hours of his time to help the kids in our community. Melissa ran CRD
                        cheerleading for 2 years, volunteering as well. These were fun times! We
                        love being a part of the St. Tammany Parish community and will continue to
                        support the area and its people.
      </p>
                    <Divider />
                </Container>
            </div>
            <div className='aboutTwo'>
                <Embed
                    className='video'
                    id='ZpvfCpvzE78'
                    source='youtube'
                />
                <Image src={src} size='tiny' verticalAlign='top' /> <span>Top Aligned</span>
                <Divider />
                <Image src={src} size='tiny' verticalAlign='top' /> <span>Top Aligned</span>
                <Divider />
                <Image src={src} size='tiny' verticalAlign='top' /> <span>Top Aligned</span>
                <Divider />


            </div>
        </>

    )

}