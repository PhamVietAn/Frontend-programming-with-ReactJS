import { Component } from 'react'
import Bai5_Children from './Bai5_Children'

interface State{
    id: number
    name: string
    price: number
    quantity:number
}
export default class Bai5_Parent extends Component<object,State> {
    constructor(props:object){
        super(props)

        this.state={
            id:1,
            name:'Buoi ba roi',
            price:12000,
            quantity:6
        }
    }
  render() {
    const {id,name, price,quantity}=this.state
    return (
      <>
      <Bai5_Children id={id} name={name} price={price} quantity={quantity}/>
      </>
    )
  }
}