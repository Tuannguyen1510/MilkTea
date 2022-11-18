import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './component/Layout/Main';
import Swiper from './component/Library/Swiper';
import Layout from './Test/Layout';
import HomeTempe from './templates/HomeTempe';
import HomeLink from './component/Pages/Link/HomeLink';
import Login from './component/Layout/Login';
import Signup from './component/Layout/Signup';
import './scss/MainLayout.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
       {/* <Main/> */}
       {/* <Swiper/> */}
       {/* <Layout/>   */}
       {/* <HomeTempe/> */}
       <HomeLink/>
       {/* <Login/> */}
       {/* <Signup/> */}
     </>

)

