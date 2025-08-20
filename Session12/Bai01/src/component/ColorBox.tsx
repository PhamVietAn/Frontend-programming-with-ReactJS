import  { Component } from 'react'

export default class ColorBox extends Component {
  render() {
    const style={
        width:200,
        height:200,
        backgroundColor:'red', 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color: 'white'
    }
    return (
      <>
        <div style={{display:'flex', gap:20}}>
            <div style={style}>Box</div>
            <div style={{width:200,height:200, backgroundColor:'blue', display:'flex',justifyContent:'center',alignItems:'center',color: 'white'}}>Box</div>
            <div style={{width:200,height:200, backgroundColor:'green', display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>Box</div>
        </div>
      </>
    )
  }
}