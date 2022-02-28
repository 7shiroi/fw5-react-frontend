import {default as axios} from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemContent from '../components/ItemContent'
import Layout from '../components/Layout'
import {FaStar} from 'react-icons/fa'
import testimonyImage from '../assets/images/image-main-content-testimonial-user.png'

export const Home = () => {
  const [popular, setPopular] = useState([])
  const [category, setCategory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getPopular();
    getCategory();
  }, [])

  const getPopular = async () => {
    const {data} = await axios.get('http://localhost:5000/vehicle/popular?limit=4')
    setPopular(data.result)
  }
  const getCategory = async () => {
    const {data} = await axios.get('http://localhost:5000/category')
    setCategory(data.result)
  }

  const onSearch = async(event)=>{
    event.preventDefault();
    const search = event.target.elements["search"].value
    const category = event.target.elements["category"].value
    const data={search, category}
    const queryString = JSON.stringify(data).replaceAll('"', "").replaceAll(',','&').replaceAll(':', '=').replaceAll(' ', '%20').replaceAll('{', '').replaceAll('}', '')
    console.log(queryString)
    navigate(`/vehicles/search?${queryString}`)
  }

  return (
    <Layout >
      <header className='home-header'>
        <div className='header-content h-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-5'>
                <h1 className='display-2 py-5'><strong>Explore and<br/>Travel</strong></h1>
                <p className='mb-3'>Vehicle Finder</p>
                <div className='white-line mb-5'></div>
                <form onSubmit={onSearch}>
                  <div className='row mb-3'>
                    <input className='form-control vehicle-search' type='text' name='search' placeholder='Searching for? (Vehicle name, location, color)' />
                  </div>
                  <div className='row mb-5'>
                    <div className='col-sm-6 px-0 pe-sm-2 mb-3'>
                      <select className='form-select vehicle-search' name="category">
                        <option className='d-none' value=''>Vehicle Type</option>
                        {
                          category.map((obj) => (
                            <option key={obj.id} value={obj.id}>{obj.name}</option>
                          ))
                        }
                      </select>                          
                    </div>
                    <div className='col-sm-6 px-0 ps-sm-2'>
                      <input className='form-control vehicle-search' type="text" placeholder='Date' onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                    </div>
                  </div>
                  <div className='w-100 d-flex justify-content-center justify-content-sm-start'>
                    <button className='vehicle-search btn-primary' type='submit'>Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </header>
      <main className='py-5'>
          <div className='container'>
            <section className='popular mb-4'>
              <div className='row'>
                  <div className='col'>
                      <h2>Popular in Town</h2>
                  </div>
                  <div className='col text-end'>
                  <Link to='/vehicles/popular'>View All</Link>
                  </div>
              </div>
              <div className='row text-center'>
                  {
                    popular.map((obj, idx) => (   
                      <div className='col-sm-6 col-lg-3'>
                        <Link key={obj.id} to={`/vehicle/${obj.id}`}>
                          <ItemContent key={`items-${idx}`} image={obj.image} name={obj.name} location={obj.location} />
                        </Link>
                      </div>
                    ))
                  }
              </div>
            </section>
            <section className='testimony'>
              <div className='row'>
                <h2>Testimonials</h2>
              </div>
              <div className='row'>
                <div className='col-sm-6 order-2 order-sm-1 d-flex flex-column justify-content-center'>
                  <div className='align-self-center align-self-sm-start mb-3'>
                    <FaStar className='star star-on' />
                    <FaStar className='star star-on' />
                    <FaStar className='star star-on' />
                    <FaStar className='star star-on' />
                    <FaStar className='star star-on' />
                  </div>
                  <div>
                    <blockquote className='blockquote mb-3'>
                      <p>”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
                    </blockquote>
                  </div>
                  <div>
                    <strong>Edward Newgate</strong>
                  </div>
                  <div>
                    <small>Founder Circle</small>
                  </div>
                </div>
                <div className='col-sm-6 order-1 order-sm-2 d-flex justify-content-center justify-content-sm-end mb-3'>
                  <img className='img-fluid rounded' src={testimonyImage} alt='testimony-user'/>
                </div>
              </div>

            </section>
          </div>
      </main>
    </Layout>
  )
}

export default Home