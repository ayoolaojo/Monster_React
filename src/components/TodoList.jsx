import { useState } from "react"




const TodoList = () => {
  const [inputValue,setInputValue] = useState('')
const [todos,setTodos] = useState([])



  const handleInputChange = (e)=> {
      e.preventDefault()
      setInputValue(e.target.value)
  }

  const handleTodo =(e)=> {
    e.preventDefault()
    if(inputValue.trim() != '' && inputValue.length >= 3){
      setTodos([...todos,inputValue])
      setInputValue('')
    }

  }


  return (
    <div>
      <input type="text" value={inputValue} placeholder="enter your todo" onChange={handleInputChange} />
      <button onClick={handleTodo}>Add Todo</button>

       <ul>
        {todos.map((todo,index)=>(
          <li key={index}>
            {todo}
          </li>
        ))}
       </ul>
    </div>
  )
}

export default TodoList