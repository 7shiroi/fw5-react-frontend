import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import {FaChevronLeft} from 'react-icons/fa'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, verifyUser } from '../redux/actions/auth'

export const VerifyUser = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(verifyUser(auth.token))
  }, [])


  const onSubmit = (e) => {
    e.preventDefault()
    let otp = ''
    otp += e.target.elements['otp1'].value
    otp += e.target.elements['otp2'].value
    otp += e.target.elements['otp3'].value
    otp += e.target.elements['otp4'].value
    otp += e.target.elements['otp5'].value
    otp += e.target.elements['otp6'].value
    dispatch(verifyUser(auth.token, otp))
    dispatch(getProfile(auth.token))
    // navigate('/')
  }

  const resendOtp = () => {
    dispatch(verifyUser(auth.token))
  }

  const inputFocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {

        e.target.form.elements[next].focus()
      }
    }
    else {     
        const next = e.target.tabIndex;
        if (next < 6) {
          e.target.form.elements[next].focus()
        }
    }
  }
  return (
    <>
      <Layout>
        <header className="header-forgot-password">
          <div className="header-content">
            <div className="container h-100">
              <div className="back-link py-5 d-flex align-items-center">
                <div className='clickAble d-flex align-items-center' onClick={() => this.goToLoginNext()}>
                  <div>
                    <Link to="/"><FaChevronLeft /></Link>
                  </div>
                  <div>&ensp;Back</div>
                </div>
              </div>
              <div className="main">
                <div className="d-flex flex-column align-items-center">
                  <div className="row">
                    <h1>Please enter the OTP</h1>
                  </div>         
                  {
                    auth.error &&
                    <div className="alert alert-danger fade show" role="alert">
                      <strong>{auth.errorMsg}</strong>
                    </div>
                  }
                  {
                    auth.message === "Your account has been verified" &&
                    <div className="alert alert-primary fade show" role="alert">
                      <strong>{auth.message}</strong>
                    </div>
                  }
                  { 
                    !auth.userData.is_verified &&
                    <>
                      <form className="mb-5" onSubmit={(e) => onSubmit(e)}>
                        <div className="row form-forgot mb-4">
                          <div className="input-group px-0">
                            <input type="number" name='otp1' autoComplete='off' className="form-control otp" max={9} min={0} maxLength={1} onChange={(e) => inputFocus(e)} tabIndex={1} />
                            <input type="number" name='otp2' autoComplete='off' className="form-control otp" max={9} min={0} maxLength={1} onChange={(e) => inputFocus(e)} tabIndex={2} />
                            <input type="number" name='otp3' autoComplete='off' className="form-control otp" max={9} min={0} maxLength={1} onChange={(e) => inputFocus(e)} tabIndex={3} />
                            <input type="number" name='otp4' autoComplete='off' className="form-control otp" max={9} min={0} maxLength={1} onChange={(e) => inputFocus(e)} tabIndex={4} />
                            <input type="number" name='otp5' autoComplete='off' className="form-control otp" max={9} min={0} maxLength={1} onChange={(e) => inputFocus(e)} tabIndex={5} />
                            <input type="number" name='otp6' autoComplete='off' className="form-control otp" max={9} min={0} maxLength={1} onChange={(e) => inputFocus(e)} tabIndex={6} />
                          </div>
                        </div>
                        <div className="row form-forgot">
                          <button className="btn-primary" type='submit'>Submit</button>
                        </div>
                      </form>
                      <div className="row text-center">
                        <span>
                          Please check your email for the OTP.<br/>If you haven't received any code, click <b
                            onClick={resendOtp}>This</b>.</span>
                      </div>
                    </>
                  }
                  {
                    auth.userData.is_verified &&
                    <div className="row text-center">
                        <span>
                          Your account has been verified!.<br/> Click <Link to="/">This</Link> to go to Homepage.</span>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </header>
      </Layout>
    </>
    
  )
}

export default VerifyUser