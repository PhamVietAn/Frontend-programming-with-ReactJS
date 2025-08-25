import { Component } from 'react'

interface State {
  color: string
  flag: boolean
}

export default class Bai02 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: '#000',
      flag: false
    };
  }

  handleColorChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ color: e.target.value, flag: false });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ flag: true });
  }

  render() {
    return (
      <div>
        <h1 style={{ marginBottom: '0px' }}>Color: {this.state.flag && this.state.color}</h1>
        <h3 style={{ margin: '5px 0px' }}>Form</h3>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="colorInput">màu sắc</label>
          <br />
          <input type="color" id="colorInput" value={this.state.color} onChange={this.handleColorChange} />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
