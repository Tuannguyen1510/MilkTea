import React, { Component } from 'react'

export default class ProductCart extends Component {
    renderStart = (name) => {
        let htmlContent = <i class="fa fa-star mr-1"></i>;
        let result = []
        for (var i = 0; i < parseInt(name); i++) {
           result.push(htmlContent);
        }
        // document.querySelector('.evaluate').innerHTML = htmlContent;
        return result;
    }
    render() {
        const { product } = this.props
        return (
            <div>
                <div className="card ProductMenu-Cart">
                    <div className="img">
                        <img className="card-img-top" src={product.img} alt="Title" style={{
                            height: 300,
                            objectFit: 'cover'
                        }} />
                        <div className="icon">
                            <>
                                <i class="fa fa-shopping-cart"></i>
                            </>
                            <>
                                <i class="fa fa-heart"></i>
                            </>
                            <>
                                <i class="fa fa-eye"></i>
                            </>
                        </div>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                        <div className="content">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                        </div>
                        <div className="evaluate">
                        {/* <i class="fa fa-star "></i> */}
                        {this.renderStart(product.evaluate)}
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
