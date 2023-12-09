import React from 'react'

interface ToDoProps {
  done:boolean, 
  text:string, 
  updateDone:any,
   id:number
  };

const ToDo = ({done, text, updateDone, id} : ToDoProps) => {
  return (
    <li className={`text-2xl font-bold mt-3 ${done ? "text-green-400 line-through" : "text-red-400"}`} onClick={() => updateDone(id)}>{text}</li>
  )
}

export default ToDo