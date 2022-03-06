import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { transaction as rentTransaction } from '../redux/actions/transaction'
import NumberFormat from 'react-number-format'
import Button from '../components/Button'


export const Payment = () => {
  const navigate = useNavigate()
  const [displayDate, setDisplayDate] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const auth = useSelector(state => state.auth)
  const transaction = useSelector(state => state.transaction)
  const detailVehicle = useSelector(state => state.detailVehicle)
  const dispatch = useDispatch()

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
      const start = new Date(transaction.reservationDate)
      const end = addDays(start, parseInt(transaction.rentDuration) - 1)
      console.log(start)
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

      if(start.getFullYear() === end.getFullYear()){
        if(start.getMonth() === end.getMonth()){
          if(start.getDate() === end.getDate()){
            setDisplayDate(`${months[start.getMonth()]} ${start.getDate()} ${start.getFullYear()}`)
          }else{
            setDisplayDate(`${months[start.getMonth()]} ${start.getDate()}-${end.getDate()} ${start.getFullYear()}`)
          }
        }else{
          setDisplayDate(`${months[start.getMonth()]} ${start.getDate()} - ${months[end.getMonth()]} ${end.getDate()} ${start.getFullYear()}`)
        }
      }else{
        setDisplayDate(`${months[start.getMonth()]} ${start.getDate()} ${start.getFullYear()} - ${months[end.getMonth()]} ${end.getDate()} ${end.getFullYear()}`)
      }
      setStartDate(`${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`)
      setEndDate(`${end.getFullYear()}-${end.getMonth()}-${end.getDate()}`)
    }
  }, [])

  const addDays = (date, days) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const onPayment = () => {
    const data = {
      id_user: auth.userData.id,
      id_vehicle: detailVehicle.data.id,
      quantity: transaction.quantity,
      date_start: startDate,
      date_end: endDate,
      prepayment: detailVehicle.data.has_prepayment ? detailVehicle.data.price*(20/100)*transaction.quantity*transaction.rentDuration : 0,
    }
    dispatch(rentTransaction(auth.token, data))
    navigate('/history')
  }

  return (
    <Layout>
      <main>
        <div className="container">
          <div className="back-link mb-5">
            <Link to="#"><FaChevronLeft className='back-black' /></Link>
            <div>&ensp;Payment</div>
          </div>
          <div className="row detail g-0 mb-3 d-flex justify-content-between align-items-center">
            <div className="detail-image col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start align-items-center">
              <img className="img-fluid" src={detailVehicle.data.image} alt="fixie-gray-yogyakarta" />
            </div>
            <div className="col-12 col-lg-7">
              <div className="mb-5">
                <h1 className="mb-4">{detailVehicle.data.name}</h1>
                <h3>{detailVehicle.data.location}</h3>
              </div>
              <div className="mb-5 status-gray">
                <h3>{detailVehicle.data.has_prepayment === 1 ? `Minimal Prepayment: Rp. ${Math.round(detailVehicle.data.price*(20/100)).toFixed(2)}` : 'No Prepayment'}</h3>
              </div>
              <div className="code-info mb-4">#FG1209878YZS</div>
              <button className="copy-code btn-primary">Copy booking code</button>
            </div>
          </div>
          <div className="transaction-info">
            <div className="row mb-4">
              <div className="col-12 col-lg-5 mb-4">
                <div className="qty">
                  <b>Quantity : {transaction.quantity} {transaction.quantity > 1 ? `${detailVehicle.data.category}s` : `${detailVehicle.data.category}`}</b>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="reservation-date">
                  <div><b>Reservation Date :</b></div>
                  <div>{displayDate}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="order-details mb-4">
                  <div><b>Order details:</b></div>
                  <div>1 {detailVehicle.data.category} : <NumberFormat isNumericString='true' value={(detailVehicle.data.price).toFixed(2)} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'}  prefix={"Rp. "} /></div>
                  <div><br/></div>
                  <div><b>Total : <NumberFormat isNumericString='true' value={(detailVehicle.data.price*transaction.quantity*transaction.rentDuration).toFixed(2)} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'}  prefix={"Rp. "} /></b></div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="identity">
                  <div><b>Identity :</b></div>
                  <div className="text-center">{auth.userData.name} ({auth.userData.phone_number})</div>
                  <div>{auth.userData.email}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pay-confirm w-100 my-5">
            <Button className="btn-primary" onClick={onPayment}>Finish payment in <span>59:30</span></Button>
          </div>
        </div>
      </main>
  </Layout>
  )
}

export default Payment