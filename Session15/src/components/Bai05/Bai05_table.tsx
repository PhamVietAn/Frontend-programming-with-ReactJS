import { Component } from 'react'
import type { Student } from './Bai05'

interface Props {
  students: Student[];
}

export default class Bai05_table extends Component<Props> {
  render() {
    const { students } = this.props;
    
    return (
      <div style={{ marginBottom: '20px' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '1px solid #ddd'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ 
                padding: '12px', 
                border: '1px solid #ddd', 
                textAlign: 'left',
                fontWeight: 'bold'
              }}>
                STT
              </th>
              <th style={{ 
                padding: '12px', 
                border: '1px solid #ddd', 
                textAlign: 'left',
                fontWeight: 'bold'
              }}>
                Mã sinh viên
              </th>
              <th style={{ 
                padding: '12px', 
                border: '1px solid #ddd', 
                textAlign: 'left',
                fontWeight: 'bold'
              }}>
                Tên sinh viên
              </th>
              <th style={{ 
                padding: '12px', 
                border: '1px solid #ddd', 
                textAlign: 'left',
                fontWeight: 'bold'
              }}>
                Ngày sinh
              </th>
              <th style={{ 
                padding: '12px', 
                border: '1px solid #ddd', 
                textAlign: 'left',
                fontWeight: 'bold'
              }}>
                Email
              </th>
              <th style={{ 
                padding: '12px', 
                border: '1px solid #ddd', 
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                Trạng thái
              </th>
              <th style={{ 
                padding: '12px', 
                border: '1px solid #ddd', 
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {index + 1}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {student.id}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {student.name}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {student.birthday}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {student.email}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: student.status === 'Đang hoạt động' ? '#d4edda' : '#f8d7da',
                    color: student.status === 'Đang hoạt động' ? '#155724' : '#721c24',
                    border: `1px solid ${student.status === 'Đang hoạt động' ? '#c3e6cb' : '#f5c6cb'}`
                  }}>
                    {student.status}
                  </span>
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                  <button 
                    style={{
                      backgroundColor: '#6c757d',
                      color: 'white',
                      border: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      marginRight: '5px'
                    }}
                  >
                    Chặn
                  </button>
                  <button 
                    style={{
                      backgroundColor: '#ffc107',
                      color: 'black',
                      border: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      marginRight: '5px'
                    }}
                  >
                    Sửa
                  </button>
                  <button 
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}