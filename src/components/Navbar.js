import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import emailIcon from '../assets/images/email-icon.png'
import profilePicture from '../assets/images/profile-samantha.png'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar p-0 d-flex align-items-center navbar-expand-lg navbar-light">
            <div className="container">
            <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Vehicle Type</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">History</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                </ul>
                {
                  this.props.isLoggedIn && 
                  <div>
                  <a href="/history"><img className="email-icon" src={emailIcon} alt="email-icon" /></a>
                  <a href="/profile"><img className="profile-icon" src={profilePicture}
                      alt="profile picture" /></a>
                  </div>
                }
                {
                  !this.props.isLoggedIn &&             
                  <div>
                    <button className="btn-outline-primary me-3" onclick="location.href='/login'">Login</button>
                    <button className="btn-primary" onclick="location.href='/register'">Register</button>
                  </div>
                }
            </div>
            </div>
        </nav>
    )
  }
}
