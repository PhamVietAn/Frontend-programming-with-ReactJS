import React, { useRef } from 'react';
import type { SelectChangeEvent } from '@mui/material';
import {
  Button,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import type { Student } from '../redux/reducers/studentReducer';

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  students: Student[];
  editingStudent?: Student | null;
  onCancelEdit?: () => void;
}

type ErrorState = {
  id?: string;
  name?: string;
  age?: string;
  birthday?: string;
  hometown?: string;
  address?: string;
};


export default function StudentForm({
  onSubmit,
  students,
  editingStudent,
  onCancelEdit,
}: StudentFormProps) {
  const [form, setForm] = React.useState<Student>(
    editingStudent || {
      id: '',
      name: '',
      age: 0,
      gender: 'Nam',
      birthday: '',
      hometown: '',
      address: '',
    }
  );
  const [error, setError] = React.useState<ErrorState>({});
  const idRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (editingStudent) setForm(editingStudent);
    else setForm({
      id: '',
      name: '',
      age: 0,
      gender: 'Nam',
      birthday: '',
      hometown: '',
      address: '',
    });
    setError({});
  }, [editingStudent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setForm({ ...form, [name as string]: value });
  setError(prev => ({ ...prev, [name as string]: undefined }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
  const { name, value } = event.target;
  setForm({ ...form, [name as string]: value });
  setError(prev => ({ ...prev, [name as string]: undefined }));
  };

  const handleSubmit = () => {
    const newError: ErrorState = {};

    if (!form.id.trim()) {
      newError.id = 'Mã sinh viên không được để trống';
    } else if (
      students.some(
        s => s.id === form.id.trim() && s.id !== editingStudent?.id
      )
    ) {
      newError.id = 'Mã sinh viên đã tồn tại';
    }

    if (!form.name.trim()) {
      newError.name = 'Tên sinh viên không được để trống';
    } else if (
      students.some(
        s => s.name === form.name.trim() && s.id !== editingStudent?.id
      )
    ) {
      newError.name = 'Tên sinh viên đã tồn tại';
    }

    if (!form.age && form.age !== 0) {
      newError.age = 'Tuổi không được để trống';
    } else if (form.age < 0) {
      newError.age = 'Tuổi không hợp lệ';
    }

    if (!form.birthday) {
      newError.birthday = 'Ngày sinh không được để trống';
    } else if (new Date(form.birthday) > new Date()) {
      newError.birthday = 'Ngày sinh không được là ngày trong tương lai';
    }

    if (!form.hometown?.trim()) {
      newError.hometown = 'Nơi sinh không được để trống';
    }

    if (!form.address?.trim()) {
      newError.address = 'Địa chỉ không được để trống';
    }

    setError(newError);

    if (Object.keys(newError).length > 0) {
      if (newError.id) idRef.current?.focus();
      return;
    }

    onSubmit(form);
    setForm({
      id: '',
      name: '',
      age: 0,
      gender: 'Nam',
      birthday: '',
      hometown: '',
      address: '',
    });
    setError({});
    idRef.current?.focus();
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">
        {editingStudent ? 'Cập nhật thông tin sinh viên' : 'Thông Tin Sinh Viên'}
      </h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
          inputRef={idRef}
          error={!!error.id}
          helperText={error.id}
          disabled={!!editingStudent}
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          error={!!error.name}
          helperText={error.name}
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
          error={!!error.age}
          helperText={error.age}
        />
        <Select name="gender" value={form.gender} onChange={handleSelectChange} fullWidth>
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={!!error.birthday}
          helperText={error.birthday}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          fullWidth
          error={!!error.hometown}
          helperText={error.hometown}
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
          error={!!error.address}
          helperText={error.address}
        />
        <div className="flex gap-2">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {editingStudent ? 'Cập nhật' : 'Submit'}
          </Button>
          {editingStudent && (
            <Button variant="outlined" color="secondary" onClick={onCancelEdit}>
              Hủy
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}