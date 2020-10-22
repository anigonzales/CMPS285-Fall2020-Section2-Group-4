import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function LoginPopup() {
    return (
        <Popup trigger={<button className="button"> Admin Login </button>} modal nested>
            
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}> &times; </button>
                    <div className="header"> Login Page</div>
                    <div className="content">
                        {/* {'LOGIN'} */}
                        Please Enter Username
                        <br />
                        Please Enter Password
                </div>
                    
                <div className="actions">
                    <Popup trigger={<button className="button"> Login </button>} position="top center" nested>LOGIN</Popup>
                        
                    {/* <button className="button" onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}>
                    close modal
                    </button> */}
                    
                </div>
            </div>
        )}
    </Popup>
)


};

export default LoginPopup;