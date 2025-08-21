import { Component } from 'react'
import ListPost from './ListPost'

interface List{
    id: number
    title: string
    content: string
    author: string
}
interface State{
    list:List[]
}
export default class DetailPost extends Component<object, State> {
    constructor(props:object){
        super(props)
        this.state={
            list:[
                {
                    id:1,
                    title:"Tai sao nen hoc ReactJS",
                    content:'Hoc ReactJS de di lam',
                    author:'David'
                },
                {
                    id:2,
                    title:"Props trong ReacjJS",
                    content:'Props giup truyen du lieu tu component con xuong component cha',
                    author:'Linda'
                },
                {
                    id:3,
                    title:"State trong ReactJS la gi?",
                    content:'State giup tru trang thai du lieu ben trong mot component',
                    author:'David'
                },
            ]
        }
    }
  render() {

    return (
      <>
      <ListPost list={this.state.list}/>
      </>
    )
  }
}