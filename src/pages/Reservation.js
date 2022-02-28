import {default as axios} from 'axios'
import React, { useEffect, useState } from 'react'
import NoImageIcon from '../assets/images/no-image-icon.png'
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import NumberFormat from 'react-number-format'
import { QuantityButtons } from '../components/QuantityButtons'
import { FaChevronLeft } from 'react-icons/fa'

export const Reservation = () => {
  const {id} = useParams()
  const [detailData, setDetailData] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [rentDuration, setRentDuration] = useState(1)
  
  useEffect(()=> {
    window.scrollTo(0,0)
    getDetailData()
  }, [])
  const getDetailData = async () => {
    const {data} = await axios.get(`http://localhost:5000/vehicle/${id}`)
    setDetailData(data.result)
  }

  return (
    <Layout>
      <main>
        <div className="container">
          <div className="back-link mb-5">
            <Link to="#"><FaChevronLeft className='back-black' /></Link>
            <div>&ensp;Reservation</div>
          </div>
          <div className="row detail g-0 mb-3 d-flex justify-content-between align-items-center">
            <div className="detail-image col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center">
              <img className="img-fluid" src={detailData.image || NoImageIcon} alt='vehicle' />
            </div>
            <div className="col-12 col-lg-6 px-lg-3">
              <div className="mb-4">
                <h1 className="mb-4">{detailData.name}</h1>
                <h3>{detailData.location}</h3>
              </div>
              <div className={detailData.has_prepayment === 1 ? "status-true mb-3" : "status-false mb-3"}>
                {detailData.has_prepayment === 1 ? `Minimal Prepayment: Rp. ${Math.round(detailData.price*(20/100)).toFixed(2)}/day` : 'No Prepayment'}
              </div>
              <div className='quantity mb-4'>
                <QuantityButtons initNumber={quantity} max={detailData.stock} currentNumber={(value) => setQuantity(value)} />
              </div>
              <div className="mb-4">
                <p>Reservation date</p>
                <input className='form-control mb-2' name='startDate' type="text" placeholder='Select Date' onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                <select className='form-select' name='rentDuration' onChange={(e) => setRentDuration(e.target.value)}>
                  <option value="1">1 Day</option>
                  <option value="2">2 Day</option>
                  <option value="3">3 Day</option>
                  <option value="4">4 Day</option>
                  <option value="5">5 Day</option>
                  <option value="6">6 Day</option>
                  <option value="7">7 Day</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <button className='btn-primary payment'>Pay now: <NumberFormat value={detailData.price*quantity*rentDuration} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={"Rp. "} /> </button>
          </div>
      </div>
    </main>
  </Layout>
  )
}

export default Reservation