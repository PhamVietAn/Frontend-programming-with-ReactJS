import React, { useReducer, useEffect, useState } from 'react';

interface Task { 
    id: number, 
    name: string 

}
interface Action { type: 'ADD' | 'REMOVE' | 'INIT', name?: string, id?: number, tasks?: Task[] }

export default function Ex07() {
    const [tasks, dispatch] = useReducer(
        (state: Task[], action: Action) => {
            switch (action.type) {
                case 'ADD':
                    return action.name && action.name.trim()
                        ? [...state, { id: Date.now(), name: action.name.trim() }]
                        : state;
                case 'REMOVE':
                    return state.filter(task => task.id !== action.id);
                case 'INIT':
                    return action.tasks || [];
                default:
                    return state;
            }
        },
        []
    );
    const [input, setInput] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('tasks');
        if (saved) dispatch({ type: 'INIT', tasks: JSON.parse(saved) });
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'ADD', name: input });
        setInput('');
    };

    const handleRemove = (id: number) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa công việc này?')) {
            dispatch({ type: 'REMOVE', id });
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <form onSubmit={handleAdd}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Nhập tên công việc"
                    style={{ width: '100%', padding: 8, marginBottom: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
                />
            </form>
            <div style={{ background: '#fff', borderRadius: 6, boxShadow: '0 1px 4px rgba(0,0,0,0.07)', padding: 0 }}>
                {tasks.map(task => (
                    <div key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
                        <span>{task.name}</span>
                        <button
                            onClick={() => handleRemove(task.id)}
                            style={{ background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontSize: 16, cursor: 'pointer' }}
                        >
                            Xóa
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
