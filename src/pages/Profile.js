import React from 'react'
import Layout from '../components/Layout'
import ProfileSamantha from '../assets/images/profile-samantha.png'
import EditIcon from '../assets/images/edit-icon.png'

export const Profile = () => {
  return (
    <Layout>
      <section class="container mb-5">
        <div class="profile-bio">
          <h2>Profile</h2>
          <div class="d-flex flex-column align-items-center">
            <div class="profile-picture row">
              <div class="d-relative">
                <img class="profile" src={ProfileSamantha} alt="profile" />
                <div class="profile-edit">
                  <img class="edit-icon" src={EditIcon} alt="edit-icon" />
                </div>
              </div>
            </div>
            <div class="text-center">
              <h1>Samantha Doe</h1>
              <p>samanthadoe@mail.com<br/>
                +62833467823<br/>
                Has been active since 2013
              </p>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"
                  checked />
                <label class="form-check-label" for="inlineRadio2">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form class="profile-info">
            <h5>Contacts</h5>
            <label for="email">Email Address :</label>
            <input class="form-control" name="email" type="text" value="zulaikha17@gmail.com" />
            <label for="address">Address :</label>
            <input class="form-control" name="address" type="text" value="Iskandar Street no. 67 Block A Near Bus Stop" />
            <label for="phone-number">Mobile Number :</label>
            <input class="form-control" name="phone-number" type="text" value="(+62)813456782" />
            <div class="row">
              <h5>Identity</h5>
              <div class="identity d-flex justify-content-between">
                <div class="flex-grow-1 mx-5 ms-0">
                  <label for="diplay-name">Display name :</label>
                  <input class="form-control" name="diplay-name" type="text" value="zulaikha" />
                </div>
                <div class="flex-grow-1 mx-5 me-0">
                  <label for="date">DD/MM/YY :</label>
                  <input class="form-control" name="date" type="text" value="03/09/2003" />
                </div>
              </div>
            </div>
            <div class="action-button-list d-flex justify-content-between button-list">
              <button class="btn btn-primary">Save Changes</button>
              <button class="btn-dark">Edit Password</button>
              <button class="">Cancel</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Profile