import React, { Component } from 'react'
import Footer from '../components/Footer'
import googleIcon from '../assets/images/google-login-icon.png'
import { Link, Navigate } from 'react-router-dom';
import Button from '../components/Button';
import {login as LoginDispatch} from '../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux';

export const Login = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements["username"].value
    const password = e.target.elements["password"].value

    dispatch(LoginDispatch(username,password))
  }
  return (
    <>
    {console.log(auth)}
      {auth.token!==null && <Navigate to="/" />}
      <header className="login-header">
        <div className="darken-bg">
          <div className="container h-100">
            <div className="auth-contents d-flex justify-content-between h-100">
              <div className="intro">
                <h1 className="pt-5 mt-5">Let's Explore<br />The World</h1>
                <div className="other-action-xl">
                  <p className="mt-5">Don't have account?</p>
                  <Link className="mt-3" to="/register"><Button className="btn other-action-btn btn-dark">Sign Up</Button></Link>
                </div>
              </div>
              <div className="container-fluid other-action d-none">
                <p className="mt-5">Don't have account?</p>
                  <Link className="mt-3" to="/register"><Button className="btn other-action-btn btn-dark">Sign Up</Button></Link>
              </div>
              <div className="separation-line h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="white-dot"></div>
                <div className="white-line"></div>
                <div className="white-dot"></div>
              </div>
              <div className="d-flex flex-column h-100 justify-content-center login-info">
                <form className="container-fluid" onSubmit={(e) => handleSubmit(e)}>
                  {
                    auth.error &&
                    <div className="alert alert-danger fade show" role="alert">
                      <strong>{auth.errorMsg}</strong>
                    </div>
                  }
                  <div>
                    <input id='username' name='username' className="mb-4" type="text" placeholder="Username" required />
                  </div>
                  <div>
                    <input className="mb-3" name='password' type="password" placeholder="Password" required />
                  </div>
                  <div>
                    <Link className="mb-5 d-block" to="/forgot-password">Forgot password?</Link>
                  </div>
                  <div>
                    <Button disabled={auth.isLoading} className="btn-auth-action btn-primary mb-4" type="submit">Login</Button>
                  </div>
                  <div>
                    <Button className="btn-auth-action btn-login-google">
                      <img className="google-login-icon" src={googleIcon} alt="google-login-icon" /> Login with Google
                    </Button>
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

export default Login