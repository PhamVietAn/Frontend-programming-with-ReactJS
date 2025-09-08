import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Pagination() {
  return (
    <div className="flex items-center gap-5 justify-end">
        <LeftOutlined />
        <button className="border border-[#2b83ff] text-[#2b83ff] p-[8px_16px] rounded-[8px]">1</button>
        <button className="p-[8px_16px]">2</button>
        <button className="p-[8px_16px]">3</button>
        <button className="p-[8px_16px]">...</button>
        <button className="p-[8px_16px]">100</button>
        <RightOutlined />
        <select name="" id="" className="border border-gray-300 rounded-[8px] p-2">
            <option value="">1 bản ghi / trang</option>
            <option value="">10 bản ghi / trang</option>
        </select>
    </div>
  )
}
