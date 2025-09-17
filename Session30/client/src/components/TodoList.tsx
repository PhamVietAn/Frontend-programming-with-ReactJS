
import { useEffect, useState } from "react";
import AddWork from "./AddWork";
import DeleteWork from "./DeleteWork";
import Filter from "./Filter";
import Header from "./Header";
import List from "./List";
import axios from "axios";

export interface list {
  id: number;
  name: string;
  status: boolean;
}

export default function TodoList() {
  const [list, setList] = useState<list[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/TodoList").then(res => setList(res.data));
  }, []);
  
  return (
    <div className="w-[560px] border border-black p-4 rounded-md bg-white text-black">
        <Header></Header>
        <AddWork setList={setList}></AddWork>
        <Filter></Filter>
        <List list={list} setList={setList}></List>
        <DeleteWork></DeleteWork>
    </div>
  )
}
