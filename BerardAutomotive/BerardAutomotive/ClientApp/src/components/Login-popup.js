import React from 'react';
import ReactModalLogin from "react-modal-login";
import './login.css';
import axios from'axios'

class LoginPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          redirect: false
    
        }
        this.myaxios = this.myaxios.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
      }
    
      handleUsername(e) {
        var value = e.target.value;
        if (value != null) {
          this.setState({ username: value })
        }
      }
    
      handlePassword(e) {
        var value = e.target.value;
        if (value != null) {
          this.setState({ password: value })
        }
      }
    
     async myaxios() {
        var self = this;
        await axios.post("/api/authentication/login", {
          username: this.state.username,
          password: this.state.password,
        }, { config : {header: {'Content-Type' : 'application/json'}}})
        .then((r) => {
          if (r.status == 200) {
            console.log(this.state);
            self.setState({ redirect: true });
            sessionStorage.setItem("username", r.data.username);
            console.log(this.state);
          }
        }).catch((err) => {
    
          console.log(err);
          alert("Incorrect Username or Password. Please try again");
        }).finally(() => {
          console.log(this.state);
        });
        window.location.reload(false);
      }

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         showModal: false,
    //         loggedIn: null,
    //         loading: false,
    //         error: null,
    //         initialTab: null,
    //     };
    // }

    onLogin() {
        console.log('__onLogin__');
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if (!email || !password) {
            this.setState({
                error: true
            })
        } else {
            this.onLoginSuccess('form');
        }
    }

    openModal(initialTab) {
        this.setState({
            initialTab: initialTab
        }, () => {
            this.setState({
                showModal: true,
            })
        });
    }

    onLoginSuccess(method, response) {
        this.myaxios();
        this.closeModal();
        this.setState({
            loggedIn: method,
            loading: false
        })
    }

    onLoginFail(method, response) {

        this.setState({
            loading: false,
            error: response
        })
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    finishLoading() {
        this.setState({
            loading: false
        })
    }

    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }

    render() {
        const loggedIn = this.state.loggedIn

        const isLoading = this.state.loading;

        return (
            <div>
                <button onClick={() => this.openModal('login')}> Admin Login </button>

                <ReactModalLogin
                    visible={this.state.showModal}
                    onCloseModal={this.closeModal.bind(this)}
                    loading={isLoading}
                    error={this.state.error}
                    startLoading={this.startLoading.bind(this)}
                    finishLoading={this.finishLoading.bind(this)}

                    form={{
                        onLogin: this.onLogin.bind(this),
                        //onClick: this.myaxios(),
                        loginBtn: {
                            label: "Sign in"
                        },

                        loginInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Email',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'email',
                                name: 'email',
                                placeholder: 'Email',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            }
                        ],
                    }}
                />

                {loggedIn}

            </div>
        )
    }




};

export default LoginPopup;