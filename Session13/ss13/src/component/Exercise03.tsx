
import { Component } from 'react'
interface User{
    id: number
    name: string
    age: number
}
type typeState={
    user: User[]
}
const style={
    border:1,borderColor:'black',
    borderStyle:'solid',
    borderCollapse:'collapse' as const,
    padding:5

}

export default class Bai3 extends Component <object, typeState>{
    constructor(props: object){
        super(props)
        this.state={
            user:[
                {
                    id:1,
                    name: 'John',
                    age: 30
                },
                {
                    id:2,
                    name:'Mary',
                    age:25
                },
                {
                    id: 3,
                    name:'Jane',
                    age:20
                }
            ]
        }
        
    }
  render() {
    return (
      <>
        <table style={style}>
            <tr >
                <th style={style}>Id</th>
                <th style={style}>Name</th>
                <th style={style}>Age</th>
            </tr>
            {this.state.user.map((u,index)=>{
                return <tr key={index}>
                    <td style={style}>{u.id}</td>
                    <td style={style}>{u.name}</td>
                    <td style={style}>{u.age}</td>
                </tr>
            })}
        </table>
      </>
    )
  }
}
