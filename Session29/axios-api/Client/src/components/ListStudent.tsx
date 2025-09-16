import axios from "axios";
import React from "react";

interface Student {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  create_at: string;
}

function getAllStudent(setStudent: React.Dispatch<React.SetStateAction<Student[]>>) {
  axios.get("http://localhost:3000/student")
    .then(response => {
      setStudent(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error("Lỗi khi lấy danh sách sinh viên:", error);
    });
}

function getStudentById(id: number) {
  axios.get(`http://localhost:3000/student/${id}`)
    .then(response => {
      if (response.data) {
        console.log(response.data);
      } else {
        console.log("Không tìm thấy bản ghi");
      }
    })
    .catch(() => {
      console.log("Không tìm thấy bản ghi");
    });
}

function createStudent(setStudent: React.Dispatch<React.SetStateAction<Student[]>>) {
  const student = {
    name: "Nguyen Van E",
    email: "nguyenvane@gmail.com",
    address: "Hue",
    phone: "0911112222",
    status: true,
    create_at: "2025",
  };

  axios.post("http://localhost:3000/student", student)
    .then(response => {
      console.log("Kết quả trả về từ server:", response.data);
      getAllStudent(setStudent);
    })
    .catch(error => {
      console.error("Lỗi khi thêm sinh viên:", error);
    });
}

export default function ListStudent() {
  const [studentList, setStudentList] = React.useState<Student[]>([]);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3000/student/${id}`)
      .then(() => {
        setStudentList(prev => prev.filter(u => u.id !== id));
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    getAllStudent(setStudentList);
    getStudentById(1);
    getStudentById(6);
  }, []);

  return (
    <div>
      <button onClick={() => getStudentById(1)}>Get Student by ID</button>
      <button onClick={() => createStudent(setStudentList)}>Create Student</button>
      <div>
        <h2>Quản lý sinh viên</h2>
        <button onClick={() => createStudent(setStudentList)}>Thêm mới sinh viên</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}