import { Button, Input, Modal, Select } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import axios from "axios";

interface SearchSelectAddProps {
  onAddSuccess?: () => void;
  onSearch: (keyword: string) => void;
  search: string;
}

export default function Search_select_add({ onAddSuccess, onSearch, search }: SearchSelectAddProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState<string | undefined>("");

  const [confirmReset, setConfirmReset] = useState(false);

  const [warning, setWarning] = useState<{ open: boolean; message: string }>({ open: false, message: "" });

  const showModal = () => setOpen(true);

  const handleCancel = () => {
    setOpen(false);
    setTitle("");
    setImage("");
    setContent("");
  };

  const handleReset = () => {
    setConfirmReset(true);
  };

  const handleConfirmReset = () => {
    setTitle("");
    setImage("");
    setContent("");
    setConfirmReset(false);
  };

  const handleCancelReset = () => setConfirmReset(false);

  const handleWarningClose = () => setWarning({ open: false, message: "" });

  const handleOk = async () => {
    if (!title.trim()) {
      setWarning({ open: true, message: "Tên bài viết không được phép để trống" });
      return;
    }
    if (!image.trim()) {
      setWarning({ open: true, message: "Hình ảnh không được phép để trống" });
      return;
    }
    if (!content || !content.trim()) {
      setWarning({ open: true, message: "Nội dung không được phép để trống" });
      return;
    }
    setLoading(true);
    const res = await axios.get("http://localhost:3000/posts");
    const isDuplicate = res.data.some((item: { title: string }) => item.title.trim().toLowerCase() === title.trim().toLowerCase());
    if (isDuplicate) {
      setWarning({ open: true, message: "Tên bài viết không được phép trùng" });
      setLoading(false);
      return;
    }

    const maxId = res.data.length > 0
    ? Math.max(...res.data.map((item: { id: number }) => Number(item.id) || 0))
    : 0;
  const newId = maxId + 1;

  await axios.post("http://localhost:3000/posts", {
    id: newId,
    title: title.trim(),
    image: image.trim(),
    content: content.trim(),
    status: true,
    date: new Date().toLocaleDateString("vi-VN"),
  });
  setOpen(false);
  setTitle("");
  setImage("");
  setContent("");
  if (onAddSuccess) onAddSuccess();
  setLoading(false);
  };

  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <Input
            placeholder="Nhập từ khoá tìm kiếm"
            value={search}
            onChange={e => onSearch(e.target.value)}
          />
          <Select
            showSearch
            placeholder="Lọc bài viết"
            optionFilterProp="label"
            options={[
              { value: 'DaXB', label: 'Đã xuất bản' },
              { value: 'NgungXB', label: 'Ngừng xuất bản' },
            ]}
          />
        </div>
        <Button type="primary" onClick={showModal}>
          Thêm mới bài viết
        </Button>
        <Modal
          open={open}
          title={<span className="font-bold text-2xl">Thêm mới bài viết</span>}
          onCancel={handleCancel}
          footer={[
            <Button key="reset" onClick={handleReset}>
              Làm mới
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              Xuất bản
            </Button>
          ]}
        >
          <p className="font-semibold mb-1">Tên bài viết</p>
          <Input value={title} onChange={e => setTitle(e.target.value)} />
          <p className="font-semibold mt-4 mb-1">Hình ảnh</p>
          <Input value={image} onChange={e => setImage(e.target.value)} />
          <p className="font-semibold mt-4 mb-1">Nội dung</p>
          <MDEditor value={content} onChange={setContent} />
        </Modal>

        <Modal
          open={confirmReset}
          title={<span className="font-bold">Cảnh báo</span>}
          onCancel={handleCancelReset}
          footer={[
            <Button key="cancel" onClick={handleCancelReset}>
              Hủy
            </Button>,
            <Button key="confirm" type="primary" danger onClick={handleConfirmReset}>
              Xác nhận
            </Button>
          ]}
        >
          <div className="flex items-center gap-2 py-2">
            <ExclamationCircleFilled style={{ color: "#faad14", fontSize: 24 }} />
            <span>Tất cả dữ liệu nhập sẽ bị xoá. Bạn có chắc chắn muốn làm mới?</span>
          </div>
        </Modal>

        <Modal
          open={warning.open}
          title={<span className="font-bold">Cảnh báo</span>}
          onCancel={handleWarningClose}
          footer={[
            <Button key="cancel" onClick={handleWarningClose}>
              Hủy
            </Button>
          ]}
        >
          <div className="flex items-center gap-2 py-2">
            <ExclamationCircleFilled style={{ color: "#faad14", fontSize: 24 }} />
            <span>{warning.message}</span>
          </div>
        </Modal>
      </div>
    </>
  );
}