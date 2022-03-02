import React, { Component } from 'react'
import Footer from '../components/Footer'
import googleIcon from '../assets/images/google-login-icon.png'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.email === 'admin@mail.com' && this.state.password === '1234') {
      this.props.nextPage("Home")
      this.props.isLoggedIn(true)
    }else {
      alert('Invalid Credential')
    }
    event.preventDefault();
  }

  goToRegisterNext() {
    this.props.nextPage("Register")
  }
  goToForgotPasswordNext() {
    this.props.nextPage("ForgotPassword")
  }

  render() {
    return (
      <>
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
                  <form className="container-fluid" onSubmit={this.handleSubmit}>
                    <div>
                      <input id='email' className="mb-4" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} required />
                    </div>
                    <div>
                      <input className="mb-3" type="password" placeholder="Password"value={this.state.password} onChange={this.handleChangePassword} required />
                    </div>
                    <div>
                      <Link className="mb-5 d-block" to="/forgot-password">Forgot password?</Link>
                    </div>
                    <div>
                      <Button className="btn-auth-action btn-primary mb-4" type="submit">Login</Button>
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
}
