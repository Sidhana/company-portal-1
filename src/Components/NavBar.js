import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import CompanyRegistration from './CompanyRegistration';
import CompanyLogin from './CompanyLogin';
import WelcomePage from './WelcomePage';
import Companyprofile from './CompanyProfile';
import CompnayNotification from './CompanyNotification';
import NewAdFrom from './NewAdFrom';


class NavBar extends Component{
    render(){
        return (
        <Router>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#192a56'}}>
                    <Link to={'/'} className="navbar-brand">UCSC PDC</Link>
                    <div className="collapse navbar-collapse" id="navbarSup"></div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to = {'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path = '/login' component= {CompanyLogin}/>
                    <Route exact path = '/register' component= {CompanyRegistration}/>
                    <Route exact path = '/' component= {WelcomePage}/>
                    <Route exact path = '/profile' component= {Companyprofile}/>
                    <Route exact path = '/notification' component= {CompnayNotification}/>
                    <Route exact path = '/newadd' component = {NewAdFrom}/>
                </Switch>
        </Router>
        );
    }
}
export default NavBar;

