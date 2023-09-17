import React, { Component } from 'react'
import logo from '../../images/avataaars.svg'
import './Home.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Helmet } from 'react-helmet'
export default class Home extends Component {
    render() {
        return <>
            <Helmet>
                <title>Start Freamwork</title>
            </Helmet>
            <div className="home py-5">
                <div className="container d-flex justify-content-center align-items-center py-5">
                    <div className="containt py-5">
                        <img className='w-100' src={logo} alt="avataaar" />
                        <h2 className='text-center my-3'>START FRAMEWORK</h2>
                        <div className="star d-flex justify-content-between py-3">
                            <div className='line mt-3'></div>
                            <i class="fa-solid fa-star text-white fa-2x mx-2 "></i>
                            <div className='line mt-3'></div>

                        </div>
                        <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
                    </div>

                </div>
        </div>
        
        </>
    }
}
