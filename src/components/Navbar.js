import React from 'react'
import logo from '../assets/images/logo.png'
import emailIcon from '../assets/images/email-icon.png'
import profilePicture from '../assets/images/profile-samantha.png'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import NoProfilePicture from '../assets/images/no-profile-picture.png'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch({
      type: "LOGOUT"
    })
    navigate('/login')
  }

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
            auth.token && 
            <div className='d-flex align-items-center justify-content-between'>
              <div>
                <a href="#"><img className="email-icon" src={emailIcon} alt="email-icon" /></a>
              </div>
              <div className='dropdown'>
                <img className="profile-icon dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"
                  src={auth.userData.picture ? auth.userData.picture : NoProfilePicture} alt="profile picture" />
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  {!auth.userData.is_verified && <li><Link className="dropdown-item" to="/verify-user">Verify this account</Link></li>}
                  <li><Button className="dropdown-item" to="/logout" onClick={logout}>Logout</Button></li>
                </ul>
              </div>
            </div>
          }
          {
            !auth.token &&             
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

export default Navbar