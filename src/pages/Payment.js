import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import fixieGrayYogya from '../assets/images/image-main-content-fixie-gray-yogyakarta.png'


export const Payment = () => {
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
              <img className="img-fluid" src={fixieGrayYogya} alt="fixie-gray-yogyakarta" />
            </div>
            <div className="col-12 col-lg-7">
              <div className="mb-5">
                <h1 className="mb-4">Fixie - Gray Only</h1>
                <h3>Yogyakarta</h3>
              </div>
              <div className="mb-5 status-gray">
                No Prepayment
              </div>
              <div className="code-info mb-4">#FG1209878YZS</div>
              <button className="copy-code btn-primary">Copy booking code</button>
            </div>
          </div>
          <div className="transaction-info">
            <div className="row mb-4">
              <div className="col-12 col-lg-5 mb-4">
                <div className="qty">
                  <b>Quantity : 2 bikes</b>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="reservation-date">
                  <div><b>Reservation Date :</b></div>
                  <div>Jan 18 - 20 2021</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="order-details mb-4">
                  <div><b>Order details:</b></div>
                  <div>1 bike : Rp. 78.000</div>
                  <div>1 bike : Rp. 78.000</div>
                  <div><br/></div>
                  <div><b>Total : 178.000</b></div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="identity">
                  <div><b>Identity :</b></div>
                  <div className="text-center">Samantha Doe (+6290987682)</div>
                  <div>samanthadoe@mail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pay-confirm w-100 my-5">
            <button className="btn-primary" onclick="location.href='/history'">Finish payment in <span>59:30</span></button>
          </div>
        </div>
      </main>
  </Layout>
  )
}

export default Payment