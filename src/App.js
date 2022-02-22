import logo from './logo.svg';
import './App.css';

import { Button } from './components/QuantityButtons';
import Footer from './components/Footer';
import Home from './pages/Home';
import React, { Component } from 'react';
import Login from './pages/Login';

export default class App extends Component {
  state = {
    showPage: 'Home',
    isLoggedIn: false,
  }

  render() {
    // <div className="App">
    //   <header className="App-header">
    //       <Button initNumber={50} />
    //   </header>
    // </div>
    return (
      <>
      { (this.state.showPage === 'Login' && !this.state.isLoggedIn) && <Login nextPage={(value)=>{this.setState({showPage: value})}} isLoggedIn={(value)=>{this.setState({isLoggedIn: value})}} /> }
      { (this.state.showPage === 'Home') && <Home isLoggedIn={this.state.isLoggedIn} /> }
      </>
    )
  }
}