import React, { Component } from 'react'

export default class ItemContent extends Component {
  render() {
    return (
        <div className='position-relative item-contents mb-3'>
          <div className='content-image'>
            <img className='img-fluid rounded' src={this.props.image} alt='content'/>
          </div>
          <div className='position-absolute bottom-0 start-0 bg-white content-details'>
            <div>{this.props.name}</div>
            <div>{this.props.location}</div>
          </div>
        </div>
    )
  }
}
