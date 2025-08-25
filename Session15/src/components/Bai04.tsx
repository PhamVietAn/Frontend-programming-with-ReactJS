import { Component } from 'react'

interface State {
    text: string,
    submitted: boolean
}

export default class Bai04 extends Component<object, State> {
  constructor(prop: object) {
    super(prop);
    this.state = {
      text: '',
      submitted: false
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ text: e.target.value, submitted: false });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div>
        <p style={{ margin: '25px 0px 0px' }}>Tiến độ hoàn thành: {this.state.submitted && this.state.text}%</p>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="range" id="rangeInput" value={this.state.text} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
