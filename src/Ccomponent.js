import React, { Component } from 'react'


export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0,
        input: '',
        submit: ''
      };
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
      this.abs = this.abs.bind(this)
      this.sqr = this.sqr.bind(this)
      this.parcent = this.parcent.bind(this)
      this.inputChange = this.inputChange.bind(this)
      this.inputSubmit = this.inputSubmit.bind(this)
    }
    inputChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    inputSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        })
    }

    abs() {
        this.setState(state => ({
            count: state.count * state.count
        }))
    }

    sqr() {
        this.setState(state => ({
            count: Math.round(Math.sqrt(state.count))
        }))
    }

    parcent() {
        this.setState(state => ({
            count: (state.count / 100) * state.input
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
        <form onSubmit={this.inputSubmit}>
            <input value={this.state.input} onChange={this.inputChange} />
            <button type='submit'>Submit input</button>
        </form>
        <h3>{this.state.submit}</h3>
        <h3>Return: {this.state.input}</h3>
        <h1>Count:  {this.state.count}</h1>
        <button onClick={this.increment}>IN + </button>
        <button onClick={this.decrement}>DE - </button>
        <button onClick={this.abs}>ABS *</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.handleClick}>Change</button>
        <button onClick={this.sqr}>SQRT</button>
        <button onClick={this.parcent}>-=%=-</button>
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