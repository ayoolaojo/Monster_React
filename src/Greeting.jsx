import React from 'react'


const Greeting = () => {
    const myName = "John"
    const todayDate = new Date()
  return (
    <div>
        <h1>Hello {myName} </h1>
        <p>Today's date is: {todayDate.toDateString()}  </p>
    </div>
  )
}

export default Greeting