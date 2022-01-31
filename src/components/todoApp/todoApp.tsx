import { AddTodo } from '../addTodo/addTodo'
import { Todo } from '../todo/todo'
import { useTodos } from '../../hooks/useTodos'

export const TodoApp = () => {
  const { todos, refreshTodos } = useTodos();

  return (
    <div>
      <AddTodo refreshTodos={refreshTodos} />
      {todos.map((todo) => (
        <Todo
          refreshTodos={refreshTodos}
          todo={todo} 
        />
      ))}
    </div>
  )
}

