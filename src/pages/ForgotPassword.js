import React from 'react'
import Footer from '../components/Footer'
import {FaChevronLeft} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ForgotPassword = () => {
  const auth = useSelector(state => state.auth)
  return (
    <>
      {auth.token && <Navigate to='/' />}
      <header className="header-forgot-password">
        <div className="header-content">
          <div className="container h-100">
            <div className="back-link py-5 d-flex align-items-center">
              <div className='clickAble d-flex align-items-center' onClick={() => this.goToLoginNext()}>
                <div>
                  <a href="/login"><FaChevronLeft /></a>
                </div>
                <div>&ensp;Back</div>
              </div>
            </div>
            <div className="main">
              <div className="d-flex flex-column align-items-center">
                <div className="row">
                  <h1>Don't worry, we got your back!</h1>
                </div>
                <div className="mb-5">
                  <div className="row form-forgot mb-4">
                    <input type="email" placeholder="Enter your email address" />
                  </div>
                  <div className="row form-forgot">
                    <button className="btn-primary">Send Link</button>
                  </div>
                </div>
                <div className="row text-center">
                  <span>
                    You will receive a link to reset your password.<br/>If you haven't received any link, click <a
                      href="#">Resend Link</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  )
}

export default ForgotPassword