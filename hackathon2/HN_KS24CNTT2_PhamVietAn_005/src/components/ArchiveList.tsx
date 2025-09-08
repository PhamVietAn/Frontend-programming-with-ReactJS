import type { List } from "../types/List";
import Pagination from "./Pagination"
import { useState, useEffect } from "react";
import { Modal } from "antd";

interface ArchiveListProps {
    data: List[];
    onDataChange?: () => void;
}

export default function ArchiveList({ data, onDataChange }: ArchiveListProps) {
    const [warehouses, setWarehouses] = useState<List[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState<number | null>(null);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        const storedWarehouses = JSON.parse(localStorage.getItem("warehouses") || "[]");
        setWarehouses(storedWarehouses);
    }, [data]);

    const showDeleteModal = (index: number) => {
        setSelectedWarehouse(index);
        setIsModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedWarehouse !== null) {
            setConfirmLoading(true);
            setTimeout(() => {
                const updatedWarehouses = warehouses.filter((_, index) => index !== selectedWarehouse);
                setWarehouses(updatedWarehouses);
                localStorage.setItem("warehouses", JSON.stringify(updatedWarehouses));
                setConfirmLoading(false);
                setIsModalOpen(false);
                setSelectedWarehouse(null);
                if (onDataChange) onDataChange();
            }, 500);
        }
    };

    const handleDeleteCancel = () => {
        setIsModalOpen(false);
        setSelectedWarehouse(null);
    };
    const displayData = warehouses.length > 0 ? warehouses : data;

    return (
        <div className="bg-white w-full rounded-2xl p-7 flex flex-col gap-5">
            <p><b>Danh sách kho</b></p>
            <div>
                <table className="w-full border-collapse border border-gray-400 text-left">
                    <thead className="bg-[#fafafa]">
                        <tr>
                            <th className="border border-gray-300 w-[300px] p-3">Tên kho</th>
                            <th className="border border-gray-300 p-3">Địa chỉ</th>
                            <th className="border border-gray-300 w-[300px] p-3">Trạng thái</th>
                            <th className="border border-gray-300 w-[300px] p-3">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData.length > 0 ? (
                            displayData.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="border border-gray-300 p-3">{item.name}</td>
                                    <td className="border border-gray-300 p-3">{item.location || item.address}</td>
                                    <td className="border border-gray-300 p-3">
                                        {item.status === "Hoạt động" ? (
                                            <span className="border border-[#c4efa2] bg-[#f6ffed] text-[#87ac6d] p-2.5 rounded-[8px] text-center inline-block">
                                                Hoạt động
                                            </span>
                                        ) : (
                                            <span className="border border-[#f6d8d8] bg-[#fef0f0] text-[#ac6d6d] p-2.5 rounded-[8px] text-center inline-block">
                                                Ngừng hoạt động
                                            </span>
                                        )}
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        <button 
                                            type="button" 
                                            className="border border-[#2b83ff] text-[#2b83ff] p-[8px_24px] rounded-[8px] mr-5 hover:bg-[#2b83ff] hover:text-white transition-colors"
                                        >
                                            Sửa
                                        </button>
                                        <button 
                                            type="button" 
                                            className="border border-[#ff5052] text-[#ff5052] p-[8px_24px] rounded-[8px] hover:bg-[#ff5052] hover:text-white transition-colors" 
                                            onClick={() => showDeleteModal(idx)}
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="border border-gray-300 p-3 text-center text-gray-500">
                                    Chưa có kho nào được thêm
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div>
                <Pagination />
            </div>
            <Modal
                title="Xác nhận xóa"
                open={isModalOpen}
                onOk={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
                confirmLoading={confirmLoading}
                okText="Xóa"
                cancelText="Hủy"
                okButtonProps={{ danger: true }}
            >
                <p>Bạn có chắc chắn muốn xóa kho này không?</p>
                <p className="text-gray-500 text-sm mt-2">Hành động này không thể hoàn tác.</p>
            </Modal>
        </div>
    );
}