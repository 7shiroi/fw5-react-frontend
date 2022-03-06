import React from 'react'
import Footer from '../components/Footer'
import googleIcon from '../assets/images/google-login-icon.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/auth';

export const Register = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onRegister = (event) => {
    event.preventDefault()
    const name = event.target.elements["name"].value
    const username = event.target.elements["username"].value
    const email = event.target.elements["email"].value
    const password = event.target.elements["password"].value
    const confirmPassword = event.target.elements["confirmPassword"].value

    const data = {
      name, username, email, password, confirmPassword,
    }

    dispatch(register(data))
    navigate('/login')
  }

  return (
    <>
      {auth.token && <Navigate to="/" />}
        <header className="login-header">
          <div className="darken-bg">
            <div className="container h-100">
              <div className="auth-contents d-flex justify-content-between h-100">
                <div className="intro">
                  <h1 className="pt-5 mt-5">Let's Explore<br />The World</h1>
                  <div className="other-action-xl">
                    <p className="mt-5">Already have account?</p>
                      <Link className="mt-3" to="/login"><Button className="btn other-action-btn btn-dark">Login</Button></Link>
                  </div>
                </div>
                <div className="container-fluid other-action d-none">
                  <p className="mt-5">Already have account?</p>
                  <Link className="mt-3" to="/login"><Button className="btn other-action-btn btn-dark">Login</Button></Link>
                </div>
                <div className="separation-line h-100 d-flex flex-column justify-content-center align-items-center">
                  <div className="white-dot"></div>
                  <div className="white-line"></div>
                  <div className="white-dot"></div>
                </div>
                <div className="d-flex flex-column h-100 justify-content-center login-info">
                  <form className="container-fluid" onSubmit={(e) => onRegister(e)} >
                    <div>
                      <input name='name' className="mb-4" type="text" placeholder="Name" required />
                    </div>
                    <div>
                      <input name='username' className="mb-4" type="text" placeholder="Username" required />
                    </div>
                    <div>
                      <input name='email' className="mb-4" type="email" placeholder="Email" required />
                    </div>
                    <div>
                      <input name='password' className="mb-4" type="password" placeholder="Password" required />
                    </div>
                    <div>
                      <input name='confirmPassword' className="mb-4" type="password" placeholder="Confirm Password" required />
                    </div>
                    <div>
                      <button className="btn-auth-action btn-primary mb-4" type="submit">Sign Up</button>
                    </div>
                    <div>
                      <button className="btn-auth-action btn-login-google">
                        <img className="google-login-icon" src={googleIcon} alt="google-login-icon" /> Login with Google
                      </button>
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

export default Register