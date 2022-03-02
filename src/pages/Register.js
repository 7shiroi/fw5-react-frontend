import React, { Component } from 'react'
import Footer from '../components/Footer'
import googleIcon from '../assets/images/google-login-icon.png'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', name: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  goToLoginNext () {
    this.props.nextPage("Login")
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
                  <form className="container-fluid">
                    <div>
                      <input id='name' className="mb-4" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChangeName} required />
                    </div>
                    <div>
                      <input id='email' className="mb-4" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} required />
                    </div>
                    <div>
                      <input className="mb-3" type="password" placeholder="Password"value={this.state.password} onChange={this.handleChangePassword} required />
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
}
