import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import type { Student } from '../redux/reducers/studentReducer';

export interface StudentListProps {
  students: Student[];
  onRemove: (id: string) => void;
  onEdit: (student: Student) => void;
}

export default function StudentList({ students = [], onRemove, onEdit }: StudentListProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const handleOpen = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleConfirmRemove = () => {
    if (selectedId) {
      onRemove(selectedId);
      handleClose();
    }
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Mã sinh viên</TableCell>
              <TableCell>Tên sinh viên</TableCell>
              <TableCell>Tuổi</TableCell>
              <TableCell>Giới tính</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Không có sinh viên nào được tìm thấy
                </TableCell>
              </TableRow>
            ) : (
              students.map((s, i) => (
                <TableRow key={s.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{s.id}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.age}</TableCell>
                  <TableCell>{s.gender}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="contained" color="error">
                    Xem
                    </Button>
                    <Button variant="contained" color="warning" onClick={() => onEdit(s)}>
                      Sửa
                    </Button>
                    <Button variant="contained" color="success" onClick={() => handleOpen(s.id)}>
                      Xóa
                    </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc chắn muốn xóa sinh viên này?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleConfirmRemove} color="error" variant="contained">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}