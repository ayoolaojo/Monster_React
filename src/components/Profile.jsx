import React, { useState } from 'react'

const Profile = () => {
  const[nameValue, setNameValue] = useState({name,age})
  const [ageValue, setageValue] = useState(0)
  return (
    <div> 
         <input type="text" />
        <h1>ProfileName: {nameValue} </h1>
          <h2>Age :{ageValue} </h2>
    </div>
  )
}

export default Profile