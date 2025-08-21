import { Component } from 'react'
interface Product{
    id: number,
    name: string
    price: number,
    quantity: number
}
export default class Bai5_Children extends Component<Product>{
    
  render() {
    const {id,name,price,quantity}=this.props
    return (
      <>
      <h2>Du lieu trong component con</h2>
        <p>id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price} d</p>
        <p>Quantity: {quantity}</p>
      </>
    )
  }
}