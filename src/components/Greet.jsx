import React from 'react'

const Greet = ({timeOfDay}) => {

 return  timeOfDay === 'morning'? <h1>Good Morning</h1> :
    timeOfDay == 'afternoon'? <h1>Good Afternoon</h1> :
    <h1>Good Day!</h1>
 
}

export default Greet