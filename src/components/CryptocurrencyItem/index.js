import './index.css'

const GetItem = props => {
  const {item} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = item
  return (
    <li className="list-item">
      <div className="image-cont">
        <img src={currencyLogo} alt={currencyName} className="img" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="currency-cont">
        <p className="name">{usdValue}</p>
        <p className="name">{euroValue}</p>
      </div>
    </li>
  )
}
export default GetItem
