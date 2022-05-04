import {default as axios} from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ItemContent from '../components/ItemContent'
import Navbar from '../components/Navbar'
import NoImageIcon from '../assets/images/no-image-icon.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getVehicles } from '../redux/actions/vehicles'

export const VehicleType = () => {
  const [popular, setPopular] = useState([])
  const [car, setCar] = useState([])
  const [motorbike, setMotorbike] = useState([])
  const [bike, setBike] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getPopular()
    getCar()
    getMotorbike()
    getBike()
  }, [])

  const getPopular = async () => {
    const result = await dispatch(getVehicles('popular', null, '4'))
    setPopular(result.value.data.result)
  }
  const getCar = async () => {
    const result = await dispatch(getVehicles('cars', null, '4'))
    setCar(result.value.data.result)
  }
  const getMotorbike = async () => {
    const result = await dispatch(getVehicles('motorbikes', null, '4'))
    setMotorbike(result.value.data.result)
  }
  const getBike = async () => {
    const result = await dispatch(getVehicles('bikes', null, '4'))
    setBike(result.value.data.result)
  }

  return (
    <>
      <Navbar />
      <main>
          <div className='container'>
            <section>
              <div className='row'>
                  <div className='col'>
                      <h2>Popular in Town</h2>
                  </div>
                  <div className='col text-end'>
                      <Link to='/vehicles/popular'>View More</Link>
                  </div>
              </div>
              <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                {
                  popular.map((obj, idx) => (   
                    <Link key={obj.id} to={`/vehicle/${obj.id}`}>
                      <ItemContent key={`items-${idx}`} image={obj.image || NoImageIcon} name={obj.name} location={obj.location} />
                    </Link>
                ))
                }
              </div>
            </section>
            <section>
              <div className='row'>
                  <div className='col'>
                      <h2>Cars</h2>
                  </div>
                  <div className='col text-end'>
                      <Link to='/vehicles/cars'>View More</Link>
                  </div>
              </div>
              <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                {
                  car.map((obj, idx) => (   
                    <Link key={obj.id} to={`/vehicle/${obj.id}`}>
                      <ItemContent key={`items-${idx}`} image={obj.image || NoImageIcon} name={obj.name} location={obj.location} />
                    </Link>
                ))
                }
              </div>
            </section>
            <section>
              <div className='row'>
                  <div className='col'>
                      <h2>Motorbikes</h2>
                  </div>
                  <div className='col text-end'>
                    <Link to='/vehicles/motorbikes'>View More</Link>
                  </div>
              </div>
              <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                {
                  motorbike.map((obj, idx) => (   
                  <Link key={obj.id} to={`/vehicle/${obj.id}`}>
                    <ItemContent key={`items-${idx}`} image={obj.image || NoImageIcon} name={obj.name} location={obj.location} />
                  </Link>
                ))
                }
              </div>
            </section>
            <section>
              <div className='row'>
                  <div className='col'>
                      <h2>Bikes</h2>
                  </div>
                  <div className='col text-end'>
                      <Link to='/vehicles/bikes'>View More</Link>
                  </div>
              </div>
              <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                {
                  bike.map((obj, idx) => (   
                    <Link key={obj.id} to={`/vehicle/${obj.id}`}>
                      <ItemContent key={`items-${idx}`} image={obj.image || NoImageIcon} name={obj.name} location={obj.location} />
                    </Link>
                ))
                }
              </div>
            </section>                
          </div>
      </main>
      <Footer />
    </>
  )
}

export default VehicleType