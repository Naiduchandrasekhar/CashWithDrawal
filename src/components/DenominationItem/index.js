// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, onClickDebit} = props
  const {value, id} = eachItem

  const onClickButton = () => {
    onClickDebit(id, value)
  }

  return (
    <li className="listItems">
      <button type="button" className="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
