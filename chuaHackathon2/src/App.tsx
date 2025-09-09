import  { useState } from "react";
import Quantity from "./components/Quantity";
import Filter from "./components/Filter";
import ContentCard from "./components/ContentCard";
import ModalPost from "./components/ModalPost";
import type { Post } from "./types/Post";

const initialPosts: Post[] = [
  { id: "1", title: "Tiêu đề 1", content: "Nội dung 1", liked: true },
  { id: "2", title: "Tiêu đề 2", content: "Nội dung 2", liked: false },
];

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filter, setFilter] = useState<string>("all");
  const [openModal, setOpenModal] = useState(false);

  const filteredPosts = posts.filter(post => {
    if (filter === "all") return true;
    if (filter === "liked") return post.liked;
    if (filter === "notLiked") return !post.liked;
    return true;
  });

  const handleLike = (id: string) => {
    setPosts(posts =>
      posts.map(post =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const handleAddPost = (title: string, content: string) => {
    setPosts([
      { id: "3", title, content, liked: false },
      ...posts,
    ]);
    setOpenModal(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col gap-10 p-10 "
      style={{
        background:
          "linear-gradient(145deg,rgba(94,116,216,1) 20%,rgba(112,79,166,1) 80%)",
      }}
    >
      <Quantity total={posts.length} liked={posts.filter(p => p.liked).length} />
      <Filter filter={filter} setFilter={setFilter} onCreate={() => setOpenModal(true)} />
      <ContentCard posts={filteredPosts} onLike={handleLike} />
      <ModalPost
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}

export default App;