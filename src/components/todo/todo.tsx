import './todo.css';
import { ITodo } from '../../interfaces/todos';
import { useTodo } from '../../hooks/useTodo';
import { useState } from 'react';
import moment from 'moment';

interface ITodoFC {
  todo: ITodo;
  refreshTodos(): void;
}

export const Todo: React.FC<ITodoFC> = (props) => {
  const [ completeCheckbox, setCompleteCheckbox ] = useState(props.todo.completed);
  const { deleteTodo, setCompletedState } = useTodo(props.todo);

  const handleTodoCompleteStateChange = async () => {
    await setCompletedState(!completeCheckbox);
    await props.refreshTodos();
  }

  const handleTodoDelete = async () => {
    await deleteTodo();
    await props.refreshTodos();
  }

  const handleCheck = () => setCompleteCheckbox(!props.todo.completed);

  return (
    <div className='todo'>
      <div>
        <input 
          id={`checkbox-${props.todo.id}`} 
          name="checkbox" 
          checked={props.todo.completed}
          onChange={handleTodoCompleteStateChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${props.todo.id}`} 
          onClick={handleCheck} ></label>
      </div>
      <div className="title">{props.todo.title}</div>
        <div>{moment(props.todo.due).format('MMMM Do YYYY, h:mm:ss a')}</div>
        <div className="delete_button" onClick={handleTodoDelete}>Delete</div>
    </div>
  )
}