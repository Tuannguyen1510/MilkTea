import React, { Component } from 'react'
import ProductCart from './ProductCart'

const data = [
    { "img": "./img/Tra-sua-dau-do.jpg", "name": "Red Bean MilkTea", "price": "30.00S$", "evaluate": 5},
    { "img": "./img/dau.jpg", "name": "Red Bean MilkTea", "price": "30.99S$" ,  "evaluate": 4 },
    {"img": "./img/dau4.jpeg", "name": "Red Bean MilkTea", "price": "25.00S$" ,  "evaluate": 4 },
    {"img": "./img/dau6.jpg", "name": "Red Bean", "price": "15.00S$",  "evaluate": 5 },
    { "img": "./img/dau7.jpg", "name": "Red Bean", "price": "15.00S$" ,  "evaluate": 5},
    { "img": "./img/dau8.jpg", "name": "Red Bean", "price": "10.00S$" ,  "evaluate": 3 },
  ]
export default class Redbeen extends Component {
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
