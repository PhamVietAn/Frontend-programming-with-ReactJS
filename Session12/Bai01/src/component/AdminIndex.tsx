import { Component } from 'react'
import Bai6_header from './Bai6_header'
import Bai6_menu from './Bai6_menu'
import Bai6_main from './Bai6_main'
import Bai6_footer from './Bai6_footer'
export default class AdminIndex extends Component {
  render() {
    return (
      <>
        <Bai6_header/>
        <div style={{display:'flex',height:900,backgroundColor:'#f2f3f5',}}>
            <Bai6_menu />
            <div style={{width:'90%',padding:20,height:'100%'}}>
                <Bai6_main/>
                <Bai6_footer/>
            </div>
        </div>
      </>
    )
  }
}