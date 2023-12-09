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
        { id: 2, text: "", done: false },
    ]);

    const [text, setText] = useState("")

    const updateDone = (id: number) => {
        // const newTodos = [...todos]
        // const objIndex = newTodos.findIndex((obj => obj.id === id));
        // newTodos[objIndex].done = !newTodos[objIndex].done
        // setTodos(newTodos)
        setTodos(
            todos.map((todo:item) => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
                return todo
            }
            )
        )
    };

    const handleAddTodo = (e: React.MouseEvent<HTMLElement>) => {
        setTodos([...todos, {
            id: todos.length + 1,
            text: text,
            done: false
        }])
    };

    return (
        <>
            <ul>
                {todos.map((todo: item, index: number) => (
                    <ToDo key={index} text={todo.text} done={todo.done} updateDone={updateDone} id={todo.id} />
                ))}
            </ul>
            <input className="text-black text-xl font-bold h-9 w-40 rounded-lg p-2 border focus:outline-none ml-2 mt-10" type="text" placeholder='New Line' onChange={(e) => setText(e.target.value)} />
            <button className="text-xl font-bold h-7 w-14 text-pink-700 rounded-md mt-2 border border-pink-700 cursor-pointer hover:bg-pink-100" onClick={handleAddTodo}>Add</button>
        </>
    )
}

export default ToDoList