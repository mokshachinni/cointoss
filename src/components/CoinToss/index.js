// Write your code here
import {Component} from 'react'

import './index.css'

const tosses = [
  {
    id: 0,
    toss: 'heads',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 1,
    toss: 'tails',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {
    activeId: tosses[0].id,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    alt: 'toss result',
    imgUrl: tosses[0].imgUrl,
  }

  onClickCoin = () => {
    const {activeId, headsCount, tailsCount, totalCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    //   console.log(tossResult)
    this.setState({activeId: tossResult})

    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        totalCount: prevState.totalCount + 1,
        imgUrl: tosses[tossResult].imgUrl,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        totalCount: prevState.totalCount + 1,
        imgUrl: tosses[tossResult].imgUrl,
      }))
    }
  }

  render() {
    const {totalCount} = this.state
    const {headsCount} = this.state
    const {tailsCount} = this.state
    const {imgUrl} = this.state
    const {alt, id} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="tosses">Heads (or) Tails</p>
          <img src={imgUrl} alt={alt} key={id} className="coin-image" />
          <button type="button" className="button" onClick={this.onClickCoin}>
            Toss Coin
          </button>
          <div className="toss-results">
            <p className="count">Total:{totalCount} </p>
            <p className="count">Heads:{headsCount} </p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
