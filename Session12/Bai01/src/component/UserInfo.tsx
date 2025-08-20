import  { Component } from 'react'

export default class Userinfo extends Component {
  render() {
    const people={
        name: 'Nguyen Van A',
        gender: 'Nam',
        birth:'06/03/2024',
        email:'nva@gmail.com',
        adress:'Thanh Xuan, Ha Noi',
    }
    return (
      <>
      <h1>Thong tin ca nhan</h1>
      <ul>
        <li>Ho va ten: {people.name}</li>
        <li>Gioi tinh: {people.gender}</li>
        <li>Ngay sinh: {people.birth}</li>
        <li>Email: {people.email}</li>
        <li>Dia chi: {people.adress}</li>
      </ul>
      </>
    )
  }
}