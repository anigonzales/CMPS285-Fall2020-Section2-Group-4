import React from 'react';
import NavBar from './components/NavBar';
import './login-page.css'
import { Messages } from './messages'
import Event from './event'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function LoginPage() {

    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/messages' component={Messages} />
                    <Route path='/event' component={Event} />
                </Switch>
            </Router>
        </>
    )


}
export default LoginPage;