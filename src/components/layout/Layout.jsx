import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'
import Portfolio from '../portfolio/Portfolio'

import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
    render() {
        return <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    }
}
