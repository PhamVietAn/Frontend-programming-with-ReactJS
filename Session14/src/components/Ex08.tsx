import React, { Component } from 'react'

interface User {
  studentName: string;
  email: string;
  password: string;
  address: string;
  id: number;
}

interface State {
  email: string;
  password: string;
  message: string;
}

export default class Ex08 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
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
    const { email, password } = this.state;
    
    // Kiểm tra các trường bắt buộc
    if (!email.trim() || !password.trim()) {
      this.setState({ message: 'Email và Mật khẩu không được để trống!' });
      return false;
    }

    return true;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (!this.validateForm()) {
      return;
    }

    // Lấy dữ liệu users từ localStorage
    const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Kiểm tra thông tin đăng nhập
    const user = existingUsers.find(
      (user: User) => user.email === this.state.email && user.password === this.state.password
    );

    if (user) {
      this.setState({ message: 'Đăng nhập thành công!' });
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      this.setState({ message: 'Đăng nhập thất bại!' });
    }
  }

  render() {
    const { email, password, message } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Đăng nhập tài khoản</h2>
        
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              style={{ 
                width: '94%', 
                padding: '8px', 
                marginTop: '5px', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              placeholder="Nhập email"
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              style={{ 
                width: '94%', 
                padding: '8px', 
                marginTop: '5px', 
                border: '1px solid #ccc', 
                borderRadius: '4px' 
              }}
              placeholder="Nhập mật khẩu"
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
            Đăng nhập
          </button>
        </form>
      </div>
    )
  }
}