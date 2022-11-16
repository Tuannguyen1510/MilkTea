import React, { Component } from 'react'
import Header from '../Pages/Header'
import FooterMain from '../Pages/FooterMain'
import ContentMain from '../Pages/ContentMain'
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ContentMain/>
        <FooterMain/>
      </div>
    )
  }
}
