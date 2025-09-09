import { HeartFilled, HeartOutlined, DollarOutlined } from '@ant-design/icons';
import type { Post } from '../types/Post';

interface ContentCardProps {
  posts: Post[];
  onLike: (id: string) => void;
}

export default function ContentCard({ posts, onLike }: ContentCardProps) {
  return (
    <div className="bg-white/50 rounded-2xl p-6 w-[700px] mx-auto mt-4">
      {posts.length === 0 && (
        <div className="text-center text-gray-500">Không có bài viết nào</div>
      )}
      {posts.map(post => (
        <div
          key={post.id}
          className="bg-white rounded-xl p-4 mb-4 shadow flex flex-col gap-2"
        >
          <h2 className="font-semibold text-lg">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <hr />
          <div className="flex items-center gap-2">
            <button
              className="text-xl"
              onClick={() => onLike(post.id)}
              aria-label="like"
            >
              {post.liked ? (
                <HeartFilled className="text-red-500" />
              ) : (
                <HeartOutlined className="text-red-500" />
              )}
            </button>
            <DollarOutlined className="ml-auto text-gray-400" />
          </div>
        </div>
      ))}
    </div>
  );
}