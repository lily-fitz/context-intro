import TodoItem from './TodoItem'

function TodoList({ todos, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default TodoList
