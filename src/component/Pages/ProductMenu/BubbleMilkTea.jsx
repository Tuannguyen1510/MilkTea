import React, { Component } from 'react'
import ProductCart from './ProductCart'


const data = [
    { "img": "/img/s20.jpg", "name": "Bubble milk tea ", "price": "35.00S$", "evaluate": 5 },
    { "img": "/img/bubble.jpg", "name": "Bubble milk tea ", "price": "30.00S$" ,  "evaluate": 5 },
    { "img": "/img/h1.jpg", "name": "Black Pearl ", "price": "5.00S$" ,  "evaluate": 4 },
    { "img": "/img/h2.jpg", "name": "Golden Pearl", "price": "5.00S$",  "evaluate": 5  },
    { "img": "/img/h3.jpg", "name": "Green Pearl", "price": "5.00S$" ,  "evaluate": 5 },
    { "img": "/img/h4.jpg", "name": "White pearls ", "price": "5.00S$" ,  "evaluate": 5 },
]
export default class BubbleMilkTea extends Component {
    renderMilkTea = () => {
        const arrMap = data.map((item, index) => {
            return (
                <div className='col-4 mt-3' key={index}>
                    <ProductCart product={item}/>
                </div>
            )
        })
        return arrMap
    }
    render() {
        return (
            <div className='row'>
                {this.renderMilkTea()}
            </div>
        )
    }
}
