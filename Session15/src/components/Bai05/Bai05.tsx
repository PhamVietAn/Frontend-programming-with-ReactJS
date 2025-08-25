import { Component } from 'react'
import Bai05_header from './Bai05_header'
import Bai05_table from './Bai05_table'
import Bai05_pagination from './Bai05_pagination'

export interface Student {
  id: string;
  name: string;
  birthday: string;
  email: string;
  status: 'Đang hoạt động' | 'Ngừng hoạt động';
}

interface State {
  students: Student[];
}

export default class Bai05 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        {
          id: 'SV001',
          name: 'Phạm Việt An',
          birthday: '24/04/2006',
          email: 'pva@gmail.com',
          status: 'Đang hoạt động'
        },
        {
          id: 'SV002',
          name: 'Nguyễn Thị Quỳnh Anh',
          birthday: '08/03/2006',
          email: 'ntqa@gmail.com',
          status: 'Ngừng hoạt động'
        }
      ]
    };
  }

  handleSearch = (searchTerm: string) => {
    console.log('Search:', searchTerm);
  }

  handleSort = (sortBy: string) => {
    console.log('Sort by:', sortBy);
  }

  handlePageChange = (page: number) => {
    console.log('Page change:', page);
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Bai05_header onSearch={this.handleSearch} onSort={this.handleSort} />
        <Bai05_table students={this.state.students}/>
        <Bai05_pagination onPageChange={this.handlePageChange} />
      </div>
    );
  }
}   