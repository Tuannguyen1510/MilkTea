import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTempe from '../templates/HomeTempe'
import Home from './Home'
import Nav from './Nav'
export default class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomeTempe />}>
                        <Route index  element={<Nav />}></Route>
                        <Route path="home" element={<Home />}></Route>
                        <Route path="nav" element={<Nav />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
