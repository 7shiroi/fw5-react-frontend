import React from 'react'
import Footer from '../components/Footer'
import {FaChevronLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { requestResetPassword } from '../redux/actions/auth'

export const ForgotPassword = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onRequestOTP = (e) => {
    e.preventDefault()
    const email = e.target.elements['email'].value
    dispatch(requestResetPassword(email))
    dispatch({
      type: "SET_EMAIL",
      payload: {email}
    })
  }
  return (
    <>
      {auth.token && <Navigate to='/' />}
      <header className="header-forgot-password">
        <div className="header-content">
          <div className="container h-100">
            <div className="back-link py-5 d-flex align-items-center">
            <Link to="/login">
              <div className='clickAble d-flex align-items-center'>
                <div>
                  <FaChevronLeft />
                </div>
                <div>&ensp;Back</div>
              </div>
            </Link>
            </div>
            <div className="main">
              <div className="d-flex flex-column align-items-center">
                <div className="row">
                  <h1>Don't worry, we got your back!</h1>
                </div>
                <form className="mb-5" onSubmit={(e) => onRequestOTP(e)}>
                  <div className="row form-forgot mb-4">
                    <input type="email" name='email' placeholder="Enter your email address" />
                  </div>
                  <div className="row form-forgot">
                    <button className="btn-primary" type='submit'>Send Link</button>
                  </div>
                </form>
                <div className="row text-center">
                  {/* <span>
                    You will receive a link to reset your password.<br/>If you haven't received any link, click <a
                      href="#">Resend Link</a></span> */}
                    <span>
                      If you have received the OTP<br/>
                      You can go <Link to="/reset-password">Here</Link>
                    </span>
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