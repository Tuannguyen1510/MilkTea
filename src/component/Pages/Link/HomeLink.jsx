import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Main from '../../Layout/Main'
import Menu from '../../Layout/Menu'
import MenuMain from './MenuMain'
import MenuBub from '../Menu/MenuBub'
import MenuMatcha from '../Menu/MenuMatcha'
import MenuMango from '../Menu/MenuMango'
import MenuPeach from '../Menu/MenuPeach'
import MenuRed from '../Menu/MenuRed'
import Signup from '../../Layout/Signup'
import Login from '../../Layout/Login'
export default class HomeLink extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header />}>
            <Route path="" element={<Main />}></Route>
            {/*  */}
            <Route path="home" element={<Main />}>
              <Route path="" element={<MenuMatcha />}></Route>
              <Route path="matcha" element={<MenuMatcha />}></Route>
              <Route path="bub" element={<MenuBub />}></Route>
              <Route path="red" element={<MenuRed />}></Route>
              <Route path="mango" element={<MenuMango />}></Route>
              <Route path="peach" element={<MenuPeach />}></Route>
            </Route>
            {/*  */}
            <Route path="menu" element={<Menu />}>
               <Route path="" element={<MenuMatcha />}></Route>
              <Route path="matchamenu" element={<MenuMatcha />}></Route>
              <Route path="bubmenu" element={<MenuBub />}></Route>
              <Route path="redmenu" element={<MenuRed />}></Route>
              <Route path="mangomenu" element={<MenuMango />}></Route>
              <Route path="peachmenu" element={<MenuPeach />}></Route>
            </Route>
          
            {/*  */}
          </Route>
        </Routes>
        {/* Login */}
        <Routes>
        <Route path="login" element={<Login/>}></Route>
        </Routes>
        {/* Sign Up  */}
        <Routes>
        <Route path="signup" element={<Signup/>}></Route>
        </Routes>
        {/*  */}
        
      </BrowserRouter>
    )
  }
}
