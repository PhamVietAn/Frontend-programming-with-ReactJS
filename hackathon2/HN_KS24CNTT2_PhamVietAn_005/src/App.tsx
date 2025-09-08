import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Add from "./components/Add";
import ArchiveList from "./components/ArchiveList";
import type { List } from "./types/List";

const sampleData: List[] = [];

function App() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleDataChange = () => {
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div className="p-10 bg-[#f2f3f5] flex flex-col gap-10 min-h-screen">
            <Header />
            <Add onAdd={handleDataChange} />
            <ArchiveList 
                key={refreshKey} 
                data={sampleData} 
                onDataChange={handleDataChange} 
            />
        </div>
    );
}

export default App;