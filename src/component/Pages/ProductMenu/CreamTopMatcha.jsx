import React, { Component } from 'react'
import ProductCart from './ProductCart'


const data = [
  { "img": "/img/matcha.jpg", "name": "Cream Top Matcha ", "price": "40.00S$", "evaluate": 5},
  { "img": "/img/matcha1.jpg", "name": "Cream Top Matcha", "price": "39.99S$" ,  "evaluate": 4 },
  {"img": "/img/matcha2.jpg", "name": "Cream Top Matcha ", "price": "40.00S$" ,  "evaluate": 4 },
  {"img": "/img/matcha3.jpg", "name": "Monaka", "price": "20.00S$",  "evaluate": 5 },
  { "img": "/img/matcha4.jpg", "name": "Monaka", "price": "22.00S$" ,  "evaluate": 5},
  { "img": "/img/matcha5.jpg", "name": "Cream Top Matcha ", "price": "40.00S$" ,  "evaluate": 3 },
]
export default class CreamTopMatcha extends Component {
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
