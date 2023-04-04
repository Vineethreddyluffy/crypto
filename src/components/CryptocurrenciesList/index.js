import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'

import GetItem from '../CryptocurrencyItem'

class GetCrypto extends Component {
  state = {listOf: [], running: true}

  componentDidMount() {
    this.getCryptoItem()
  }

  getCryptoItem = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({listOf: updatedData, running: false})
  }

  render() {
    const {listOf, running} = this.state
    return running ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div>
        <h1 className="main-head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <ul className="card-cont">
          <div className="text-cont">
            <p className="para">Coin type</p>
            <div className="rup-text">
              <p className="para">USD</p>
              <p className="para">EURO</p>
            </div>
          </div>
          {listOf.map(each => (
            <GetItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default GetCrypto
