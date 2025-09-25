import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState, useRef } from 'react';

interface TaskFormProps {
  onAdd?: (title: string, priority: 'low' | 'medium' | 'high') => Promise<string | null>;
  onEdit?: (title: string, priority: 'low' | 'medium' | 'high') => Promise<string | null>;
  initialValue?: { title: string; priority: 'low' | 'medium' | 'high' };
  mode?: 'add' | 'edit';
}

const TaskForm: React.FC<TaskFormProps> = ({
  onAdd,
  onEdit,
  initialValue,
  mode = 'add',
}) => {
  const [title, setTitle] = useState(initialValue?.title || '');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(initialValue?.priority || 'medium');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let err: string | null = null;
    if (mode === 'add' && onAdd) {
      err = await onAdd(title, priority);
    }
    if (mode === 'edit' && onEdit) {
      err = await onEdit(title, priority);
    }
    if (err) {
      setError(err);
    } else {
      setTitle('');
      setPriority('medium');
      setError(null);
      inputRef.current?.focus();
    }
  };

  React.useEffect(() => {
    if (initialValue) {
      setTitle(initialValue.title);
      setPriority(initialValue.priority);
    }
  }, [initialValue]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        label={error ? error : mode === 'add' ? "Công việc mới" : "Cập nhật công việc"}
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
        error={!!error}
        inputRef={inputRef}
      />
      <FormControl size="small" className="w-36">
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          label="Ưu tiên"
        >
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        {mode === 'add' ? 'Thêm' : 'Cập nhật'}
      </Button>
      {mode === 'edit' && (
        <Button variant="outlined" onClick={() => setTitle('')}>
          Hủy
        </Button>
      )}
    </form>
  );
};

export default TaskForm;