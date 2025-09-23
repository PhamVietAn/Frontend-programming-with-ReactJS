import type { Student } from '../redux/reducers/studentReducer';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Toolbar from '../components/Toolbar';
import { useReducer } from 'react';
import studentReducer, { initialStudents } from '../redux/reducers/studentReducer';
import React from 'react';

const StudentManagement = () => {
  const [students, dispatch] = useReducer(studentReducer, initialStudents);
  const [editingStudent, setEditingStudent] = React.useState<Student | null>(null);

  const handleAddStudent = (student: Student) => {
    dispatch({ type: 'ADD_STUDENT', payload: student });
  };

  const handleRemoveStudent = (id: string) => {
    dispatch({ type: 'REMOVE_STUDENT', payload: id });
  };

  const handleSearch = (keyword: string) => {
    dispatch({ type: 'SEARCH_STUDENT', payload: keyword });
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
  };

  const handleUpdateStudent = (student: Student) => {
    dispatch({ type: 'UPDATE_STUDENT', payload: student });
    setEditingStudent(null);
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList
          students={students}
          onRemove={handleRemoveStudent}
          onEdit={handleEditStudent}
        />
      </div>
      <StudentForm
        onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent}
        students={students}
        editingStudent={editingStudent}
        onCancelEdit={() => setEditingStudent(null)}
      />
    </div>
  );
};

export default StudentManagement;