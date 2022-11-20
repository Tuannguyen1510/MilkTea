import React, { Component } from 'react'
import FooterMain from '../Pages/FooterMain'
import MenuMainCotent from '../Pages/MenuMainCotent'
export default class Menu extends Component {
  render() {
    return (
      <div>
         <MenuMainCotent/>
        <FooterMain/>
      </div>
    )
  }
}
