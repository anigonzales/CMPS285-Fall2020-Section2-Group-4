import React from 'react';
import '../Footer.css';
import LoginPopup from './Login-popup';

function Footer(){
    return (
        <div className="Footer">
            <footer style = {{"overflow" : "hidden"}}>
                {/* <a href> Berard's Automotive Login Area </a> */}
                <LoginPopup />
                {/* <p>login here</p> */}
            </footer>
        </div>
    )
}

export default Footer;