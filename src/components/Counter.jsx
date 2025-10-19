import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrease}>Decerement</button>
    </div>
  )
}

export default Counter
