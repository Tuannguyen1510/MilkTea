import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MenuMain from './MenuMain'
import MenuBub from '../Menu/MenuBub'
import MenuMatcha from '../Menu/MenuMatcha'
import MenuMango from '../Menu/MenuMango'
import MenuPeach from '../Menu/MenuPeach'
import MenuRed from '../Menu/MenuRed'
export default class LinkMenu extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
             <Route path="" element={<MenuMain/>}>
                   <Route index element={<MenuBub/>}></Route>
                   <Route path="bub" element={<MenuBub/>}></Route>
                   <Route path="matcha" element={<MenuMatcha/>}></Route>
                   <Route path="red" element={<MenuRed/>}></Route>
                   <Route path="mango" element={<MenuMango/>}></Route>
                   <Route path="peach" element={<MenuPeach/>}></Route>
             </Route>
        </Routes>
    </BrowserRouter>
    )
  }
}
