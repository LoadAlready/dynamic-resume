import React, { Component } from 'react'

export default class WelcomePage extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentEffect: 'animated jello infinite delay-1s welcome-component-title'
    }
  }
  render() {
    return (
      <div className="welcome-component">
        <h1 className= {this.state.currentEffect}>WELCOME</h1>
      </div>
    )
  }
}
