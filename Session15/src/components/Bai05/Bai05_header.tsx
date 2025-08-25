import { Component } from 'react'

interface Props {
  onSearch: (searchTerm: string) => void;
  onSort: (sortBy: string) => void;
}

interface State {
  searchValue: string;
}

export default class Bai05_header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }


  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '15px'
        }}>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
            Quản lý sinh viên
          </h2>
          <button 
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Thêm mới sinh viên
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
          gap: '10px'
        }}>
          <select 
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            <option value="">Sắp xếp theo tuổi</option>
            <option value="name">Sắp xếp theo tên</option>
            <option value="id">Sắp xếp theo MSV</option>
          </select>
          
          <input 
            type="text"
            placeholder="Tìm kiếm từ khóa theo tên hoặc email"
            value={this.state.searchValue}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              width: '300px'
            }}
          />
        </div>
      </div>
    )
  }
}