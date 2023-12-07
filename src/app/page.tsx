"use client";
import { useState } from "react";
import Center from "@/components/Center"
import ToDoList from "@/components/ToDoList";
import Title from "@/components/Title";

interface item {
  id: number;
  text: string;
  done: boolean;
}

const Page: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Training with Shrek", done: false },
    { id: 2, text: "SoloQ", done: true },
    { id: 3, text: "Sleep with Shrek", done: false },
  ]);

  return (
    <Center>
      <Title text="To Do List" />
      <ToDoList />
    </Center>
  )
}

export default Page