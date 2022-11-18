import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Signup extends Component {
  render() {
    return (
      <div className="row SignUp">
      <div className="col-6 login-left">
        <div className="content">
          <h1>Let's Get <span>Started</span>!</h1>
          <p>Sign up now to collect points for every pucharse,receive special offer, and many more...</p>
          <input type="text"  placeholder="Nguyễn Đình Tuấn "/>
          <input type="text"  placeholder="example@gmail.com"/>
          <input type="password" name="" id="" placeholder='Password 6+ strong character'/>
          <input type="password" name="" id="" placeholder='Password 6+ strong character'/>
          <br />
          <button className="Create">Create an account</button>
          <button>Sign up with Google</button>
          
          <br />
          <h5>Already have an account? <NavLink to="/login"><span>Login now</span></NavLink></h5>
        </div>
      </div>
      <div className="col-6 login-right">
          <div className="bg-form" style={{
            backgroundImage: 'url(./img/From.png)'
          }}></div>
          <div className='p-5'>
             <img src="./img/Group-1.png" alt="" />
          </div>
      </div>
    </div>
    )
  }
}
