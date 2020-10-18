import React, { Component } from 'react'
// import Slider from '../components/Slider/Slider';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* // <div className = "HomeSlides">
            //     <div>
            //         <Slider />
            //     </div>
            // </div> */}
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

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

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