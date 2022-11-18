import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btncheck1">First One</label>
        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btncheck2">Second One</label>
        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btncheck3">Third One</label>
      </div>
        
        <div className="div">
           <ul>
            <li><NavLink to="/home/test1">1</NavLink></li>
            <li><NavLink to="/home/test2">2</NavLink></li>
            <li><NavLink to="/home/test3">3</NavLink></li>
           </ul>
        </div>

        <div className="bg-dark text-white">
          <Outlet/>
        </div>



      </div>

    )
  }
}
