import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import emailIcon from '../assets/images/email-icon.png'
import profilePicture from '../assets/images/profile-samantha.png'
import { Link } from 'react-router-dom'
import Button from './Button'

export default class Navbar extends Component {
  goToVehicleTypeNext() {
    this.props.nextPage("VehicleType")
  }
  goToLoginNext() {
    this.props.nextPage("Login")
  }
  goToRegisterNext() {
    this.props.nextPage("Register")
  }
  render() {
    return (
        <nav className="navbar p-0 d-flex align-items-center navbar-expand-lg navbar-light">
            <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/vehicle-type">Vehicle Type</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/history">History</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                </ul>
                {
                  this.props.isLoggedIn && 
                  <div>
                  <a href="/history"><img className="email-icon" src={emailIcon} alt="email-icon" /></a>
                  <Link to="/profile"><img className="profile-icon" src={profilePicture}
                      alt="profile picture" /></Link>
                  </div>
                }
                {
                  !this.props.isLoggedIn &&             
                  <div className='d-flex flex-column flex-lg-row align-items-lg-center'>
                      <Link className="me-lg-3 mb-3 mb-lg-0" to="/login"><Button className="btn btn-navbar btn-outline-primary">Login</Button></Link>
                      <Link className="" to="/register"><Button className="btn btn-navbar btn-primary">Register</Button> </Link>
                  </div>
                }
            </div>
            </div>
        </nav>
    )
  }
}
