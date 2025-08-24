import { Component } from 'react'

interface State {
  gender: string;
  submitted: boolean;
}

export default class Ex06 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: '',
      submitted: false
    };
  }

  handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      gender: e.target.value,
      submitted: false
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Giới tính: {this.state.submitted && this.state.gender && (<>{this.state.gender}</>)}</label>
            <div style={{ marginTop: '10px' }}>
              <div style={{ marginBottom: '8px' }}>
                <input
                  type="radio"
                  id="nam"
                  name="gender"
                  value="Nam"
                  checked={this.state.gender === 'Nam'}
                  onChange={this.handleRadioChange}
                />
                <label htmlFor="nam" style={{ marginLeft: '5px' }}>Nam</label>
              </div>
              
              <div style={{ marginBottom: '8px' }}>
                <input
                  type="radio"
                  id="nu"
                  name="gender"
                  value="Nữ"
                  checked={this.state.gender === 'Nữ'}
                  onChange={this.handleRadioChange}
                />
                <label htmlFor="nu" style={{ marginLeft: '5px' }}>Nữ</label>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <input
                  type="radio"
                  id="khac"
                  name="gender"
                  value="Khác"
                  checked={this.state.gender === 'Khác'}
                  onChange={this.handleRadioChange}
                />
                <label htmlFor="khac" style={{ marginLeft: '5px' }}>Khác</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}