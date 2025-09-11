import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Ex04 from "./Ex04";


export default function StudentSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value,setValue] = useState(searchParams.get("studentName") || "");

    const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(value ? { studentName: value } : {});
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 max-w-xl mx-auto mt-8"
      >
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Tìm kiếm
        </button>
      </form>
      <Ex04 />
    </>
  )
}
