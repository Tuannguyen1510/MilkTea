import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../Header'
import Main from '../../Layout/Main'
import Menu from '../../Layout/Menu'
export default class HomeLink extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
             <Route path="" element={<Header/>}>
                   <Route index element={<Main/>}></Route>
                   <Route path="home" element={<Main/>}></Route>
                   <Route path="menu" element={<Menu/>}></Route>
             </Route>
        </Routes>
    </BrowserRouter>
    )
  }
}
