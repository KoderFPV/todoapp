import { ITodo } from '../interfaces/todos';
import { 
  setTodoCompletedState as setTodoCompletedStateInDb, 
  deleteTodo as deleteTodoFromDb
} from '../services/todos';

export const useTodo = (todo: ITodo) => {
  const setCompletedState = async (state: boolean) => {
    setTodoCompletedStateInDb(state, todo.id)
  }

  const deleteTodo = async () => {
    await deleteTodoFromDb(todo.id);
  }

    return {
      setCompletedState,
      deleteTodo,
    }
}