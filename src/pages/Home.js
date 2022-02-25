import {default as axios} from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemContent from '../components/ItemContent'
import Layout from '../components/Layout'

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
                    <input className='form-control' type='text' name='search' placeholder='Searching for? (Vehicle name, location, color)' />
                  </div>
                  <div className='row mb-5'>
                    <div className='col-sm-6 px-0 pe-sm-2 mb-3'>
                      <select className='form-select' name="category">
                        <option className='d-none' value=''>Category</option>
                        {
                          category.map((obj) => (
                            <option key={obj.id} value={obj.id}>{obj.name}</option>
                          ))
                        }
                      </select>                          
                    </div>
                    <div className='col-sm-6 px-0 ps-sm-2'>
                      <input className='form-control' type="text" placeholder='Date' onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                    </div>
                  </div>
                  <button className='btn-primary' type='submit'>Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </header>
      <main className='py-5'>
          <div className='container'>
              <div className='row'>
                  <div className='col'>
                      <h2>Popular in Town</h2>
                  </div>
                  <div className='col text-end'>
                      <a href='#'>View All</a>
                  </div>
              </div>
              <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center'>
                {
                  popular.map((obj, idx) => (   
                  <ItemContent key={`items-${idx}`} image={obj.image} name={obj.name} location={obj.location} />
                ))
                }
              </div>
          </div>
      </main>
    </Layout>
  )
}

export default Home