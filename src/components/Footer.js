import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer-content">
        <div className="container">
          <div className="abouts d-flex justify-content-between flex-wrap">
            <div className="about">
              <img className="logo" src={logo} alt="logo" />
              <p>Plan and book your perfect trip with
                expert advice, travel tips for vehicle
                information from us</p>
              <span>©2020 Vehicle Rental Center. All rights reserved</span>
            </div>
            <div className="links">
              <h5>Destination</h5>
              <ul>
                <li>Bali</li>
                <li>Yogyakarta</li>
                <li>Jakarta</li>
                <li>Kalimantan</li>
                <li>Malang</li>
              </ul>
            </div>
            <div className="links">
              <h5>Vehicle</h5>
              <ul>
                <li>Bikes</li>
                <li>Cars</li>
                <li>Motorbike</li>
                <li>Return Times</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="links">
              <h5>Interests</h5>
              <ul>
                <li>Adventure Travel</li>
                <li>Art and Culture</li>
                <li>Wildlife and Nature</li>
                <li>Family Holidays</li>
                <li>Culinary Trips</li>
              </ul>
            </div>
            <div className="break"></div>
          </div>
          <div className="d-flex justify-content-center socials">
              <FaTwitter className='social-icons' />
              <FaFacebookF className='social-icons' />
              <FaInstagram className='social-icons' />
              <FaLinkedinIn className='social-icons' />
              <FaYoutube className='social-icons' />
          </div>
        </div>
      </footer>
    )
  }
}
