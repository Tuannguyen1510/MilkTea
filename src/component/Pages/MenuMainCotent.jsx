import React, { Component } from 'react'
import MenuContenHome from './Link/MenuContenHome'
export default class MenuMainCotent extends Component {
  render() {
    return (
      < section className = "menuMain" style = {{
        backgroundImage: "url(./img/bg17.png)"
          }}>
                       
                        <div className="container">
                             <MenuContenHome/>
                        </div>
                    </section >
    )
  }
}

