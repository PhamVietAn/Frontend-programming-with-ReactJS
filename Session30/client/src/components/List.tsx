import axios from "axios";
import { Button, Input, message, Modal } from "antd";
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface list {
  id: number;
  name: string;
  status: boolean;
}

interface ListProps {
  list: list[];
  setList: React.Dispatch<React.SetStateAction<list[]>>;
}

export default function List({ list, setList }: ListProps) {
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteName, setDeleteName] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);

  const [editError, setEditError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios.get("http://localhost:3000/TodoList")
        .then(res => setList(res.data))
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [setList]);

  useEffect(() => {
    if (list.length > 0 && list.every(item => item.status)) {
      setIsFinishModalOpen(true);
    } else {
      setIsFinishModalOpen(false);
    }
  }, [list]);

  const handleToggle = (id: number, status: boolean) => {
    axios
      .patch(`http://localhost:3000/TodoList/${id}`, { status: !status })
      .then((res) => {
        setList((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, status: res.data.status } : item
          )
        );
      });
  };

  const handleEdit = (id: number, name: string) => {
    setEditId(id);
    setEditName(name);
    setIsModalOpen(true);
  };

  const handleShowDeleteModal = (id: number, name: string) => {
    setDeleteId(id);
    setDeleteName(name);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteId !== null) {
      axios.delete(`http://localhost:3000/TodoList/${deleteId}`).then(() => {
        setList((prev) => prev.filter((u) => u.id !== deleteId));
        setIsDeleteModalOpen(false);
        setDeleteId(null);
        setDeleteName("");
        message.success("Đã xoá công việc!");
      });
    }
  };

  const handleUpdate = () => {
    const newName = editName.trim();
    if (!newName) {
      setEditError("Tên công việc không được để trống!");
      return;
    }
    // Kiểm tra trùng tên (không phân biệt hoa thường, trừ chính nó)
    const isDuplicate = list.some(
      (item) =>
        item.name.toLowerCase() === newName.toLowerCase() &&
        item.id !== editId
    );
    if (isDuplicate) {
      setEditError("Tên công việc không được trùng!");
      return;
    }
    axios
      .patch(`http://localhost:3000/TodoList/${editId}`, { name: newName })
      .then((res) => {
        setList((prev) =>
          prev.map((item) =>
            item.id === editId ? { ...item, name: res.data.name } : item
          )
        );
        setIsModalOpen(false);
        setEditId(null);
        setEditName("");
        setEditError("");
        message.success("Cập nhật thành công");
      });
  };

  const handleEditCancel = () => {
    setIsModalOpen(false);
    setEditId(null);
    setEditName("");
    setEditError("");
  };

  return (
    <>
      <div className="mx-auto mt-5 relative">
        <ul className="flex flex-col gap-3 overflow-auto max-h-[345px] p-1 pb-2">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            list.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white rounded-md px-4 py-3"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => handleToggle(item.id, item.status)}
                    className="accent-blue-500 w-4 h-4"
                  />
                  <span
                    className={`text-gray-700 ${item.status ? "line-through text-gray-400" : ""}`}
                  >
                    {item.name}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    icon={<EditOutlined />}
                    type="text"
                    className="text-yellow-500 hover:bg-yellow-50"
                    onClick={() => handleEdit(item.id, item.name)}
                  />
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    type="text"
                    className="hover:bg-red-50"
                    onClick={() => handleShowDeleteModal(item.id, item.name)}
                  />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <Modal
        title="Sửa công việc"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={handleEditCancel}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Input
          value={editName}
          onChange={(e) => {
            setEditName(e.target.value);
            setEditError("");
          }}
          placeholder="Nhập tên công việc mới"
        />
        {editError && (
          <div className="text-red-500 text-sm mt-2">{editError}</div>
        )}
      </Modal>
      
      <Modal
        title={<span className="font-bold">Xác nhận</span>}
        open={isDeleteModalOpen}
        onOk={handleConfirmDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
        okText="Xóa"
        okButtonProps={{ danger: true }}
        cancelText="Hủy"
      >
        <div className="flex items-center gap-3 mb-2">
          <ExclamationCircleOutlined style={{ color: "red", fontSize: "24px" }} />
          <span>
            Bạn có chắc chắn muốn xoá công việc <b>{deleteName}</b> không?
          </span>
        </div>
      </Modal>

      <Modal
        open={isFinishModalOpen}
        footer={null}
        onCancel={() => setIsFinishModalOpen(false)}
        centered
      >
        <div className="text-center text-green-600 text-xl font-bold">
          Hoàn thành công việc
        </div>
      </Modal>
    </>
  );
}