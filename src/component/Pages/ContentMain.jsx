import React, { Component } from 'react'
import Swiper from '../Library/Swiper'
import LinkMenu from './Link/LinkMenu'
import SwiperTes from '../Library/SwiperTes'
import MenuMain from './Link/MenuMain'

export default class ContentMain extends Component {
    render() {
        return (
            <div>
                {/* <div class="about-left wow animate__ animate__fadeInLeft animated" data-wow-duration="2s"  data-wow-delay="0.2s" style="visibility: hidden; animation-duration: 2s; animation-delay: 0.2s; animation-name: fadeInLeft; animation-fill-mode: both"> */}

                {/* About  */}
                <section className="aboutUs" style={{
                    backgroundImage: "url(./img/bg4.png)"
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="aboutUs-left col-6" >
                                <div className="img">
                                    <img src="./img/about.png" alt="" />
                                </div>
                            </div>
                            {/*  */}
                            <div className="aboutUs-right col-6">
                                <h5>About Us</h5>
                                <h3>Why choose our milk-tea</h3>
                                <div className="check">
                                    <div className="content">
                                        <i class="fa fa-check"></i>
                                        <p>Experienced Chefs</p>
                                    </div>
                                    <div className="content">
                                        <i class="fa fa-check active"></i>
                                        <p>Fresh & Organic Foods</p>
                                    </div>
                                    <div className="content">
                                        <i class="fa fa-check"></i>
                                        <p>Different Milk-Tea  & Drinks</p>
                                    </div>
                                </div>
                                <div className="button">
                                    <button>Learn More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/*  Popular*/ }
            <section section className = "Popular" style = {{
            backgroundImage: "url(./img/bg2.png)"
        }
    }>
                    <div className="text text-center">
                        <h2>Popular coffee categories</h2>
                        <p>Milk tea often has many different flavors, depending on the ingredients and preparation method of each type.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="row list">
                                    <div className="col-3 item">
                                        <img src="./img/matcha.jpg" alt="" />
                                    </div>
                                    <div className="col-9 item">
                                        <h5>Cream Top Matcha</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium nihil corrupti ad velit dolores.</p>
                                    </div>
                                    {/*  */}
                                    <div className="col-3 item">
                                        <img src="./img/Tra-sua-dau-do.jpg" alt="" />
                                    </div>
                                    <div className="col-9 item">
                                        <h5>Red bean milk tea</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium nihil corrupti ad velit dolores.</p>
                                    </div>
                                    {/*  */}
                                    <div className="col-3 item">
                                        <img src="./img/peach.jpg" alt="" />
                                    </div>
                                    <div className="col-9 item">
                                        <h5>Peach milk tea</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium nihil corrupti ad velit dolores.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row list">
                                    <div className="col-3 item">
                                        <img src="./img/bubble.jpg" alt="" />
                                    </div>
                                    <div className="col-9 item">
                                        <h5>Bubble milk tea</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium nihil corrupti ad velit dolores.</p>

                                    </div>
                                    {/*  */}
                                    <div className="col-3 item">
                                        <img src="./img/Mango.jpeg" alt="" />
                                    </div>
                                    <div className="col-9 item">
                                        <h5>Mango milk tea</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium nihil corrupti ad velit dolores.</p>

                                    </div>
                                    {/*  */}
                                    <div className="col-3 item">
                                        <img src="./img/Mint.jpg" alt="" />
                                    </div>
                                    <div className="col-9 item">
                                        <h5>Mint milk tea</h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium nihil corrupti ad velit dolores.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
    {/* Choose */ }
    < section className = "Choose" style = {{
    backgroundImage: "url(./img/bg16.png)"
}}>
    <div className="container">
        <div className="row">
            <div className="col-6 Choose-left">
                <div className="img">
                    <img src="./img/combo-png.png" alt="" />
                </div>
            </div>
            <div className="col-6 Choose-right">
                <h5>Why Choose us</h5>
                <h2>Best quality food and milk-teatea maker</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, incidunt voluptatem. A in inventore eaque, eius culpa sunt quis sit sapiente quisquam velit, fugit explicabo, facilis impedit eos? Adipisci, dignissimos!</p>
                <div className="row list">
                    <div className="col-3 item">
                        <img src="./img/a1.png" alt="" />
                    </div>
                    <div className="col-9 item">
                        <h5>High quality</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur atque, facilis dolorem delectus nobis cumque reprehenderit, error ipsam ullam adipisci necessitatibus minima deleniti repudiandae voluptate quaerat et? Beatae, maxime.</p>
                    </div>
                    {/*  */}
                    <div className="col-3 item">
                        <img src="./img/a2.png" alt="" />
                    </div>
                    <div className="col-9 item">
                        <h5>High quality</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur atque, facilis dolorem delectus nobis cumque reprehenderit, error ipsam ullam adipisci necessitatibus minima deleniti repudiandae voluptate quaerat et? Beatae, maxime.</p>
                    </div>
                    {/*  */}
                    <div className="col-3 item">
                        <img src="./img/a3.png" alt="" />
                    </div>
                    <div className="col-9 item">
                        <h5>High quality</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur atque, facilis dolorem delectus nobis cumque reprehenderit, error ipsam ullam adipisci necessitatibus minima deleniti repudiandae voluptate quaerat et? Beatae, maxime.</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
                </section >
    {/* Menu Main */ }
    < section className = "menuMain" style = {{
    backgroundImage: "url(./img/bg17.png)"
}}>
                    <div className="text text-center">
                        <h2>Our Favorites Menu</h2>
                        <p className='mb-4'>If you are looking for a menu design full of information but equally beautiful <br /> and unique,
                            please refer to some sample menus of tea and milk tea shops that we have compiled below.</p>
                    </div>
                    <div className="container">
                         <MenuMain/>
                    </div>
                </section >
    {/* Meet */ }
    < section className = "Meet" style = {{
    backgroundImage: "url(./img/bg2.png)"
}}>
    <div className="text text-center">
        <h2>Meet our Barista</h2>
        <p className='mb-4'>Milk tea is made by exquisite barista for the preparation of fresh and delicious drinks</p>
    </div>
{/*  */ }
<div className="container">
    <Swiper />
</div>
                </section >
    {/* Testimonials */ }
    < section className = "Testimonials" style = {{
    backgroundImage: "url(./img/bg4.png)"
}}>
    <div className="container">
        <div className="row">
            <div className="Tes-left col-6">
                <SwiperTes />
            </div>
            <div className="Tes-right col-6" style={{
                backgroundImage: "url(./img/tes1.jpg)",
                backgroundSize: 'contain'
            }}>
                {/* <img src="./img/tes1.jpg" alt="" /> */}
            </div>
        </div>
    </div>
                </section >
    {/* Blog */ }
    < section className = "Blog" style = {{
    backgroundImage: "url(./img/bg2.png)"
}}>
                    <div className="text text-center">
                        <h2>Latest News & Blog</h2>
                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Varius sed pharetra dictum neque massa </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="item col-4">
                                <div className=" card mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img src="./img/s17.jpg" className="img-fluid rounded-start" alt="Card title" />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                            <div className="btn">
                                                <button className="btn">Read More </button>
                                                <i class="fa fa-angle-double-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="col-4 item">
                                <div className="card mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img src="./img/combo-png.png" className="img-fluid rounded-start" alt="Card title" />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                            <div className="btn">
                                                <button className="btn col">Read More </button>
                                                <i class="fa fa-angle-double-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="col-4 item">
                                <div className="card mb-3" style={{ maxWidth: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img src="./img/db2.png" className="img-fluid rounded-start" alt="Card title" />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                            <div className="btn ">
                                                <button className="btn">Read More </button>
                                                <i class="fa fa-angle-double-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="text-center"> */}
                        <nav aria-label="Page navigation example" class="Page-nav">
                            <ul class="pagination justify-content-end">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* </div> */}
                    </div>
                </section >
    {/* Partners & Clients */ }
{/* <section className="Clients">
                    <div className="container">
                        <div className="row">
                            .col-
                        </div>
                    </div>
                </section> */}
            </div >
        )
    }
}
