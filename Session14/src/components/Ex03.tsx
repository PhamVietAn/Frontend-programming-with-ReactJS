import { Component } from 'react'

interface State {
  company: string;
}

export default class Ex03 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      company: "Rikkei Academy"
    };
  }

  handleChangeState = (): void => {
    this.setState({
      company: this.state.company === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy"
    });
  }

  render() {
    return (
      <div>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.handleChangeState}> Change state </button>
      </div>
    )
  }
}