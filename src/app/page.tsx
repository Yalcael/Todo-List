import Center from "@/components/Center"

const page = () => {
  return (
    <Center>
      <h1 className="text-3xl font-bold">Todo List</h1>
      <ul>
        <li className="text-2xl font-bold mt-3"> text 1 </li>
        <li className="text-2xl font-bold mt-3"> text 2 </li>
      </ul>
      <input className="text-black text-xl font-bold h-9 w-40 rounded-lg p-2 border focus:outline-none ml-2 mt-10" type="text" placeholder="Todo List" />
      <button className="text-xl font-bold h-7 w-14 text-pink-700 rounded-md mt-2 border border-pink-700">Add</button>
    </Center>
  )
}

export default page