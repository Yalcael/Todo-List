import React from 'react'

const ToDo = ({done, text} : {done:boolean, text:string}) => {
  return (
    <li className={`text-2xl font-bold mt-3 ${done ? "text-green-400" : "text-red-400"}`}>{text}</li>
  )
}

export default ToDo