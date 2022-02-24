import {default as axios} from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import ItemContent from '../components/ItemContent'
import NoImageIcon from '../assets/images/no-image-icon.png'
import Navbar from '../components/Navbar'

export const VehicleList = () => {
  const {category} = useParams()
  
  const [list, setList] = useState([])
  const [title, setTitle] = useState([])
  const [pageInfo, setPageInfo] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();

  const makeUrl = (queryParams) => {
    let url = ""
    if (category === 'popular'){
      url = "http://localhost:5000/vehicle/popular?limit=8"
      setTitle("Popular in Town List")
    }else if (category === 'cars') {
      url = "http://localhost:5000/vehicle/category/1?limit=8"
      setTitle("Cars List")
    }else if (category === 'motorbikes') {
      url = "http://localhost:5000/vehicle/category/3?limit=8"
      setTitle("Motorbikes List")
    }else if (category === 'bikes') {
      url = "http://localhost:5000/vehicle/category/2?limit=8"
      setTitle("Bikes List")
    }
    
    if(queryParams){
      url += queryParams
    }
    return url
  }

  useEffect(() => {
    const search = searchParams.get('search')
    const isAvailable = searchParams.get('isAvailable')
    const hasPrepayment = searchParams.get('hasPrepayment')
    const sort = searchParams.get('sort')
    const order = searchParams.get('order')

    const data = {search, isAvailable, hasPrepayment, sort, order}
    
    let queryString = ''
    for(const key in data) {
      if(data[key]){
        queryString += `&${key}=${data[key]}`
      }
    }
    
    const url = makeUrl(queryString)

    getList(url)
  }, [])

  const getList = async (url) => {
    const {data} = await axios.get(url)
    setList(data.result)
    setPageInfo(data.pageinfo)
  }
  
  const getNextData = async (url) => {
    const {data} = await axios.get(url)
    
    setList([
        ...list,
        ...data.result
    ])
    setPageInfo(data.pageinfo)
  }

  const onSearch = async(event)=>{
    event.preventDefault();
    const search = event.target.elements["search"].value
    const isAvailable = event.target.elements["isAvailable"].value
    const hasPrepayment = event.target.elements["hasPrepayment"].value
    const sort = event.target.elements["sort"].value
    const order = event.target.elements["order"].value

    const data = {search, isAvailable, hasPrepayment, sort, order}
    const queryString = '&'+JSON.stringify(data).replaceAll('"', "").replaceAll(',','&').replaceAll(':', '=').replaceAll(' ', '%20').replaceAll('{', '').replaceAll('}', '')
    const url = makeUrl(queryString)
    setSearchParams(data)
    await getList(url)
  }

  return (
    <>
      <Navbar />
      <main>
          <div className='container'>
            <section>
              <div className='row'>
                  <div className='col'>
                      <h2>{title}</h2>
                  </div>
              </div>
              <div>
                <form className='' onSubmit={onSearch}>
                  <div className='row mb-2'>
                    <input className='form-control' type="text" name="search" placeholder='Search by vehicle name / color / location' />
                  </div>
                  <div className='row mb-2'>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id='isAvailable' className='form-select' name="isAvailable">
                        <option selected value="">Show All</option>
                        <option value="1">Available only</option>
                        <option value="0">Unavailable</option>
                      </select>
                      <label for="isAvailable">Availability</label>
                    </div>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id="hasPrepayment" className='form-select' name="hasPrepayment">
                        <option selected value="">Show All</option>
                        <option value="0">No Prepayment</option>
                        <option value="1">Must prepay</option>
                      </select>
                      <label for="hasPrepayment">Prepayment</label>
                    </div>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id='sort' className='form-select' name="sort">
                        <option selected value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="location">Location</option>
                        <option value="capacity">Capacity</option>
                        <option value="stock">Stock</option>
                      </select>
                      <label for="sort">Sort by</label>
                    </div>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id="order" className='form-select' name="order">
                        <option selected value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                      </select>
                      <label for="order">Order by</label>
                    </div>
                  </div>
                  <div className='row'>
                    <button className='btn-primary' type="submit">Search</button>
                  </div>
                </form>
              </div>
              <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                {
                  list.map((obj, idx) => (   
                    <Link to={`/vehicle/${obj.id}`}>
                      <ItemContent key={`items-${idx}`} image={obj.image || NoImageIcon} name={obj.name} location={obj.location} />
                    </Link>
                ))
                }
              </div>
              {
                pageInfo.next &&
                <div className='row d-flex justify-content-center'>
                  <button className='btn-primary' onClick={() => getNextData(pageInfo.next)}>Load more</button>
                </div>
              }
            </section>
          </div>
      </main>
      <Footer />
    </>
  )
}


export default VehicleList