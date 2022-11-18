import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTempe from '../templates/HomeTempe'
import Home from './Home'
import Nav from './Nav'
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
export default class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomeTempe />}>
                        <Route path="" element={<Home />}> </Route>

                        <Route path="home" element={<Home />}>
                            <Route path="" element={<Test1 />}></Route>
                            <Route path="test1" element={<Test1 />}></Route>
                            <Route path="test2" element={<Test2 />}></Route>
                            <Route path="test3" element={<Test3 />}></Route>
                        </Route>
                       
                         
                       
                        <Route path="nav" element={<Nav />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
