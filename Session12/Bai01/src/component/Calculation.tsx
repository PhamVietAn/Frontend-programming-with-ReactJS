import { Component } from 'react'

export default class Calculation extends Component {
  render() {
    return (
      <>
        <h1>Danh sach ket qua</h1>
        <ul>
            <li>10+10={10+10}</li>
            <li>10-10={10-10}</li>
            <li>10*10={10+10}</li>
            <li>10/10={10/10}</li>
        </ul>
      </>
    )
  }
}