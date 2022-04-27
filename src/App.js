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
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './redux/actions/auth';
import VerifyUser from './pages/VerifyUser';
import ResetPassword from './pages/ResetPassword';
import AddItem from './pages/Admin/AddItem';
import { getCategory } from './redux/actions/category';

export const App = () => {
  const auth = useSelector(state => state.auth)
  const history = createBrowserHistory({window})
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if(token && auth.token === null) {
      dispatch({
        type: "LOGIN_FULFILLED",
        payload: {
          data: {
            result: token
          }
        }
      })
      dispatch(getProfile(token))
    }
  }, [dispatch])

  useEffect(() => {
    if (category.data.length === 0) {
      dispatch(getCategory())
    }
  }, [])

  return (
    <BrowserRouter history={history}>
      <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/vehicle-type' element={<VehicleType />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/vehicle/:id' element={<DetailVehicle />} />
          <Route path='/vehicles/search' element={<VehicleList />} />
          <Route path='/vehicles/:category' element={<VehicleList />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/verify-user' element={<VerifyUser />} />
          <Route path='/admin/add-vehicle' element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App