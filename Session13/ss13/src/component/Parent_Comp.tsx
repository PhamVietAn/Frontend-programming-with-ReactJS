
import  { Component } from 'react'
import Children_Comp from './Children_Comp'

interface State{
    name: string
}
export default class Parent_Comp extends Component<object,State> {
    constructor(props: object){
        super(props)
        this.state={
            name:'Nguyen Van Nam',
        }
    }
  render() {
    return (
      <>
        <h2>Ho va ten ben component cha: {this.state.name}</h2>
        <Children_Comp name={this.state.name}/>
      </>
    )
  }
}

