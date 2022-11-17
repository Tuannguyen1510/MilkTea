import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'





export default class MenuMain extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="menuMain-left col-3">
            <div className="content">
              <NavLink className="nav-link" to='/matcha'>
                <div className="menuName row">
                  <img src="./img/icon1.png" alt="" class="col-3" />
                  <p class="col-7">Cream Top Matcha</p>
                </div>
              </NavLink>
              {/*  */}
              <NavLink className="nav-link" to='/bub' >
                <div className="menuName row">
                  <img src="./img/icon4.png" alt="" class="col-3" />
                  <p class="col-7">Bubble milk tea</p>
                </div>
              </NavLink>
              {/*  */}
              <NavLink className="nav-link" to='/red'>
                <div className="menuName row">
                  <img src="./img/icon3.png" alt="" class="col-3" />
                  <p class="col-7">Red bean milk tea</p>
                </div>
              </NavLink>
              {/*  */}
              <NavLink className="nav-link" to='/mango'>
                <div className="menuName row">
                  <img src="./img/icon4.png" alt="" class="col-3" />
                  <p class="col-7">Mango milk tea</p>
                </div>
              </NavLink>
              {/*  */}
              <NavLink className="nav-link" to='/peach'>
                <div className="menuName row">
                  <img src="./img/icon5.png" alt="" class="col-3" />
                  <p class="col-7">Peach milk tea</p>
                </div>
              </NavLink>
              {/*  */}
            </div>
          </div>
          <div className="menuMain-right col-9">
             <Outlet/>
          </div>
        </div>

      </div>
    )
  }
}
