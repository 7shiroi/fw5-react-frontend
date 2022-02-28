import logo from './logo.svg';
import { Button } from './components/QuantityButtons';
import Footer from './components/Footer';
import Home from './pages/Home';
import React, { Component } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VehicleType from './pages/VehicleType';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailVehicle from './pages/DetailVehicle';
import VehicleList from './pages/VehicleList';
import Reservation from './pages/Reservation';
import Payment from './pages/Payment';
import History from './pages/History';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';

export default class App extends Component {

  render() {
    // <div className="App">
    //   <header className="App-header">
    //       <Button initNumber={50} />
    //   </header>
    // </div>
    // return (
    //   <>
    //   { (this.state.showPage === 'Login' && !this.state.isLoggedIn) && <Login nextPage={(value)=>{this.setState({showPage: value})}} isLoggedIn={(value)=>{this.setState({isLoggedIn: value})}} /> }
    //   { (this.state.showPage === 'Home') && <Home isLoggedIn={this.state.isLoggedIn} /> }
    //   { (this.state.showPage === 'Register' && !this.state.isLoggedIn) && <Register nextPage={(value)=>{this.setState({showPage: value})}} /> }
    //   { (this.state.showPage === 'ForgotPassword' && !this.state.isLoggedIn) && <ForgotPassword nextPage={(value)=>{this.setState({showPage: value})}} /> }
    //   { (this.state.showPage === 'VehicleType' && !this.state.isLoggedIn) && <VehicleType isLoggedIn={this.state.isLoggedIn} nextPage={(value)=>{this.setState({showPage: value})}} /> }
    //   </>
    // )
    return (
      <BrowserRouter>
        <Routes>
            <Route path='*' element={<PageNotFound />} />

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/vehicle-type' element={<VehicleType />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/vehicle/:id' element={<DetailVehicle />} />
            <Route path='/vehicles/search' element={<VehicleList />} />
            <Route path='/vehicles/:category' element={<VehicleList />} />
            <Route path='/reservation/:id' element={<Reservation />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/history' element={<History />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    )
  }
}