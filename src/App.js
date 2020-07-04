import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar'
import CompanyRegistration from './Components/CompanyRegistration'
import CompanyLogin from './Components/CompanyLogin'
import Companyprofile from './Components/CompanyProfile'
import Header from './Components/Header'
import VerifyMail from './Components/verifyMail'
import NotYetVerified from './Components/notYetVerified'
import WelcomePage from './Components/WelcomePage'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <WelcomePage /> */}

        {/* <NavBar /> */}
        {/* <CompanyRegistration /> */}
        {/* <CompanyLogin /> */}
        {/* <NotYetVerified /> */}
        {/* <VerifyMail /> */}
        <Companyprofile />
      </div>
    )
  }
}

export default App
