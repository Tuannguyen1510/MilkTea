import React, { Component } from 'react'

export default class FooterMain extends Component {
  render() {
    return (
      <footer className="Footer" style={{
        backgroundImage:"url(./img/pattern2.png)",
        backgroundPosition:"top"
        
      }}>
        <div className="container">
          <div className="footer-top wow animate__ animate__fadeInUp animated" >
            <div className="content row  p-5">
              <h1 className='col-4'>Subscribe To Our Newsletter</h1>
              <div className="input col-5">
                <div className="row">
                <input type="text " placeholder="Your Email Address" className='col-9' />
                <input type="submit" className='col-3' placeholder='Subscrib now' />
                </div>
              </div>
              <div className='col-1'></div>
              <div className="footer-social col-2">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-instagram" />
              <i className="fab fa-twitter" />
            </div>
            </div>
          </div>
          <div className="footer-main wow animate__ animate__fadeInUp animated" >
            <div className="footer-list row">
              {/*  */}
              <div className="footer-item col-4">
                  <h1>Foodtuck</h1>
                  <p >Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
              </div>
              {/*  */}
              <div className="footer-item col-4">
                  <h5>Explore</h5>
                <div className="row">
                <ul className='col-6'>
                  <li><a href><i className="fa fa-angle-right" />Home</a></li>
                  <li><a href><i className="fa fa-angle-right" />About Us</a></li>
                  <li><a href><i className="fa fa-angle-right" />Contact Us</a></li>
                 
                </ul>
                <ul className='col-6'>
                  <li><a href><i className="fa fa-angle-right" /> Blog</a></li>
                  <li><a href><i className="fa fa-angle-right" /> Team</a></li>
                  <li><a href><i className="fa fa-angle-right" /> Our Menu</a></li>
                </ul>
                </div>
              </div>
              {/*  */}
            
              {/* Start Contact */}
              <div className="footer-item col-4">
               <h5>Contact us</h5>
               <div className="content mt-4">
               <div className="footer-contact row">
                 <div className="footer-icon col-1">
                 <i class="fa fa-map-marker-alt"></i>
                 </div>
                 <div className="footer-contact__text col-11">
                   <p>+91 987-654-3210</p>
                 </div>
               </div>
               <div className="footer-contact row">
                 <div className="footer-icon col-1">
                   <i className="fa fa-phone" />
                 </div>
                 <div className="footer-contact__text col-11">
               
                   <p>+91 987-654-3210</p>
                 </div>
               </div>
               <div className="footer-contact row">
                 <div className="footer-icon col-1">
                 <i class="fa fa-envelope-open"></i>
                 </div>
                 <div className="footer-contact__text col-11">
               
                   <p>+91 987-654-3210</p>
                 </div>
               </div>
               <div className="footer-contact row">
                 <div className="footer-icon col-1">
                 <i class="fa fa-clock"></i>
                 </div>
                 <div className="footer-contact__text col-11">
               
                   <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
                 </div>
               </div>
               </div>
             </div>
             {/* End Contact */}
            </div>
          </div>
        </div>
        <div className="footer-late">
          <div className="container text-center">
            <p>Copyright © 2021 <span>DexignZone </span>. All rights reserved.</p>
          </div>
        </div>

      </footer>

    )
  }
}
