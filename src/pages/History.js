import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import lamboSouthJkt from '../assets/images/image-main-content-lambo-south-jakarta.png'
import whiteJeepKalimantan from '../assets/images/image-main-content-white-jeep-kalimantan.png'
import vespaMatic from '../assets/images/history-vespa-matic.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getHistories } from '../redux/actions/histories'

export const History = () => {
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  const transaction = useSelector(state => state.transaction)
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
      dispatch(getHistories(auth.token))
    }
  }, [])
  return (
    <Layout>
      <main className="main-content">
        <div className="container">
          {
            transaction.message === "History data created" &&
            <div class="alert alert-primary" role="alert">
              Your transaction has been recorded
            </div>
          }
          <div className="row">
            <section className="col-12 col-xxl-8 d-flex flex-column justify-content-between px-5">
              <div className="row history">
                <div className="row g-0 history-filter mb-3">
                  <div className="col-10">
                    <input className="" type="text" name="search" placeholder="Search history" />
                  </div>
                  <div className="col-2 d-flex flex-column align-items-center">
                    <div>Delete</div>
                    <div>
                      <div className="delete-checker form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row history-filter mb-5">
                  <select className="form-select w-25" name="" id="">
                    <option className="d-none">Filter</option>
                    <option>Type</option>
                    <option>Date Added</option>
                    <option>Name</option>
                    <option>Favorite Product</option>
                  </select>
                </div>
                <div className="row g-0">
                  <div className="history-title mb-4">Today</div>
                </div>
                <div className="row g-0">
                  <div className="history-message col-10"><span>Please finish your payment for vespa for Vespa Rental
                      Jogja</span><i className="fa-solid fa-chevron-right"></i></div>
                  <div className="col-2">
                    <div className="delete-checker form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-0 mb-5">
                  <div className="history-message col-10"><span>Your payment has been confirmed!</span><i
                      className="fa-solid fa-chevron-right"></i></div>
                  <div className="col-2">
                    <div className="delete-checker form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-0 mb-4">
                  <div className="history-title">A week ago</div>
                </div>
                <div className="col-10 d-flex">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <img className="img-fluid" src={vespaMatic} alt="vespa-matic" />
                    </div>
                    <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
                      <div>
                        <div><b>Vespa Matic</b></div>
                        <div>Jan 18 to 21 2021</div>
                      </div>
                      <div>
                        <div><b>Prepayment : Rp. 245.000</b></div>
                        <div className="status-true-light">Has been returned</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="delete-checker form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <button className="delete-selected-button btn-primary width-100">Delete selected item</button>
              </div>
            </section>
            <section className="new-arrival col-12 col-xxl-4 mb-5">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="mt-5">New Arrival</h2>
                <div className="contents position-relative">
                  <div className="image">
                    <img className="img-fluid" src={lamboSouthJkt} alt="Lambo - South Jakarta" />
                  </div>
                  <div className="content-info-2">
                    <div><b>Lamborghini</b></div>
                    <div>South Jakarta</div>
                  </div>
                </div>
                <div className="contents position-relative">
                  <div className="image">
                    <img className="img-fluid" src={whiteJeepKalimantan} alt="White Jeep - Kalimantan" />
                  </div>
                  <div className="content-info-2">
                    <div><b>White Jeep</b></div>
                    <div>Kalimantan</div>
                  </div>
                </div>
                <div className="view-more d-flex flex-column align-items-center mb-2">
                  <div>View more</div>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default History