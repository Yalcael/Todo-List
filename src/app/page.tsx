"use client";
import { useState } from "react";
import Center from "@/components/Center"
import ToDoList from "@/components/ToDoList";
import Title from "@/components/Title";

const Page: React.FC = () => {

  return (
    <Center>
      <Title text="To Do List" />
      <ToDoList />
    </Center>
  )
}

export default Page