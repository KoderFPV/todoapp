import * as uuid from 'uuid';
import { ITodo } from "../interfaces/todos";
import { db } from "./database";
import moment from 'moment';

export const addTodo = async (title: string, due: string) => {
  const id =  uuid.v4();

      const todo = {
          id,
          title,
          due,
          completed: false,
        };

      db.setItem(id, todo);
}

export const getTodos = async (callback?: (todo: ITodo[]) => void): Promise<ITodo[]> => {
    const ids = await db.keys();

    const todos: any = await (await Promise.all(ids.map(async (id) => await db.getItem(id)))).filter(todo => todo !== null);
    callback?.(todos);

    return todos;
}

export const getOverdueTodos = async () => {
  const todos = await getTodos();
  
  return todos.filter(todo => moment(todo.due).isBefore(moment()) && !todo.completed);
}

export const setTodoCompletedState = async (completeState: boolean, id: string) => {
      const todo: ITodo | null = await db.getItem(id);

      if (todo) {
        todo.completed = completeState;

        await db.setItem(id, todo);
      }
}

export const deleteTodo = async (id: string) => {
  await db.removeItem(id);
}