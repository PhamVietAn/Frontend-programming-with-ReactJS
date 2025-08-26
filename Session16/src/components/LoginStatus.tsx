import  { Component } from 'react'

interface State {
    isLoggedIn: boolean;
}

export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  toggleLogin = (): void => {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  render() {
    return (
      <div style={{width: '300px', textAlign: 'center', padding:"10px", margin: "auto", backgroundColor: "#242424"}}>
        <div style={{backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '10px'}}>
          {this.state.isLoggedIn ? (
              <>
              <h3 style={{color: "black"}}>Xin chào, User!</h3>
              <button onClick={this.toggleLogin} style={{color: "white", backgroundColor: "#1976d2", padding: "10px 20px", border: "none", borderRadius: "6px"}}>Đăng Xuất</button>
              </>
          ) : (
              <>
              <h3 style={{color: "black"}}>Vui lòng đăng nhập để tiếp tục</h3>
              <button onClick={this.toggleLogin} style={{color: "white", backgroundColor: "#1976d2", padding: "10px 20px", border: "none", borderRadius: "6px"}}>Đăng Nhập</button>
              </>
          )}
        </div>
      </div>
    )
  }
}
