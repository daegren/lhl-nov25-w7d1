import React from 'react'

const Counter = ({ value, onChange }) => {
  const attributeBonus = Math.floor((value - 10) / 2)

  const handleClick = delta =>
    e => {
      e.preventDefault()
      onChange(value + delta)
    }

  return (
    <div className="counter">
      <button onClick={handleClick(-1)}>-</button>
      <span>{value}</span>
      &nbsp;
      <span>({attributeBonus > 0 ? `+${attributeBonus}` : attributeBonus})</span>
      <button onClick={handleClick(1)}>+</button>
    </div>
  )
}
export default Counter
