import React, { Component } from 'react'
import ProductCart from './ProductCart'

const data = [
    { "img": "/img/dao.jpg", "name": "Peach Tea", "price": "30.00S$", "evaluate": 3},
    { "img": "/img/dao1.jpg", "name": "Peach Tea", "price": "25.99S$" ,  "evaluate": 5 },
    {"img": "/img/dao2.jpg", "name": "Peach Tea", "price": "30.00S$" ,  "evaluate": 4 },
    {"img": "/img/dao3.jpg", "name": "Peach Tea", "price": "20.00S$",  "evaluate": 5 },
    { "img": "/img/dao4.jpg", "name": "Special Peach Tea", "price": "40.00S$" ,  "evaluate": 5},
    { "img": "/img/dao5.jpg", "name": "Peach Tea", "price": "20.00S$" ,  "evaluate": 3 },
  ]
export default class Peach extends Component {
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
