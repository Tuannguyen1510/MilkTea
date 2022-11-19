import React, { Component } from 'react'
import ProductCart from './ProductCart'

const data = [
    { "img": "/img/Mango.jpeg", "name": "Mango MilkTea ", "price": "25.00S$", "evaluate": 5},
    { "img": "/img/mango1.jpg", "name": "Mango MilkTea ", "price": "22.99S$" ,  "evaluate": 4 },
    {"img": "/img/mango2.jpeg", "name": "Mango MilkTea ", "price": "20.00S$" ,  "evaluate": 3 },
    {"img": "/img/mango3.jpg", "name": "Mango juice", "price": "10.00S$",  "evaluate": 5 },
    { "img": "/img/mango4.jpg", "name": "Mango ice cream", "price": "10.00S$" ,  "evaluate": 5},
    { "img": "/img/mago5.jpg", "name": "Mango ice cream ", "price": "10.00S$" ,  "evaluate": 5 },
  ]
export default class Mango extends Component {
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
        {this.renderMilkTea()}</div>
    )
  }
}
