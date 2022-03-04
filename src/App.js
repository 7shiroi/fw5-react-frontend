import {createBrowserHistory} from 'history';
import Home from './pages/Home';
import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';

export const App = () => {
  const history = createBrowserHistory({window})
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if(token) {
      dispatch({
        type: "LOGIN_FULFILLED",
        payload: {
          data: {
            result: {
              token
            }
          }
        }
      })
      // dispatch(getDataUser(token))
    }
  }, [dispatch])

  return (
    <BrowserRouter history={history}>
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

export default App