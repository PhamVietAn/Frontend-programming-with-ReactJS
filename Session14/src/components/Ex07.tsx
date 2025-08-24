import React, { Component } from 'react'

interface User {
  studentName: string;
  email: string;
  password: string;
  address: string;
  id: number;
}

interface State {
  studentName: string;
  email: string;
  password: string;
  address: string;
  message: string;
}

export default class Ex07 extends Component<object, State> {
  private studentNameRef: React.RefObject<HTMLInputElement | null>;

  constructor(props: object) {
    super(props);
    this.state = {
      studentName: '',
      email: '',
      password: '',
      address: '',
      message: ''
    };
    this.studentNameRef = React.createRef();
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
      message: ''
    } as Pick<State, keyof State>);
  }

  validateForm = (): boolean => {
    const { studentName, email, password } = this.state;
    
    if (!studentName.trim() || !email.trim() || !password.trim()) {
      this.setState({ message: 'Tên sinh viên, Email và Mật khẩu không được để trống!' });
      return false;
    }

    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const emailExists = existingUsers.some((user: User) => user.email === email);
    
    if (emailExists) {
      this.setState({ message: 'Email đã tồn tại, vui lòng sử dụng email khác!' });
      return false;
    }

    return true;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }

    const newUser = {
      studentName: this.state.studentName,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      id: Date.now()
    };

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    this.setState({
      studentName: '',
      email: '',
      password: '',
      address: '',
      message: 'Đăng ký tài khoản thành công!'
    });

    if (this.studentNameRef.current) {
      this.studentNameRef.current.focus();
    }
  }

  render() {
    const { studentName, email, password, address, message } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Đăng ký tài khoản</h2>
        
        {message && (
          <div style={{ 
            padding: '10px', 
            marginBottom: '15px', 
            backgroundColor: message.includes('thành công') ? '#d4edda' : '#f8d7da',
            color: message.includes('thành công') ? '#155724' : '#721c24',
            border: `1px solid ${message.includes('thành công') ? '#c3e6cb' : '#f5c6cb'}`,
            borderRadius: '4px'
          }}>
            {message}
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="studentName">Tên sinh viên</label>
            <input
              ref={this.studentNameRef}
              type="text"
              id="studentName"
              name="studentName"
              value={studentName}
              onChange={this.handleInputChange}
              style={{ 
                width: '95%', 
                padding: '8px', 
                marginTop: '5px', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              placeholder="Nhập tên sinh viên"
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              style={{ 
                width: '95%', 
                padding: '8px', 
                marginTop: '5px', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              placeholder="Nhập email"
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              style={{ 
                width: '95%', 
                padding: '8px', 
                marginTop: '5px', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              placeholder="Nhập mật khẩu"
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="address">Số điện thoại</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={this.handleInputChange}
              style={{ 
                width: '95%', 
                padding: '8px', 
                marginTop: '5px', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              placeholder="Nhập số điện thoại"
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Đăng ký
          </button>
        </form>
      </div>
    )
  }
}