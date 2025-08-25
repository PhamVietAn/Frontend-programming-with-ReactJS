import { Component } from 'react'
import type { Post } from './ListPost'

export default class DetailPost extends Component<{ post: Post }> {
  render() {
    const { post } = this.props;
    return (
      <div style={{width: '500px'}}>
        <p><strong>Id:</strong> {post.id}</p>
        <p><strong>Title:</strong> {post.title}</p>
        <p><strong>Content:</strong> {post.content}</p>
        <p><strong>Author:</strong> {post.author}</p>
        <hr />
      </div>
    )
  }
}
