import {default as axios} from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import ItemContent from '../components/ItemContent'
import NoImageIcon from '../assets/images/no-image-icon.png'
import Navbar from '../components/Navbar'
import { connect, useDispatch, useSelector } from 'react-redux'
import {getVehicles, getVehiclesNext} from '../redux/actions/vehicles'

export const VehicleList = () => {
  const {REACT_APP_LIMIT_ITEMS: limit} = process.env
  const {vehicles} = useSelector(state => state)
  const dispatch = useDispatch()

  const {category} = useParams()
  
  const [list, setList] = useState([])
  const [title, setTitle] = useState([])
  const [pageInfo, setPageInfo] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  const [responseStatus, setResponseStatus] = useState(null)
  const categoryList = useSelector(state => state.category.data)

  useEffect(() => {
    
    const search = searchParams.get('search')
    const isAvailable = searchParams.get('isAvailable')
    const hasPrepayment = searchParams.get('hasPrepayment')
    const sort = searchParams.get('sort')
    const order = searchParams.get('order')
    const idCategory = searchParams.get('idCategory')

    const data = {search, isAvailable, hasPrepayment, sort, order, idCategory}
    
    let queryString = ''
    for(const key in data) {
      if(data[key]){
        queryString += `&${key}=${data[key]}`
      }
    }
    
    if(search){
      document.getElementById('searchFilter').elements["search"].value = search
    }
    if(isAvailable){
      document.getElementById('searchFilter').elements["isAvailable"].value = isAvailable
    }
    if(hasPrepayment){
      document.getElementById('searchFilter').elements["hasPrepayment"].value = hasPrepayment
    }
    if(sort){
      document.getElementById('searchFilter').elements["sort"].value = sort
    }
    if(order){
      document.getElementById('searchFilter').elements["order"].value = order
    }
    if(idCategory){
      document.getElementById('searchFilter').elements["category"].value = idCategory
    }

    dispatch(getVehicles(category, queryString))
  }, [])

  
  const getNextData = async (url) => {
    dispatch(getVehiclesNext(url))
  }


  const onSearch = async(event)=>{
    event.preventDefault();
    const search = event.target.elements["search"].value
    const isAvailable = event.target.elements["isAvailable"].value
    const hasPrepayment = event.target.elements["hasPrepayment"].value
    const sort = event.target.elements["sort"].value
    const order = event.target.elements["order"].value
    const idCategory = event.target.elements["category"].value

    const data = {search, isAvailable, hasPrepayment, sort, order, idCategory}
    const queryString = '&'+JSON.stringify(data).replaceAll('"', "").replaceAll(',','&').replaceAll(':', '=').replaceAll(' ', '%20').replaceAll('{', '').replaceAll('}', '')
    setSearchParams(data)
    dispatch(getVehicles(category, queryString))
  }

  return (
    <>
      <Navbar />
      <main>
          <div className='container'>
            <section>
              <div className='row'>
                  <div className='col'>
                      <h2>Search</h2>
                  </div>
              </div>
              <section className='searchBar mb-5'>
                <form id='searchFilter' className='' onSubmit={onSearch}>
                  <div className='row mb-2'>
                    <input className='form-control' type="text" name="search" placeholder='Search by vehicle name / color / location' />
                  </div>
                  <div className='row mb-2'>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id='isAvailable' className='form-select' name="isAvailable" defaultValue={""}>
                        <option value="">Show All</option>
                        <option value="1">Available only</option>
                        <option value="0">Unavailable</option>
                      </select>
                      <label htmlFor="isAvailable">Availability</label>
                    </div>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id="hasPrepayment" className='form-select' name="hasPrepayment" defaultValue={""}>
                        <option value="">Show All</option>
                        <option value="0">No Prepayment</option>
                        <option value="1">Must prepay</option>
                      </select>
                      <label htmlFor="hasPrepayment">Prepayment</label>
                    </div>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id='sort' className='form-select' name="sort" defaultValue={"name"}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="location">Location</option>
                        <option value="capacity">Capacity</option>
                        <option value="stock">Stock</option>
                      </select>
                      <label htmlFor="sort">Sort by</label>
                    </div>
                    <div className='col-sm-6 col-md-3 form-floating'>
                      <select id="order" className='form-select' name="order" defaultValue={"asc"}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                      </select>
                      <label htmlFor="order">Order by</label>
                    </div>
                    <div className='col-12 form-floating'>
                      <select className='form-select vehicle-search' name="category">
                        <option className='d-none' value=''>Vehicle Type</option>
                        {
                          categoryList.map((obj) => (
                            <option key={obj.id} value={obj.id}>{obj.name}</option>
                          ))
                        }
                      </select>                          
                      <label htmlFor="category">Vehicle Type</label>
                    </div>  
                  </div>
                  <div className='row'>
                    <button className='btn-primary' type="submit">Search</button>
                  </div>
                </form>
              </section>
              <div className='row mb-3'>
                {
                  vehicles.data.map((obj, idx) => (   
                    <div key={obj.id} className='col-sm-6 col-md-4 col-lg-3'>
                      <Link to={`/vehicle/${obj.id}`}>
                        <ItemContent key={`items-${idx}`} image={obj.image || NoImageIcon} name={obj.name} location={obj.location} />
                      </Link>
                    </div>
                ))
                }
                {
                  responseStatus >= 400 &&
                  <div className='text-center'>
                    <h2>Oops! List not found</h2>
                  </div>
                }
              </div>
              {
                vehicles.pageInfo.next &&
                <div className='row d-flex justify-content-center'>
                  <button className='btn-primary' onClick={() => getNextData(vehicles.pageInfo.next)}>Load more</button>
                </div>
              }
            </section>
          </div>
      </main>
      <Footer />
    </>
  )
}

// const mapStateToProps = state => ({vehicles: state.vehicles})
// const mapDispatchToProps = {getVehicles}

// export default connect(mapStateToProps, mapDispatchToProps)(VehicleList)
export default VehicleList