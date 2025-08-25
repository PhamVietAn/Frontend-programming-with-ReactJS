import { Component } from 'react'

interface State {
    email: string
}

export default class Bai01 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  
  const product = {
    email: this.state.email
  };
  
  console.log(product);
}

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="emailInput">Email</label>
          <input type="text" id="emailInput" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
