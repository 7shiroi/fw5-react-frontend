import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ProfileSamantha from '../assets/images/profile-samantha.png'
import EditIcon from '../assets/images/edit-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import NoProfilePicture from '../assets/images/no-profile-picture.png'
import { useNavigate } from 'react-router-dom'
import { editProfile, getProfile } from '../redux/actions/auth'
import { getHistories } from '../redux/actions/histories'

export const Profile = () => {
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(()=> {
    if(!auth.token){
      const token = window.localStorage.getItem('token')
      if(token){
        dispatch({
          type: "LOGIN_FULFILLED",
          payload: {
            data: {
              result: token
            }
          }
        })
        dispatch(getProfile(token))
        dispatch(getHistories(auth.token))
    }else{
        window.alert('Please login first')
        navigate('/login')
      }
    }
  }, [])

  const onEditProfile = (e) => {
    e.preventDefault()
    const email = e.target.elements['email'].value
    const address = e.target.elements['address'].value
    const phone_number = e.target.elements['phone_number'].value
    const username = e.target.elements['username'].value
    const birth_date = e.target.elements['birth_date'].value

    const data = {email, address, phone_number, username, birth_date}
    dispatch(editProfile(auth.token, data))
    window.scrollTo(0,0)
  }

  return (
    <Layout>
      <section className="container mb-5">
        <div className="profile-bio">
          <h2>Profile</h2>
          <div className="d-flex flex-column align-items-center">
            <div className="profile-picture row">
              <div className="d-relative">
                <img className="profile" src={auth.userData.picture ? auth.userData.picture : NoProfilePicture} alt="profile" />
                <div className="profile-edit">
                  <img className="edit-icon" src={EditIcon} alt="edit-icon" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1>{auth.userData.name}</h1>
              <p>{auth.userData.email}<br/>
                {auth.userData.phone_number}<br/>
                Has been active since {auth.userData.active_since}
              </p>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" checked={auth.userData.gender === "male" && 'checked'} />
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female"
                  checked={auth.userData.gender === "female" && 'checked'} />
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="profile-info" onSubmit={(e) => onEditProfile(e)}>
            <h5>Contacts</h5>
            <label htmlFor="email">Email Address :</label>
            <input className="form-control" name="email" type="text" defaultValue={auth.userData.email}  />
            <label htmlFor="address">Address :</label>
            <input className="form-control" name="address" type="text" defaultValue={auth.userData.address} />
            <label htmlFor="phone-number">Mobile Number :</label>
            <input className="form-control" name="phone_number" type="text" defaultValue={auth.userData.phone_number} />
            <div className="row">
              <h5>Identity</h5>
              <div className="identity d-flex justify-content-between">
                <div className="flex-grow-1 mx-5 ms-0">
                  <label htmlFor="diplay-name">Display name :</label>
                  <input className="form-control" name="username" type="text" defaultValue={auth.userData.username} />
                </div>
                <div className="flex-grow-1 mx-5 me-0">
                  <label htmlFor="date">DD/MM/YY :</label>
                  <input className="form-control" name="birth_date" type="text" defaultValue={auth.userData.birth_date} />
                </div>
              </div>
            </div>
            <div className="action-button-list d-flex justify-content-between button-list">
              <button className="btn btn-primary" type='submit'>Save Changes</button>
              <button className="btn-dark">Edit Password</button>
              <button className="">Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  
  )
}

export default Profile