import React, { Component } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-expand-lg bg-darket py-4 text-white fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="home"><h2>START FRAMEWORK</h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive == true ? 'nav-link navActive' : 'nav-link'} to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive == true ? 'nav-link navActive' : 'nav-link'} to="portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive == true ? 'nav-link navActive' : 'nav-link'} to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    }
}
