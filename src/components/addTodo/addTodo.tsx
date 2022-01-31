import './addTodo.css';
import { ChangeEvent, FormEvent } from 'react'
import { useAddTodo } from '../../hooks/useAddTodo';
import moment from 'moment';

interface IAddTodo {
  refreshTodos(): void;
}

export const AddTodo: React.FC<IAddTodo> = (props) => {
  const { due, title, setTitle, setDue, addTodo } = useAddTodo();

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      alert('You have to put title');
      return;
    }

    addTodo();
    props.refreshTodos();
  }

  const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.toUpperCase());
  }

  const handleSetDatetime = (e: ChangeEvent<HTMLInputElement>) => {
    setDue(e.target.value.toUpperCase());
  }


  return (
    <form onSubmit={handleAddTodo} name='addTodo'>
      <input
        type='text'
        name='title'
        onChange={handleSetTitle}
        value={title}
        placeholder='Enter todo title' />
      <input 
        type="datetime-local" 
        id="todo-due-time" 
        value={moment(due).format('yyyy-MM-DDThh:mm')}
        onChange={handleSetDatetime}
        name="todo-due-time">
      </input>
      <input type='submit' value="Add todo" />
    </form>
  )
}