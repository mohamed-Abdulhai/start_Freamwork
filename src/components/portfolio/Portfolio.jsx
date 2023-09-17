import React, { Component } from 'react'
import './Portfolio.css'
import img1 from '../../images/poert1.png'
import img2 from '../../images/port2.png'
import img3 from '../../images/port3.png'
import { Helmet } from 'react-helmet'
export default class Portfolio extends Component {
  render() {
      return <>
          <Helmet>
              <title>Portfolio</title>
            </Helmet>
            <div className="portfolio py-5">
                <div className="container mt-5 pt-5">
                    <h2 className='text-center'>PORTFOLIO COMPONENT</h2>
                    
                    <div className="row g-4">
                            <div className='col-lg-4 col-md-6'>
                                <div className="box">
                                    <img src={img1} alt="work" className='w-100'/>
                                    <div className="layer d-flex justify-content-center align-items-center text-white">
                                        <i class="fa-solid fa-plus fa-5x"></i>
                                    </div>
                                </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                                <div className="box">
                                    <img src={img2} alt="work" className='w-100'/>
                                    <div className="layer d-flex justify-content-center align-items-center text-white">
                                        <i class="fa-solid fa-plus fa-5x"></i>
                                    </div>
                                </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                                <div className="box">
                                    <img src={img3} alt="work" className='w-100'/>
                                    <div className="layer d-flex justify-content-center align-items-center text-white">
                                        <i class="fa-solid fa-plus fa-5x"></i>
                                    </div>
                                </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                                <div className="box">
                                    <img src={img1} alt="work" className='w-100'/>
                                    <div className="layer d-flex justify-content-center align-items-center text-white">
                                        <i class="fa-solid fa-plus fa-5x"></i>
                                    </div>
                                </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                                <div className="box">
                                    <img src={img2} alt="work" className='w-100'/>
                                    <div className="layer d-flex justify-content-center align-items-center text-white">
                                        <i class="fa-solid fa-plus fa-5x"></i>
                                    </div>
                                </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                                <div className="box">
                                    <img src={img3} alt="work" className='w-100'/>
                                    <div className="layer d-flex justify-content-center align-items-center text-white">
                                        <i class="fa-solid fa-plus fa-5x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
          </div>
          
        </>
  }
}
