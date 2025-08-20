import { Component } from 'react'

export default class Bai7_main extends Component {
  render() {
    const Cart={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:200,
        height:115,
        backgroundColor:'white',
    }

  return (
    <div style={{display:'flex',gap:20,flexWrap: 'wrap',width:'100%',justifyContent:'center',alignItems:'center',paddingTop:'15px',paddingBottom:'15px'}}>
        {Array.from({ length: 16 }).map((_, i) => (
            <div style={Cart} key={i}>Cart</div>
        ))}
    </div>
    )
  }
}