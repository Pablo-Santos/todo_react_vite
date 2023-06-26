import { useState } from "react"

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return
    addTodo(value, category)
    setValue("")
    setCategory("")
  }

  return (
    <div className='todo_form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o titulo" onChange={(e)=>setValue(e.target.value)} value={value} />
        <select onChange={(e)=>setCategory(e.target.value)} value={category} >
        <option value="">Selecioen uma categoria</option>
        <option value="trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm