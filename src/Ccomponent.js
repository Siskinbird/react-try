import React, { Component } from 'react'


export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        visibility: false
      };
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

  render() {
    if(this.state.visibility) {
        
    const name = this.state.name;
    return (
      <div>
        <h1>Class - component {this.props.numbers.reverse().join(',')}</h1>
        <h3>{name}</h3>
        <button onClick={this.handleClick}>Change</button>
        <h4>Some best code: {this.props.cucumbers}</h4>
        <h5>{this.props.word.toUpperCase()}</h5>
        <ul>
            <li>444</li>
            <li>ttt</li>
            <li>333</li>
            <li>www</li>
        </ul>
      </div>
    )
  } else {
    return <div>
        <button onClick={this.handleClick}>REturn</button>
    </div>
  }

}
}


/* let arr = ['Rick', 'Morty', 'Billy', 'Ilish']
function rev(arr) {
    let narr = []
    for(let i in arr){
        narr.push(arr[i].toUpperCase())
    }
    console.log(narr)
}
rev(arr) */