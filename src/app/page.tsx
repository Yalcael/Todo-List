import Center from "@/components/Center"

const page = () => {
  return (
    <Center>
      <h1 className="text-3xl font-bold">Todo List</h1>
      <ul>
        <li className="text-2xl font-bold"> text 1 </li>
        <li className="text-2xl font-bold"> text 2 </li>
      </ul>
      <input className="text-black text-xl font-bold" type="text" placeholder="Todo List" />
      <button className="text-xl font-bold">Add</button>
    </Center>
  )
}

export default page