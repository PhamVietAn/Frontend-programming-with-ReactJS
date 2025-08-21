import { Component } from 'react'

interface ChildProps{
    name: string
}
export default class Children_Comp extends Component<ChildProps>{
  render() {
    return (
      <h2>Ho va ten ben component con: {this.props.name}</h2>
    )
  }
}