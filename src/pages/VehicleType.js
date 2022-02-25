import {default as axios} from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ItemContent from '../components/ItemContent'
import Navbar from '../components/Navbar'
import NoImageIcon from '../assets/images/no-image-icon.png'
import { Link } from 'react-router-dom'

export const VehicleType = () => {
  const [popular, setPopular] = useState([])
  const [car, setCar] = useState([])
  const [motorbike, setMotorbike] = useState([])
  const [bike, setBike] = useState([])

  useEffect(() => {
    getPopular()
    getCar()
    getMotorbike()
    getBike()
  }, [])

  const getPopular = async () => {
    const {data} = await axios.get('http://localhost:5000/vehicle/popular?limit=4')
    setPopular(data.result)
  }
  const getCar = async () => {
    const {data} = await axios.get('http://localhost:5000/vehicle/category/1?limit=4')
    setCar(data.result)
  }
  const getMotorbike = async () => {
    const {data} = await axios.get('http://localhost:5000/vehicle/category/3?limit=4')
    setMotorbike(data.result)
  }
  const getBike = async () => {
    const {data} = await axios.get('http://localhost:5000/vehicle/category/2?limit=4')
    setBike(data.result)
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