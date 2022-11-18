import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div>
                {/* nav-bar */}
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <a className="navbar-brand" href="#">Foodtuck</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active"  to="/home" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/menu" >Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                            <form className="d-flex my-2 my-lg-0" id="icon">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                                <NavLink to="/login"> <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-user"></i></button></NavLink>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-shopping-cart"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* Carousel */}
                <div className="Carousel">
                    <div className="container">
                        <div className="row content">
                            <div className="col-6 content-left">
                                <div></div>
                               <div className="text">
                               <h5>Welcome to milk-tea </h5>
                                <h2>Heal the world with milk-tea</h2>
                                <p>The sweetness in the tea is not important, it is important that you
 do not look at the same place forever. Experience the bitterness
 first and the sweetness later, this is good tea.</p>
                                 <div className="button">
                                    <button className='button-left'>Order now</button>
                                    <button className='button-right'>See menu</button>
                                 </div>
                               </div>
                            </div>
                            <div className="col-6 content-right">
                                <div className="img">
                                    <img src="./img/tea.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div">
                   <Outlet/>
                </div>
            </div>
        )
    }
}
