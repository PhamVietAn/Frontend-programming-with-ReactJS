import { Component } from 'react'
interface List{
    id: number
    title: string
    content: string
    author: string
}
interface Props{
    list:List[]
}
export default class ListPost extends Component<Props> {

  render() {
    const {list}=this.props
    return (
      <>
        <h2>Danh sach bai viet</h2>
        {list.map((val,index)=>(
            <ul key={index}>
                <ol>Id: {val.id}</ol>
                <ol>Title: {val.title}</ol>
                <ol>Content: {val.content}</ol>
                <ol>Author: {val.author}</ol>
            </ul>
        ))}
      </>
    )
  }
}