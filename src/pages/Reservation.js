import React, { useEffect } from 'react'
import NoImageIcon from '../assets/images/no-image-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import NumberFormat from 'react-number-format'
import { QuantityButtons } from '../components/QuantityButtons'
import { FaChevronLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setRentDuration, setReservationDate } from '../redux/actions/transaction'

export const Reservation = () => {
  const auth = useSelector(state => state.auth)
  const detailVehicle = useSelector(state => state.detailVehicle)
  const transaction = useSelector(state => state.transaction)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(()=> {
    if(!auth.token){
      if(window.localStorage.getItem('token')){
        navigate('/')
      }else{
        window.alert('Please login first')
        navigate('/login')
      }
    }else{
      window.scrollTo(0,0)
    }
  }, [])

  const updateRentDuration = (event) => {
    dispatch(setRentDuration(event.target.value))
  }

  const updateReservationDate = (event) => {
    dispatch(setReservationDate(event.target.value))
  }

  //todo: create form on inputs
  return (
    <>
      <Layout>
        <main>
          <div className="container">
            <div className="back-link mb-5">
              <Link to="#"><FaChevronLeft className='back-black' /></Link>
              <div>&ensp;Reservation</div>
            </div>
            <div className="row detail g-0 mb-3 d-flex justify-content-between align-items-center">
              <div className="detail-image col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center">
                <img className="img-fluid" src={detailVehicle.data.image || NoImageIcon} alt='vehicle' />
              </div>
              <div className="col-12 col-lg-6 px-lg-3">
                <div className="mb-4">
                  <h1 className="mb-4">{detailVehicle.data.name}</h1>
                  <h3>{detailVehicle.data.location}</h3>
                </div>
                <div className={detailVehicle.data.has_prepayment === 1 ? "status-true mb-3" : "status-false mb-3"}>
                  {detailVehicle.data.has_prepayment === 1 ? `Minimal Prepayment: Rp. ${Math.round(detailVehicle.data.price*(20/100)*transaction.quantity*transaction.rentDuration).toFixed(2)}` : 'No Prepayment'}
                </div>
                <div className='quantity mb-4'>
                  <QuantityButtons max={detailVehicle.data.stock} />
                </div>
                <div className="mb-4">
                  <p>Reservation date</p>
                  <input className='form-control mb-2' name='startDate' type="text" placeholder='Select Date' onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} onChange={updateReservationDate} required defaultValue={null} />
                  <select className='form-select' name='rentDuration' onChange={updateRentDuration}>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="4">4 Days</option>
                    <option value="5">5 Days</option>
                    <option value="6">6 Days</option>
                    <option value="7">7 Days</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <Link to="/payment" className='btn-primary payment'>Pay now: <NumberFormat isNumericString='true' value={(detailVehicle.data.price*transaction.quantity*transaction.rentDuration).toFixed(2)} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'}  prefix={"Rp. "} /> </Link>
            </div>
        </div>
      </main>
    </Layout>
    </>
    
  )
}

export default Reservation