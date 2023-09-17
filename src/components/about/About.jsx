import React, { Component } from 'react'
import'./About.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Helmet } from 'react-helmet'
export default class About extends Component {
    render() {
        return <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="about py-5">
                <div className="container d-flex justify-content-center align-items-center py-5 mt-5">
                    <div className="containt py-2 mt-5">
                        <h2 className='mt-5'>ABOUT COMPONENT</h2>
                        <div className="star d-flex justify-content-between py-3">
                            <div className='line mt-3'></div>
                            <i class="fa-solid fa-star text-white fa-2x mx-2 "></i>
                            <div className='line mt-3'></div>
                        </div>
                    </div>
                    
                </div>
                <div className="container">
                    <div className="row">
                            <div className="col-md-6">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-6">
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </div>
                        </div>
                </div>
            </div>
            
        </>
    }
}
