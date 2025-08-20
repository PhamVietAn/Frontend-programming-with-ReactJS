import  { Component } from 'react'
import Bai7_header from './Bai7_header'
import Bai7_Nav from './Bai7_Nav'
import Bai7_menu from './Bai7_menu'
import Bai7_Article from './Bai7_Article'
import Bai7_main from './Bai7_main'

export default class Bai7 extends Component {
  render() {
    return (
      <div>
        <Bai7_header/>
        <Bai7_Nav/>
        <div style={{backgroundColor:'#ffeeee', display:'flex',height:580}}>
            <Bai7_menu/>
            <Bai7_main/>
            <Bai7_Article/>
        </div>
      </div>
    )
  }
}