import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default class HomeTempe extends Component {
  render() {
    return (
      <div>
        <header className='bg-dark text-light p-5'>
             <NavLink to="/home" className="p-5">Home</NavLink>
             <NavLink to="/nav" className="p-5">Nav</NavLink>
        </header>
        <section class="text-dark">
                <Outlet/>
        </section>
      </div>
    )
  }
}
