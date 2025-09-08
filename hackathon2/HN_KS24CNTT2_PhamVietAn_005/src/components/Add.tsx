import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import type { ListFormData } from "../types/List";

interface AddProps {
    onAdd?: () => void;
}

const defaultWarehouses = [
    { name: 'Kho Hà Nội', location: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội', status: 'Hoạt động' },
    { name: 'Kho TP.Hồ Chí Minh', location: 'Số 123 Nguyễn Huệ, Quận 1, TP.HCM', status: 'Hoạt động' },
    { name: 'Kho Đà Nẵng', location: 'Số 456 Bạch Đằng, Hải Châu, Đà Nẵng', status: 'Ngừng hoạt động' },
    { name: 'Kho Hải Phòng', location: 'Số 789 Lê Chân, Hải Phòng', status: 'Hoạt động' },
    { name: 'Kho Cần Thơ', location: 'Số 321 Ninh Kiều, Cần Thơ', status: 'Ngừng hoạt động' },
];

export default function Add({ onAdd }: AddProps) {
    const [formData, setFormData] = useState<ListFormData>({
        name: "",
        location: "",
        status: "Hoạt động"
    });
    const [errors, setErrors] = useState<{ name?: string; location?: string }>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [pendingWarehouse, setPendingWarehouse] = useState<null | ListFormData>(null);

    useEffect(() => {
        const initializeDefaultData = () => {
            const existingData = localStorage.getItem("warehouses");
            
            if (!existingData) {
                localStorage.setItem("warehouses", JSON.stringify(defaultWarehouses));
                console.log("Đã khởi tạo dữ liệu mặc định vào localStorage");
                if (onAdd) onAdd();
            } else {
                const parsedData = JSON.parse(existingData);
                if (!Array.isArray(parsedData)) {
                    localStorage.setItem("warehouses", JSON.stringify(defaultWarehouses));
                    console.log("Dữ liệu không hợp lệ, đã reset về dữ liệu mặc định");
                    if (onAdd) onAdd();
                } else if (parsedData.length === 0) {
                    localStorage.setItem("warehouses", JSON.stringify(defaultWarehouses));
                    console.log("LocalStorage trống, đã thêm dữ liệu mặc định");
                    if (onAdd) onAdd();
                }
            }
        };

        initializeDefaultData();
    }, []);

    const handleInputChange = (field: keyof ListFormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: { name?: string; location?: string } = {};
        
        if (!formData.name.trim()) {
            newErrors.name = "required";
        }
        
        if (!formData.location.trim()) {
            newErrors.location = "required";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const newWarehouse = {
            name: formData.name.trim(),
            location: formData.location.trim(),
            status: formData.status
        };
        
        setPendingWarehouse(newWarehouse);
        setIsModalOpen(true);
    };

    const handleConfirmAdd = () => {
        if (!pendingWarehouse) return;
        
        setConfirmLoading(true);
        
        setTimeout(() => {
            const warehousesData = localStorage.getItem("warehouses");
            const warehouses = warehousesData ? JSON.parse(warehousesData) : [];
            
            if (!Array.isArray(warehouses)) {
                alert("Dữ liệu không hợp lệ. Khởi tạo lại danh sách kho.");
                localStorage.setItem("warehouses", JSON.stringify(defaultWarehouses));
                setConfirmLoading(false);
                setIsModalOpen(false);
                return;
            }

            warehouses.push(pendingWarehouse);
            localStorage.setItem("warehouses", JSON.stringify(warehouses));
            
            const savedData = localStorage.getItem("warehouses");
            if (!savedData || JSON.parse(savedData).length !== warehouses.length) {
                alert("Không thể lưu dữ liệu. Bộ nhớ có thể đã đầy!");
                setConfirmLoading(false);
                setIsModalOpen(false);
                return;
            }
            
            setFormData({
                name: "",
                location: "",
                status: "Hoạt động"
            });
            setPendingWarehouse(null);
            setConfirmLoading(false);
            setIsModalOpen(false);
            
            alert("Thêm kho thành công!");
            
            if (onAdd) onAdd();
        }, 1000);
    };

    const handleCancelAdd = () => {
        setIsModalOpen(false);
        setPendingWarehouse(null);
    };

    const hasErrors = errors.name || errors.location;

    return (
        <div className="bg-white w-full rounded-2xl p-7 flex flex-col gap-5">
            <div>
                <button type="button" className="flex items-center gap-2 font-bold">
                    <PlusOutlined /> Thêm kho mới
                </button>
            </div>

            {hasErrors && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 ">
                    <span className="text-red-800 font-medium">
                         Tên kho hoặc Địa chỉ không được để trống
                    </span>
                </div>
            )}

            <form className="flex gap-10" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <input 
                        type="text" 
                        placeholder="Tên kho" 
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`border rounded-md p-2 w-[300px] ${
                            errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                </div>
                
                <div className="flex flex-col">
                    <input 
                        type="text" 
                        placeholder="Địa chỉ" 
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className={`border rounded-md p-2 w-[300px] ${
                            errors.location ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                </div>
                
                <select 
                    value={formData.status}
                    onChange={(e) => handleInputChange("status", e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-[300px]"
                >
                    <option value="Hoạt động">Hoạt động</option>
                    <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                </select>
                
                <button 
                    type="submit" 
                    className="bg-[#1677ff] text-white rounded-md p-[8px_32px] hover:bg-[#0958d9] transition-colors"
                >
                    Thêm
                </button>
            </form>

            <Modal
                title="Xác nhận thêm kho"
                open={isModalOpen}
                onOk={handleConfirmAdd}
                onCancel={handleCancelAdd}
                confirmLoading={confirmLoading}
                okText="Xác nhận thêm"
                cancelText="Hủy"
                okButtonProps={{ danger: false }}
            >
                {pendingWarehouse && (
                    <div className="py-4">
                        <p className="mb-4">Bạn có chắc chắn muốn thêm kho với thông tin sau không?</p>
                        <div className="bg-gray-50 p-4 rounded-md space-y-2">
                            <div><strong>Tên kho:</strong> {pendingWarehouse.name}</div>
                            <div><strong>Địa chỉ:</strong> {pendingWarehouse.location}</div>
                            <div><strong>Trạng thái:</strong> 
                                <span className={`ml-2 px-2 py-1 rounded text-sm ${
                                    pendingWarehouse.status === "Hoạt động" 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-red-100 text-red-800"
                                }`}>
                                    {pendingWarehouse.status}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}