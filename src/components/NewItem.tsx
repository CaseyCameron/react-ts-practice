const NewItem = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    
  }

  return <form onSubmit={submitHandler}>
    <label htmlFor="text">Todo text</label>
    <input id="text" type="text" />
    <button>Add Todo</button>
  </form>
}

export default NewItem