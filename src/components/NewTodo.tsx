import { useRef } from "react"

const NewTodo = () => {
  // typescript doesn't know we'll connect it to an input element
  // because we could connect it to any html element
  // so assign it to HTMLInputElement and provide an init value
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    // current is what holds the actual value
    // it's optional because the ref connection isn't initialized to a value
    // so if there's no connection established yet it will be null
    // const enteredText = todoTextInputRef.current?.value
    // if you know for sure it will never be null you can use ...current!.value
    const enteredText = todoTextInputRef.current!.value
  }

  return <form onSubmit={submitHandler}>
    <label htmlFor="text">Todo text</label>
    <input id="text" type="text" ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo