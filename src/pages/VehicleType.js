import React, { Component } from 'react'
import Footer from '../components/Footer'
import ItemContent from '../components/ItemContent'
import Navbar from '../components/Navbar'
import ImageContentMerapi from '../assets/images/image-main-content-merapi-yogyakarta.png'
import ImageContentBromo from '../assets/images/image-main-content-bromo-malang.png'
import ImageContentTelukBogam from '../assets/images/image-main-content-teluk-bogam-kalimantan.png'
import ImageContentMalioboro from '../assets/images/image-main-content-malioboro-yogyakarta.png'
import ImageContentVan from '../assets/images/image-main-content-van-yogyakarta.png'
import ImageContentLambo from '../assets/images/image-main-content-lambo-south-jakarta.png'
import ImageContentJeep from '../assets/images/image-main-content-jeep-malang.png'
import ImageContentWhiteJeep from '../assets/images/image-main-content-white-jeep-kalimantan.png'
import ImageContentVespa from '../assets/images/image-main-content-vespa-yogyakarta.png'
import ImageContentHondaKLX from '../assets/images/image-main-content-hondaklx-kalimantan.png'
import ImageContentHonda from '../assets/images/image-main-content-honda-malang.png'
import ImageContentMaticBike from '../assets/images/image-main-content-matic-bike-yogyakarta.png'
import ImageContentFixie from '../assets/images/image-main-content-fixie-yogyakarta.png'
import ImageContentSportBike from '../assets/images/image-main-content-sport-bike-kalimantan.png'
import ImageContentOnthel from '../assets/images/image-main-content-onthel-malang.png'
import ImageContentFixieGray from '../assets/images/image-main-content-fixie-gray-yogyakarta.png'


export default class VehicleType extends Component {
  state = {
    itemsPopular: [
      {name: "Merapi", location: "Yogyakarta", image: ImageContentMerapi},
      {name: "Teluk Bogam", location: "Kalimantan", image: ImageContentTelukBogam},
      {name: "Bromo", location: "Malang", image: ImageContentBromo},
      {name: "Malioboro", location: "Yogyakarta", image: ImageContentMalioboro},
    ],
    itemsCar: [
      {name: "Van", location: "Yogyakarta", image: ImageContentVan},
      {name: "Lambhorgini", location: "South Jakarta", image: ImageContentLambo},
      {name: "Jeep", location: "Malang", image: ImageContentJeep},
      {name: "White Jeep", location: "Kalimantan", image: ImageContentWhiteJeep},
    ],
    itemsMotorbike: [
      {name: "Vespa", location: "Yogyakarta", image: ImageContentVespa},
      {name: "Honda KLX", location: "Kalimantan", image: ImageContentHondaKLX},
      {name: "Honda", location: "Malang", image: ImageContentHonda},
      {name: "Matic Bike", location: "Yogyakarta", image: ImageContentMaticBike},
    ],
    itemsBike: [
      {name: "Fixie", location: "Yogyakarta", image: ImageContentFixie},
      {name: "Sport Bike", location: "Kalimantan", image: ImageContentSportBike},
      {name: "Onthel", location: "Malang", image: ImageContentOnthel},
      {name: "Fixie Gray", location: "Yogyakarta", image: ImageContentFixieGray},
    ],
  }
  render() {
    return (
      <>
        <Navbar isLoggedIn={this.props.isLoggedIn} />
        <main>
            <div className='container'>
              <section>
                <div className='row'>
                    <div className='col'>
                        <h2>Popular in Town</h2>
                    </div>
                    <div className='col text-end'>
                        <a href='#'>View All</a>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                  {
                    this.state.itemsPopular.map((obj, idx) => (   
                    <ItemContent key={`items-${idx}`} image={obj.image} name={obj.name} location={obj.location} />
                  ))
                  }
                </div>
              </section>
              <section>
                <div className='row'>
                    <div className='col'>
                        <h2>Cars</h2>
                    </div>
                    <div className='col text-end'>
                        <a href='#'>View All</a>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                  {
                    this.state.itemsCar.map((obj, idx) => (   
                    <ItemContent key={`items-${idx}`} image={obj.image} name={obj.name} location={obj.location} />
                  ))
                  }
                </div>
              </section>
              <section>
                <div className='row'>
                    <div className='col'>
                        <h2>Motorbikes</h2>
                    </div>
                    <div className='col text-end'>
                        <a href='#'>View All</a>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                  {
                    this.state.itemsMotorbike.map((obj, idx) => (   
                    <ItemContent key={`items-${idx}`} image={obj.image} name={obj.name} location={obj.location} />
                  ))
                  }
                </div>
              </section>
              <section>
                <div className='row'>
                    <div className='col'>
                        <h2>Bikes</h2>
                    </div>
                    <div className='col text-end'>
                        <a href='#'>View All</a>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-between align-items-center mb-3'>
                  {
                    this.state.itemsBike.map((obj, idx) => (   
                    <ItemContent key={`items-${idx}`} image={obj.image} name={obj.name} location={obj.location} />
                  ))
                  }
                </div>
              </section>                
            </div>
        </main>
        <Footer />
      </>
    )
  }
}
