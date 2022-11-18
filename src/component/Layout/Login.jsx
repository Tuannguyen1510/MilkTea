import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
     
        <div className="row login">
          <div className="col-6 login-left">
            <div className="content">
              <h1>Welcome <span>Back</span>!</h1>
              <p>Login now to manage your points</p>
         
              <input type="text"  placeholder="example@gmail.com"/>
              <input type="password" name="" id="" placeholder='6+ strong character'/>
              <br />
              <NavLink to="/signup"> <button className="Create">Create an account</button></NavLink>
            
              <button>Sign Up</button>
              <button>Forgot Password?</button>
              <br />
              <div className="row width">
                <div className="col-4 width-left" ></div>
                <div className="col-4">Or sign in with</div>
                <div className="col-4 width-right"></div>
              </div>
              <div className="row mt-3">
                <div className="col-4 text-center">
              <i class="fab fa-google-plus"></i>
                </div>
                <div className="col-4 text-center">
                <i class="fab fa-facebook"></i>
                </div>
                <div className="col-4 text-center">      
                <i class="fab fa-apple"></i>
                </div>
              </div>
              <div className="LinkHome pt-2">
              <a href="" className='pt-2 '>
              <i class="fa fa-angle-double-left"></i>
              <i class="fa fa-angle-double-left"></i>
                <NavLink to="/home">Home</NavLink>
              </a>
              </div>
            </div>
          </div>
          <div className="col-6 login-right">
              <div className="bg-form" style={{
                backgroundImage: 'url(./img/From.png)'
              }}></div>
              <div className='p-5'>
                 <img src="./img/Group.png" alt="" />
              </div>
          </div>
        </div>
    
    )
  }
}
