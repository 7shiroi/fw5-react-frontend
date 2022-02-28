import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PageNotFound extends Component {
  render() {
    return (
      <div className='vh-100 container-flud d-flex flex-column align-items-center justify-content-center'>
        <h2>Ooops! The page you're looking for is not found!</h2>
        <p>Click <Link to="/">this</Link> to go to Home page</p>
      </div>
    )
  }
}
