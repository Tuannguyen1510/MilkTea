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
                   <Route path="home/bub" element={<MenuBub/>}></Route>
                   <Route path="home/matcha" element={<MenuMatcha/>}></Route>
                   <Route path="home/red" element={<MenuRed/>}></Route>
                   <Route path="home/mango" element={<MenuMango/>}></Route>
                   <Route path="home/peach" element={<MenuPeach/>}></Route>
             </Route>
        </Routes>
    </BrowserRouter>
    )
  }
}
