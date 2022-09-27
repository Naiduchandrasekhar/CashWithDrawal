// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onClickDebit = (id, value) => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="logoNameCard">
            <p className="logo">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="rupees">
              {count} <br /> <span className="span">In Rupees</span>
            </p>
          </div>
          <p className="heading">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="listContainer">
            {denominationsList.map(eachList => (
              <DenominationItem
                eachItem={eachList}
                key={eachList.id}
                onClickDebit={this.onClickDebit}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
