import { Component } from 'react'
import DetailPost from './DetailPost'

export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

interface State {
    posts: Post[];
}

export default class ListPost extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Tại sao nên học ReactJS',
          content: 'Học React để đi làm',
          author: 'David'
        },
        {
          id: 2,
          title: 'Props trong ReactJS',
          content: 'Props giúp chuyền dữ liệu từ component con xuống component cha',
          author: 'Linda' 
        },
        {
          id: 3,
          title: 'State trong ReactJS là gì?',
          content: 'State giúp giữ trạng thái dữ liệu bên trong một component',
          author: 'David' 
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Danh sách bài viết</h1>
        {this.state.posts.map(post => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    )
  }
}
