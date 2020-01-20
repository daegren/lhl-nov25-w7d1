import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(10)
  const attributeBonus = Math.floor((value - 10) / 2)

  return (
    <div className="counter">
      <button onClick={() => setValue(value - 1)}>-</button>
      <span>{value}</span>
      &nbsp;
      <span>({attributeBonus > 0 ? `+${attributeBonus}` : attributeBonus})</span>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  )
}
export default Counter
