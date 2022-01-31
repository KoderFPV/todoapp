import { useState } from 'react';
import { addTodo as addTodoToDb } from '../services/todos';

export const useAddTodo = () => {
    const [title, setTitle] = useState('');
    const [due, setDue] = useState(new Date().toISOString());

    const addTodo = async () => {
        await addTodoToDb(title, due);
        setTitle('');
        setDue('');
    };

    return {
        title,
        due,
        setTitle,
        setDue,
        addTodo,
    }
}