import { useContext, useRef } from "react"
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css'

const NewTodo: React.FC= () => {
  const todosCtx = useContext(TodosContext)
  
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
  
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }

    todosCtx.addTodo(enteredText)
  }

  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo text</label>
    <input id="text" type="text" ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo