import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <input type="text" placeholder= "enter what you'd like to do" />
        <button>Add to do</button>
    </div>
  )
}

export default TodoList