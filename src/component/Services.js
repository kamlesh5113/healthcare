import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './image/hospital-beds.jpg'
const Services = () => {
  return (
    <div>

        <center>
            <h1> Our Services </h1>
        </center>

        <div className='container-fluid'>

            <div className='col-lg-4 col-md-4 col-sm-12'>

                <div className='thumbnail'>
                    <img src={logo} alt='error' width='100%'/>
                    <figure>
                        <h3>John</h3>
                    </figure>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-primary'>See Profile</button>

                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
            <img src={logo} alt='error' width='100%'/>
                    <figure>
                        <h3>Jack</h3>
                    </figure>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-primary'>See Profile</button>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
            <img src={logo} alt='error' width='100%'/>
                    <figure>
                        <h3>Harry</h3>
                    </figure>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-primary'>See Profile</button>
            </div>
        </div>

    </div>
  )
}

export default Services
