import { useParams, Link } from "react-router-dom";
import { getPostById } from "../../data/posts";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id) : 0;
  const post = getPostById(postId);

  if (!post) {
    return (
      <div className="text-center py-8">
        <h1 className="text-red-600 text-2xl font-bold mb-4">
          Bài viết không tồn tại
        </h1>
        <p className="text-gray-600 text-base mb-8">
          Không tìm thấy bài viết với ID: {id}
        </p>
        <Link
          to="/blog/posts"
          className="text-blue-600 underline text-base hover:text-blue-800"
        >
          Quay lại danh sách bài viết
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
      <div className="bg-white p-8 rounded-lg shadow mb-8">
        <p className="text-gray-800 text-lg leading-relaxed m-0">{post.content}</p>
      </div>
      <div className="mt-8">
        <Link
          to="/blog/posts"
          className="text-blue-600 underline text-base hover:text-blue-800"
        >
          Quay lại danh sách bài viết
        </Link>
      </div>
    </div>
  );
}