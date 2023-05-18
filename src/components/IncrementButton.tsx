import React, { useState } from 'react'

const IncrementButton = () => {
  const [number, setNumber] = useState(0)

  return (
    <button onClick={() => setNumber(number + 1)}>Increment: {number}</button>
  )
}

export default IncrementButton
