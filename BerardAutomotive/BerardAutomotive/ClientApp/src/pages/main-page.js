import React, { Component } from 'react'
import auto1 from '../pictures/auto1.jpg'
import auto2 from '../pictures/auto2.jpg'
import auto3 from '../pictures/auto3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "HomeSlides">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-blockw-100"
                            src={auto1}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-blockw-100"
                            src={auto2}
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-blockw-100"
                            src={auto3}
                            alt="Third slide"
                            
                        />

                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
                
                </div>
                <div className="HomeInfo">
                    <h3 style={{ "textAlign": "left", "display": "inline-block", "marginRight": "50px" }}>What We Provide </h3>
                    <h3 style={{ "textAlign": "right", "display": "inline-block", "marginLeft": "50px" }}> Our Services </h3>

                    <div style={{ "textAlign": "center" }}>
                        <ul style={{ "textAlign": "center", "display": "inline-block", "listStyleType": "none" }}>
                            <li> ASE Master Certified Expert Technicians </li>
                            <li> Warranty Guaranteed Auto Work </li>
                            <li> Excellent Reviews From Customers </li>
                        </ul>

                        <ul style={{ "textAlign": "center", "display": "inline-block", "listStyleType": "none" }}>
                            <li>Air / Heat Services</li>
                            <li>Brake System Repair Services</li>
                            <li>Oil Lube Services</li>
                            <li>Exhaust System Services</li>
                        </ul>
                    </div>

                    <p><b>Mike's Automotive offers a commitment to personalized service for our clients. <br />
                        If you have further questions or need help with a case, <br /> please visit our
                    contact page and fill out the form. <br /> A team member will return your message as
                    soon as possible.</b></p>
                </div >
            </React.Fragment>
        )
    }
}

export default MainPage;