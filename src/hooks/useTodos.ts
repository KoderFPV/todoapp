import { useState, useEffect } from "react";
import { ITodo } from "../interfaces/todos";
import { getTodos } from "../services/todos";

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      (async () => {
        const todos = await getTodos();
        setTodos(todos);
      })()

    },[]);

    const refreshTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    }

    return {
        todos,
        refreshTodos,
    }
}

