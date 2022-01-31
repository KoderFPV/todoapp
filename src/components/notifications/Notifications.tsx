import './Notifications.css';
import { useEffect, useState } from "react"
import { ITodo } from "../../interfaces/todos";
import { getOverdueTodos } from "../../services/todos";

const INTERVAL_TIME_MS = 2000;

export const Notifications = () => {
    const [todosIds, setTodosIds] = useState<string[]>([]);
    const [todosToShow, setTodosToShow] = useState<ITodo[]>([]);

    useEffect(() => {
        const interval = setInterval(async () => {
            if (!document.hidden) {
                setTodosToShow([]);
            }

            const overduetodo = await getOverdueTodos();
            
            const deduptodos = overduetodo.filter(todo => !todosIds.includes(todo.id));

            if (deduptodos.length) {
                setTodosToShow([...todosToShow, ...deduptodos]);
                setTodosIds([...todosIds, ...deduptodos.map(todo => todo.id)]);
            }

        }, INTERVAL_TIME_MS);

        return () => clearInterval(interval);
    }, [todosIds, todosToShow]);

    return <>
        {
            todosToShow.map(todo => <div className="notification" key={todo.id}>{todo.title}</div>)
        }
    </>
}