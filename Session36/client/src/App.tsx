import FilterControls from './components/FilterControls';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const mapApiTask = (apiTask: any): Task => ({
  id: apiTask.id.toString(),
  title: apiTask.name,
  completed: apiTask.status,
  priority: apiTask.important.toLowerCase() as 'low' | 'medium' | 'high',
});

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteTask, setDeleteTask] = useState<{ id: string, title: string } | null>(null);
  const [editTask, setEditTask] = useState<{ id: string, title: string, priority: 'low' | 'medium' | 'high' } | null>(null);

  useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    axios.get('http://localhost:3000/tasks')
      .then(res => {
        setTasks(res.data.map(mapApiTask));
      })
      .finally(() => {
        setLoading(false);
      });
  }, 2000);
}, []);

  const handleAdd = async (title: string, priority: 'low' | 'medium' | 'high'): Promise<string | null> => {
    if (!title.trim()) return "Công việc không được bỏ trống";
    if (tasks.some(t => t.title.trim().toLowerCase() === title.trim().toLowerCase())) {
      return "Công việc đã tồn tại";
    }
    if (!priority) return "Phải chọn độ ưu tiên";

    const maxId = tasks.reduce((max, t) => {
    const idNum = Number(t.id);
    return !isNaN(idNum) && idNum > max ? idNum : max;
  }, 0);

    try {
      await axios.post('http://localhost:3000/tasks', {
        id: maxId + 1,
        name: title,
        important: priority.toUpperCase(),
        status: false,
      });
      const res = await axios.get('http://localhost:3000/tasks');
      setTasks(res.data.map(mapApiTask));
      return null;
    } catch {
      return "Lỗi khi thêm công việc";
    }
  };

  const handleToggle = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDeleteClick = (task: { id: string, title: string }) => {
    setDeleteTask(task);
  };

  const handleConfirmDelete = async () => {
    if (!deleteTask) return;
    await axios.delete(`http://localhost:3000/tasks/${deleteTask.id}`);
      const res = await axios.get('http://localhost:3000/tasks');
      setTasks(res.data.map(mapApiTask));
      setDeleteTask(null);
  }
  const handleCancelDelete = () => {
    setDeleteTask(null);
  };

  const handleEditClick = (task: Task) => {
    setEditTask({ id: task.id, title: task.title, priority: task.priority });
  };

  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === 'all' ||
      (filters.status === 'completed' && t.completed) ||
      (filters.status === 'active' && !t.completed);

    const matchPriority = filters.priority === 'all' || t.priority === filters.priority;

    const matchSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
  <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen relative">
    {loading && (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.15)',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress size={80} />
      </div>
    )}
    <Dialog open={!!deleteTask} onClose={handleCancelDelete}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>
          <div className="flex items-center gap-2">
            <span style={{ color: '#f44336' }}>
              <ErrorOutlineIcon />
            </span>
            <span>
              Bạn có chắc chắn muốn xóa công việc <b>{deleteTask?.title}</b> không?
            </span>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Hủy</Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">Xóa</Button>
        </DialogActions>
      </Dialog>
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      {editTask ? (
      <TaskForm
        mode="edit"
        initialValue={{ title: editTask.title, priority: editTask.priority }}
        onEdit={async (title, priority) => {
          // Validate
          if (!title.trim()) return "Công việc không được bỏ trống";
          if (
            tasks.some(
              (t) =>
                t.title.trim().toLowerCase() === title.trim().toLowerCase() &&
                t.id !== editTask.id
            )
          ) {
            return "Công việc đã tồn tại";
          }
          if (!priority) return "Phải chọn độ ưu tiên";
          // Gọi API cập nhật
          await axios.put(`http://localhost:3000/tasks/${editTask.id}`, {
            id: editTask.id,
            name: title,
            important: priority.toUpperCase(),
            status: tasks.find((t) => t.id === editTask.id)?.completed ?? false,
          });
          const res = await axios.get('http://localhost:3000/tasks');
          setTasks(res.data.map(mapApiTask));
          setEditTask(null);
          return null;
        }}
      />
    ) : (
      <TaskForm onAdd={handleAdd} />
    )}
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={handleToggle}
            onDelete={() => handleDeleteClick({ id: task.id, title: task.title })}
            onEdit={() => handleEditClick(task)}
          />
        ))}
      </div>
  </div>
  );  
};

export default App;