import { Button } from "antd";
import axios from "axios";
import { useState } from "react";
import type { list } from "./TodoList";

interface AddWorkProps {
  setList: React.Dispatch<React.SetStateAction<list[]>>;
}

export default function AddWork({ setList }: AddWorkProps) {
  const [newJob, setNewJob] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAdd = async () => {
    const jobName = newJob.trim();
    if (!jobName) {
      setError("Tên công việc không được để trống!");
      return;
    }
    setIsLoading(true);
    setError("");
    const res = await axios.get("http://localhost:3000/TodoList");
      const isDuplicate = res.data.some(
        (item: list) => item.name.toLowerCase() === jobName.toLowerCase()
      );
      if (isDuplicate) {
        setError("Tên công việc không được trùng!");
        setIsLoading(false);
        return;
      }
      const job = { name: jobName, status: false };
      const addRes = await axios.post("http://localhost:3000/TodoList", job);
      setList((prev) => [...prev, addRes.data]);
      setNewJob("");
      setError("");
      
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewJob(e.target.value);
    setError("");
  };

  return (
    <div className="p-3 mb-5 rounded-md" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <form onSubmit={e => { e.preventDefault(); handleAdd(); }}>
        <input
          type="text"
          placeholder="Nhập Tên Công Việc"
          className={`w-full p-2.5 border rounded-md mb-2 ${error ? "border-red-500" : "border-gray-300"}`}
          value={newJob}
          onChange={handleChange}
        />
        {error && (
          <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        <Button
          color="primary"
          variant="solid"
          size={"large"}
          className="w-full"
          onClick={handleAdd}
          loading={isLoading}
        >
          Thêm công việc
        </Button>
      </form>
    </div>
  );
}