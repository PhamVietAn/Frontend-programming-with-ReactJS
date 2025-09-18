import { WarningFilled } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';

interface post {
  id: string;
  title: string;
  image: string;
  date: string;
  status: boolean;
  content?: string;
}

interface TableProps {
  search: string;
  reload?: boolean;
}

export default function Table({ search, reload }: TableProps) {
  const [posts, setPosts] = useState<post[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editContent, setEditContent] = useState<string | undefined>("");
  const [editError, setEditError] = useState("");

  const fetchPosts = (keyword = "") => {
  setLoading(true);
  axios.get("http://localhost:3000/posts")
    .then(res => {
      let data = res.data;
      if (keyword.trim()) {
        const kw = keyword.trim().toLowerCase();
        data = data.filter((item: post) =>
          item.title.toLowerCase().includes(kw)
        );
      }
      setPosts(data);
    })
    .finally(() => setLoading(false));
};

  useEffect(() => {
    fetchPosts(search);
  }, [search, reload]);

  const showModal = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleOk = () => {
    if (selectedId === null) return;
    setLoading(true);
    const post = posts.find(p => p.id === selectedId);
    if (!post) return;
    axios.patch(`http://localhost:3000/posts/${selectedId}`, { status: !post.status })
      .then(() => {
        fetchPosts(search);
        setOpen(false);
        setSelectedId(null);
      })
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleEdit = (post: post) => {
    setEditId(post.id);
    setEditTitle(post.title);
    setEditImage(post.image);
    setEditContent(post.content || "");
    setEditModalOpen(true);
    setEditError("");
  };

  const handleEditCancel = () => {
    setEditModalOpen(false);
    setEditId(null);
    setEditTitle("");
    setEditImage("");
    setEditContent("");
    setEditError("");
  };

  const handleEditConfirm = async () => {
    if (!editTitle.trim()) {
      setEditError("Tên bài viết không được phép để trống");
      return;
    }
    if (!editImage.trim()) {
      setEditError("Hình ảnh không được phép để trống");
      return;
    }
    if (!editContent || !editContent.trim()) {
      setEditError("Nội dung không được phép để trống");
      return;
    }
    const isDuplicate = posts.some(
      (item) =>
        item.title.trim().toLowerCase() === editTitle.trim().toLowerCase() &&
        item.id !== editId
    );
    if (isDuplicate) {
      setEditError("Tên bài viết không được phép trùng");
      return;
    }
    setLoading(true);
    await axios.patch(`http://localhost:3000/posts/${editId}`, {
      title: editTitle.trim(),
      image: editImage.trim(),
      content: editContent.trim(),
    });
    setEditModalOpen(false);
    setEditId(null);
    setEditTitle("");
    setEditImage("");
    setEditContent("");
    setEditError("");
    fetchPosts(search);
    setLoading(false);
  };

  return (
    <div>
      <table className="border-collapse border border-slate-400 w-full text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-collapse border border-slate-400">STT</th>
            <th className="border-collapse border border-slate-400">Tiêu đề</th>
            <th className="border-collapse border border-slate-400">Hình ảnh</th>
            <th className="border-collapse border border-slate-400">Ngày viết</th>
            <th className="border-collapse border border-slate-400">Trạng thái</th>
            <th className="border-collapse border border-slate-400 text-center">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} className="text-center py-4">Đang tải...</td>
            </tr>
          ) : posts.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4">Không có kết quả tìm kiếm</td>
            </tr>
          ) : (
            posts.map((item, idx) => (
              <tr key={item.id} className="border-collapse border border-slate-400">
                <td className="border-collapse border border-slate-400">{idx + 1}</td>
                <td className="border-collapse border border-slate-400">{item.title}</td>
                <td className="border-collapse border border-slate-400 text-center">
                  <img src={item.image} alt={item.title} width={40} height={40} />
                </td>
                <td>{item.date}</td>
                <td className="border-collapse border border-slate-400">
                  {item.status ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">
                      Đã xuất bản
                    </span>
                  ) : (
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm font-semibold">
                      Ngừng xuất bản
                    </span>
                  )}
                </td>
                <td className="border-collapse border border-slate-400">
                  <button
                    className="bg-amber-400 text-white rounded-md p-[4px_12px]"
                    onClick={() => showModal(item.id)}
                  >
                    Chặn
                  </button>
                  <button
                    className="bg-amber-50 text-amber-600 border border-amber-400 rounded-md p-[4px_12px] mx-3"
                    onClick={() => handleEdit(item)}
                  >
                    Sửa
                  </button>
                  <button className="bg-red-50 text-red-600 border border-red-400 rounded-md p-[4px_12px]">Xoá</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Modal
        open={open}
        title="Xác nhận"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Huỷ
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Xác nhận
          </Button>
        ]}
      >
        <p className="py-4 border-b border-gray-200 flex">
          <WarningFilled style={{ color: "yellow", fontSize: "24px", marginRight: "8px" }} />
          Bạn có chắc chắn muốn {selectedId !== null && posts.find(p => p.id === selectedId)?.status ? "ngừng xuất bản" : "xuất bản lại"} bài viết?
        </p>
      </Modal>

      <Modal
        open={editModalOpen}
        title="Cập nhật bài viết"
        onCancel={handleEditCancel}
        footer={[
          <Button key="cancel" onClick={handleEditCancel}>
            Hủy
          </Button>,
          <Button key="update" type="primary" loading={loading} onClick={handleEditConfirm}>
            Cập nhật
          </Button>
        ]}
      >
        <div className="mb-2">
          <label className="font-semibold">Tên bài viết</label>
          <Input
            value={editTitle}
            onChange={e => {
              setEditTitle(e.target.value);
              setEditError("");
            }}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label className="font-semibold">Hình ảnh</label>
          <Input
            value={editImage}
            onChange={e => {
              setEditImage(e.target.value);
              setEditError("");
            }}
            className="mb-2"
          />
        </div>
        <div className="mb-2">
          <label className="font-semibold">Nội dung</label>
          <MDEditor value={editContent} onChange={setEditContent} />
        </div>
        {editError && (
          <div className="text-red-500 text-sm mt-2">{editError}</div>
        )}
      </Modal>
    </div>
  );
}