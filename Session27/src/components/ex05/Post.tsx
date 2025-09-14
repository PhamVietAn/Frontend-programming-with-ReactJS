import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';

export default function Post() {
  return (
    <div className='w-full p-8 bg-gray-50 min-h-screen'>
      <h1 className="text-2xl font-bold mb-8 text-gray-800">
        Danh sách bài viết
      </h1>
      
      <div className="flex flex-col gap-4 w">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg p-6 bg-white shadow"
          >
            <Link
              to={`/blog/posts/${post.id}`}
              className="text-blue-600 hover:underline text-lg font-bold mb-2 block"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 text-base leading-relaxed m-0">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}