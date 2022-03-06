import React from 'react'
import NoImageIcon from '../assets/images/no-image-icon.png'

export const historyItems = ({data}) => {
  return (
    <div className='row'>
      <div className="col-12 col-md-4">
        <img className="img-fluid" src={data.image || NoImageIcon} alt="vespa-matic" />
      </div>
      <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
        <div>
          <div><b>{data.vehicleName}</b></div>
          <div>{data.rentDate}</div>
        </div>
        <div>
          <div><b>{data.prepayment ? `Prepayment : Rp. ${data.prepayment}` : "No prepayment"}</b></div>
          <div className={data.has_returned ? "status-true-light" : "status-false-light"}>{data.has_returned ? "Has been returned" : "Not yet returned"}</div>
        </div>
      </div>
    </div>
  )
}
