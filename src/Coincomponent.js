import React, { Component } from 'react'

export default class Coincomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            coins: [],
            error: null
        };
    }
    componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                coins: result
            });
            console.log(result)
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        })
    }

  render() {
    const {error, isLoaded, coins} = this.state;
    if(error) {
        return <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
    return (
      <div>
        <ul>
          {coins.map(coins => (
            <li key={coins.name}>
                {coins.id}
                <img width='50' src={coins.image} alt={coins.name}/>
                {coins.current_price}
            </li>
          ))}  
        </ul>
        </div>
    )
  }
}
}
