import React, { Component } from 'react'


export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
      this.abs = this.abs.bind(this)
    }

    abs() {
        this.setState(state => ({
            count: state.count * state.count
        }))
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }))
    }
    reset() {
        this.setState({
            count: 0
        })
    }

    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

  render() {
    return (
      <div>
        <h1>Count:  {this.state.count}</h1>
        <button onClick={this.increment}>IN + </button>
        <button onClick={this.decrement}>DE - </button>
        <button onClick={this.abs}>ABS *</button>
        <button onClick={this.reset}>RESET</button>
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