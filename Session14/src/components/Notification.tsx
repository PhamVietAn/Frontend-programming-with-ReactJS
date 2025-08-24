import { Component } from 'react'

export default class Notification extends Component<object, object> {
  componentDidMount(): void {
    console.log("Component đã được mount!");
  }

  render() {
    return (
        <div>
            <h2>Notification Component</h2>
        </div>
    )
  }
}