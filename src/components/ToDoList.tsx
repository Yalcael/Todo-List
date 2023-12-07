import { useState } from 'react';
import ToDo from './ToDo';

interface item {
    id: number;
    text: string;
    done: boolean;
}

const ToDoList = () => {
    const [todos, setTodos] = useState<item[]>([
        { id: 1, text: "Training with Shrek", done: false },
        { id: 2, text: "SoloQ", done: true },
        { id: 3, text: "Sleep with Shrek", done: false },
    ]);

    return (
        <>
            <ul>
                {todos.map((todo: item, index: number) => (
                   <ToDo key={index} text={todo.text} done={todo.done} />
                ))}
            </ul>
            <input className="text-black text-xl font-bold h-9 w-40 rounded-lg p-2 border focus:outline-none ml-2 mt-10" type="text" placeholder="Todo List" />
            <button className="text-xl font-bold h-7 w-14 text-pink-700 rounded-md mt-2 border border-pink-700 cursor-pointer">Add</button>
        </>
    )
}

export default ToDoList