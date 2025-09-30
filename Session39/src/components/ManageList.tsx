import React, { useEffect, useState } from "react";
import axios from "axios";

const CLOUD_NAME = import.meta.env.VITE_CLOUND_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

type ErrorType = {
  name?: string;
  price?: string;
  imageUrl?: string;
};

export default function ManageList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState<ErrorType>({});

  useEffect(() => {
    fetch("https://mock-api-products.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const validate = () => {
    const newErrors: ErrorType = {};
    if (!form.name) newErrors.name = "Tên không được để trống";
    if (!form.price) newErrors.price = "Giá không được để trống";
    if (!form.imageUrl) newErrors.imageUrl = "Hình ảnh không được để trống";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      setForm({ ...form, imageUrl: response.data.secure_url });
      setErrors({ ...errors, imageUrl: undefined });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const newProduct: Product = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      description: form.description,
      imageUrl: form.imageUrl,
    };
    setProducts([newProduct, ...products]);
    setForm({ name: "", price: "", description: "", imageUrl: "" });
    setErrors({});
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col text-left w-fit mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Quản lý sản phẩm</h1>
      <div className="w-full flex text-left mb-10">
        <form
          className="bg-white p-8 rounded-xl shadow-lg w-[1200px] flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              * Tên sản phẩm
            </label>
            <input
              className={`w-full p-2 border rounded focus:outline-blue-400 ${
                errors.name ? "border-red-400" : ""
              }`}
              name="name"
              placeholder="Nhập tên sản phẩm"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              * Giá
            </label>
            <input
              className={`w-full p-2 border rounded focus:outline-blue-400 ${
                errors.price ? "border-red-400" : ""
              }`}
              name="price"
              placeholder="Nhập giá sản phẩm"
              type="number"
              value={form.price}
              onChange={handleChange}
            />
            {errors.price && (
              <div className="text-red-500 text-sm mt-1">{errors.price}</div>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Mô tả
            </label>
            <textarea
              className="w-full p-2 border rounded focus:outline-blue-400"
              name="description"
              placeholder="Nhập mô tả sản phẩm"
              value={form.description}
              onChange={handleChange}
              rows={3}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              * Ảnh sản phẩm
            </label>
            <div className="flex items-center gap-4">
              {form.imageUrl && (
                <img
                  src={form.imageUrl}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded border"
                />
              )}
              <label className="flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed rounded cursor-pointer hover:border-blue-400">
                <span className="text-3xl text-gray-400">+</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <span className="text-xs text-gray-500 mt-1">Upload</span>
              </label>
              {uploading && (
                <span className="text-blue-500">Đang upload...</span>
              )}
            </div>
            {errors.imageUrl && (
              <div className="text-red-500 text-sm mt-1">{errors.imageUrl}</div>
            )}
          </div>
          <button
            type="submit"
            className="self-start bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Thêm sản phẩm
          </button>
        </form>
      </div>
      <div className="w-full flex flex-wrap gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md w-80 flex flex-col overflow-hidden"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">
                {product.name} - {product.price} đ
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button
                className="mt-auto text-red-500 hover:underline"
                onClick={() => handleDelete(product.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}