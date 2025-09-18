import Search_select_add from "./components/Search_select_add"
import "../src/App.css"
import Table from "./components/Table"
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);

  const handleAddSuccess = () => {
    setReload(prev => !prev);
  };

  return (
    <div className="py-10 w-fit flex flex-col gap-4 m-auto">
      <Search_select_add onSearch={setSearch} search={search} onAddSuccess={handleAddSuccess} />
      <Table search={search} reload={reload} />
    </div>
  );
}

export default App