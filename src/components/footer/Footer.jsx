import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return <>
      <footer className='text-white'>
        
          <div className="firstFooter bg-darket">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-4 py-2 ">
                <h4>LOCATION</h4>
                <p className='mb-1'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 py-2 text-center">
                <h4>AROUND THE WEB</h4>
                <div className="icons">
                  <a href="" className='btn btn-outline-light border-0'>
                    <i className='fa-brands fa-facebook fa-2x '></i>
                  </a>
                  <a href="" className='btn btn-outline-light border-0'>
                    <i className='fa-brands fa-twitter fa-2x'></i>
                  </a>
                  <a href="" className='btn btn-outline-light border-0'>
                    <i className='fa-brands fa-linkedin-in fa-2x'></i>
                  </a>
                  <a href="" className='btn btn-outline-light border-0'>
                    <i className="fa-solid fa-globe fa-2x"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center py-2">
                <h4>ABOUT FREELANCER</h4>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
        </div>
        </div>
        <div className="secundFoteer bg-dark py-3">
          <p className='text-center'>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  }
}
