function TodoItem({ todo, handleDelete }) {
  return (
    <div>
      <p>{todo.text}</p>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
