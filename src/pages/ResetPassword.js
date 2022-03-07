import React, { useState } from 'react'
import Footer from '../components/Footer'
import {FaChevronLeft} from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import OtpInput from 'react-otp-input'
import { resetPassword } from '../redux/actions/auth'
import Button from '../components/Button'

export const ResetPassword = () => {
  const auth = useSelector(state => state.auth);
  const [otpValue, setOtpValue] = useState('')
  const dispatch = useDispatch()
  
  const handleOtpChange = (e) => {
    setOtpValue(e)
  }

  const onResetPassword = (e) => {
    e.preventDefault()
    const password = e.target.elements['password'].value
    const confirmPassword = e.target.elements['confirmPassword'].value
    dispatch(resetPassword(otpValue, auth.email, password, confirmPassword))
  }

  return (
    <>
      {auth.token && <Navigate to='/' />}
      <header className="header-forgot-password">
        <div className="header-content">
          <div className="container h-100">
            <div className="back-link py-5 d-flex align-items-center">
              <div className='clickAble d-flex align-items-center' onClick={() => this.goToLoginNext()}>
                <div>
                  <Link to="/login"><FaChevronLeft /></Link>
                </div>
                <div>&ensp;Back</div>
              </div>
            </div>
            <div className="main">
              <div className="d-flex flex-column align-items-center">
                <div className="row">
                  {
                    auth.email &&
                    <h1>Enter the OTP we sent to {auth.email}!</h1>
                  }
                  {
                    !auth.email && auth.message === "Your password has been updated" &&
                    <h1>{auth.message}!</h1>
                  }
                </div>
                <form className="mb-5" onSubmit={(e) => onResetPassword(e)}>
                  <div className="row form-forgot mb-4">
                    <OtpInput 
                      value={otpValue}
                      onChange={(e) => handleOtpChange(e)}
                      numInputs={6}
                      isInputNum={true}
                      containerStyle='flex justify-content-center'
                      inputStyle='otpInput'
                    />
                    
                  </div>
                  <div className="row form-forgot mb-4">
                    <input className='mb-3' type="password" name='password' placeholder="New Password" />
                    <input type="password" name='confirmPassword' placeholder="Confirm New Password" />
                  </div>
                  <div className="row form-forgot">
                    {
                      auth.email &&
                      <button className="btn-primary" type='submit'>Reset Password</button>
                    }
                    {
                      !auth.email && auth.message === "Your password has been updated" &&
                      <Link to='/login'><Button className='btn-primary'>Login</Button></Link>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  )
}

export default ResetPassword