import React from 'react'
import getDisplayDate from '../helpers/getDisplayDate'
import NoImageIcon from '../assets/images/no-image-icon.png'

export const HistoryItems = ({data}) => {
  return (
    <div className='row'>
      <div className="col-12 col-md-5">
        <img className="img-fluid" src={data.image || NoImageIcon} alt={data.vehicle_name} />
      </div>
      <div className="col-12 col-md-7 d-flex flex-column justify-content-between">
        <div>
          <div><b>{data.vehicle_name}</b></div>
          <div>{getDisplayDate(data.date_start, data.date_end)}</div>
        </div>
        <div>
          <div><b>{data.prepayment ? `Prepayment : Rp. ${data.prepayment}` : "No prepayment"}</b></div>
          <div className={data.has_returned ? "status-true-light" : "status-false-light"}>{data.has_returned ? "Has been returned" : "Not yet returned"}</div>
        </div>
      </div>
    </div>
  )
}

export default HistoryItems