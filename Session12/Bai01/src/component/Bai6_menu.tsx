import { Component } from 'react'

export default class Bai6_menu extends Component {
  render() {
    const style={
      height: '100%', 
        width:"15%",
         backgroundColor:'#173f93',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         color:'white'}
    return (
      <div style={style}>Menu</div>
    )
  }
}
