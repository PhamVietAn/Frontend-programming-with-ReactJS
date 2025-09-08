import {PlusOutlined} from '@ant-design/icons';

export default function Add() {
  return (
    <div className='bg-white w-full rounded-2xl p-7 flex flex-col gap-5'>
        <div>
            <button><b><PlusOutlined /> Thêm kho mới</b></button>
        </div>
        <form
            className='flex gap-10'
            onSubmit={e => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements[0] as HTMLInputElement).value.trim();
            const address = (form.elements[1] as HTMLInputElement).value.trim();
            const status = (form.elements[2] as HTMLSelectElement).value;
            if (!name) {
                alert('Tên kho không được để trống');
                return;
            }
            const warehouses = JSON.parse(localStorage.getItem('warehouses') || '[]');
            warehouses.push({ name, address, status });
            localStorage.setItem('warehouses', JSON.stringify(warehouses));
            form.reset();
            alert('Thêm kho thành công!');
            }}
        >
            <input type="text" placeholder='Tên kho' className='border border-gray-300 rounded-md p-2 w-[300px]' />
            <input type="text" placeholder='Địa chỉ' className='border border-gray-300 rounded-md p-2 w-[300px]' />
            <select className='border border-gray-300 rounded-md p-2 w-[300px]'>
            <option value="Hoạt động">Hoạt động</option>
            <option value="Ngừng hoạt động">Ngừng hoạt động</option>
            </select>
            <button type="submit" className='bg-[#1677ff] text-white rounded-md p-[8px_32px]'>Thêm</button>
        </form>
    </div>
  )
}
