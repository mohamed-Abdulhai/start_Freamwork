import React, { Component } from 'react'
import './Contact.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Helmet } from 'react-helmet'
export default class Contact extends Component {
  render() {
    return <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact py-5">
        <div className="container py-5 my-5">
            <div className="container mt-5 pt-5">
              <h2 className='text-center'>CONATCT SECTION</h2>
              <div className='d-flex justify-content-center align-content-center'>
                <div className="star d-flex justify-content-between py-3">
                  <div className='line mt-3'></div>
                  <i class="fa-solid fa-star fa-2x mx-2 "></i>
                  <div className='line mt-3'></div>
                </div>
            </div>
          </div>
          <form className='w-75  m-auto'>
            
              <input type="text" className='form-control w-75 m-auto mb-4' placeholder='User Name' />
            <input type="email" className='form-control w-75 m-auto mb-4' placeholder='User Email' />
            <input type="number" className='form-control w-75 m-auto mb-4' placeholder='User Age' />
            <input type="password" className='form-control w-75 m-auto mb-4' placeholder='User Password' />
            <div className='d-flex justify-content-center '>
              <button className='btn btn-outline-success'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  }
}
