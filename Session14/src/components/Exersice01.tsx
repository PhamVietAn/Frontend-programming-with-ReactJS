import { Component } from 'react'

interface State {
  userName: string;
}

export default class Exercise01 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: "Pham Viet An"
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.userName}!</h1>
      </div>
    )
  }
}
