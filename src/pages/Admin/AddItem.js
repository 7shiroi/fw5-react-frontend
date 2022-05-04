import React, { useRef, useState } from 'react'
import Layout from '../../components/Layout'
import {FaChevronLeft} from 'react-icons/fa'
import {MdPhotoCamera} from 'react-icons/md'
import {IoMdCloseCircleOutline} from 'react-icons/io'
import InputField from '../../components/InputField'
import QuantityInput from '../../components/QuantityInput'
import { useDispatch, useSelector } from 'react-redux'
import { checkPriceFormat } from '../../helpers/validator'
import { addVehicle } from '../../redux/actions/vehicles'

function AddItem() {
  const [errorMsg, setErrorMsg] = useState(null)
  const category = useSelector(state => state.category.data)
  const [image, setImage] = useState(null)
  const [tempImage, setTempImage] = useState(null)
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState(0)
  const [capacity, setCapacity] = useState(1)
  const [isAvailable, setIsAvailable] = useState(null)
  const [hasPrepayment, setHasPrepayment] = useState(null)
  const [idCategory, setIdCategory] = useState(null)
  const hiddenFileInput = useRef(null)
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)

  const handleSubmit = () => {
    setErrorMsg(null)
    if (name.trim().length === 0) {
      setErrorMsg('Name cannot be empty')
    } else if (color.trim().length === 0) {
      setErrorMsg('Color cannot be empty')
    } else if (location.trim().length === 0) {
      setErrorMsg('Location cannot be empty')
    } else if (price.trim().length === 0) {
      setErrorMsg('Price cannot be empty')
    } else if (!checkPriceFormat(price)) {
      setErrorMsg('Invalid price format')
    } else if (idCategory === null) {
      setErrorMsg('Please Select category')
    } else {
      const data = {
        name, 
        color, 
        location,
        price, 
        stock, 
        capacity, 
        image, 
        is_available: isAvailable, 
        has_prepayment: hasPrepayment, 
        id_category: idCategory,
      }
      dispatch(addVehicle(token, data))
    }
  }
  
  const uploadFile = () => {
    hiddenFileInput.current.click()
  }
  const fileInputHandler = async (e) => {
    const reader = new FileReader();
    const uploadedImage = e.target.files[0];

    reader.readAsDataURL(uploadedImage);

    reader.onload = (e) => {
      setTempImage(e.target.result);
    };
    
    setImage(uploadedImage)
  };

  const clearImage = () => {
    setTempImage(null)
    setImage(null)
  }

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='d-flex flex-row align-items-center'>
            <FaChevronLeft size={24} className='important' />
            <div className='gap5 important' />
            <h2  className='important'>Add new Item</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='bg-gray addItemContainer rounded-3'>
              {tempImage ? 
                <div className='position-relative h-100 d-flex justify-content-center align-items-center'>
                    <img src={tempImage} alt='vehicle' className='img-fluid addItemContainer' />
                  <div className='position-absolute top-0 end-0 important' onClick={clearImage}><IoMdCloseCircleOutline size={24} /></div>
                </div>
              :
                <div className='addItemContainer d-flex flex-column justify-content-center align-items-center'>
                  <MdPhotoCamera size={64} className='important' onClick={uploadFile} />
                  <div className='important' onClick={uploadFile} >Click to add Image</div>
                  <input 
                    className='d-none'
                    ref={hiddenFileInput} 
                    type='file' 
                    accept='image'
                    onChange={(e) => fileInputHandler(e)} />
                </div>
              }
            </div>
          </div>
          <div className='col-lg-6'>
            <InputField placeholder='Name' variant='underlined' style='mb-3' onChange={(e) => setName(e.target.value)} />
            <InputField placeholder='Color' variant='underlined' style='mb-3' onChange={(e) => setColor(e.target.value)} />
            <InputField placeholder='Location' variant='underlined' style='mb-3' onChange={(e) => setLocation(e.target.value)} />
            <h4>Price :</h4>
            <InputField placeholder='Type the price' style='mb-3' inputType='price' onChange={(e) => setPrice(e.target.value)} />
            <h4>Category :</h4>
            <select className='form-select mb-3' onChange={(e) => setIdCategory(e.target.value)}>
              <option className='d-none'>Select Category</option>
              {category.map((obj) => <option key={obj.id} value={obj.id}>{obj.name}</option>)}
            </select>
            <h4>Status :</h4>
            <select className='form-select mb-3' onChange={(e) => setIsAvailable(e.target.value)}>
              <option className='d-none'>Select Status</option>
              <option value={1}>Available</option>
              <option value={0}>Full Booked</option>
            </select>
            <h4>Prepayment :</h4>
            <select className='form-select mb-3' onChange={(e) => setHasPrepayment(e.target.value)}>
              <option className='d-none'>Select Prepayment</option>
              <option value={1}>Mandatory</option>
              <option value={0}>No Prepayment</option>
            </select>
            <div className='d-flex flex-row align-items-center justify-content-between mb-3'>
              <h4>Stock :</h4>
              <QuantityInput initialValue={stock} onChange={(e) => setStock(e.target.value)} />  
            </div>
            <div className='d-flex flex-row align-items-center justify-content-between mb-3'>
              <h4>Capacity :</h4>
              <QuantityInput initialValue={capacity} minimal={1} maximal={10} onChange={(e) => setCapacity(e)} />  
            </div>
          </div>
        </div>
        <div className='row'>
          {errorMsg && 
            <div className="alert alert-danger text-center" role="alert">
              {errorMsg}
            </div>
          }
          <div className='d-grid'>
            <button className='btn btn-primary' onClick={handleSubmit}>Add Item</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddItem