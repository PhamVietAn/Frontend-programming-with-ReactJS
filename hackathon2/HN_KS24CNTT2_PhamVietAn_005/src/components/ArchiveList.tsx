import type { List } from "../types/List";
import Pagination from "./Pagination"
interface ArchiveListProps {
    data: List[];
}

const sampleData: List[] = [
    { name: 'Kho Hà Nội', location: 'Địa chỉ 1', status: 'Hoạt động' },
    { name: 'Kho TP.Hồ Chí Minh', location: 'Địa chỉ 2', status: 'Hoạt động' },
    { name: 'Kho Đà Nẵng', location: 'Địa chỉ 2', status: 'Ngừng hoạt động' },
]; 


export default function ArchiveList(ArchiveListProps: ArchiveListProps) {

  return (
    <div className="bg-white w-full rounded-2xl p-7 flex flex-col gap-5">
        <p><b>Danh sách kho</b></p>
        <div>
            <table className="w-full border-collapse border border-gray-400 text-left">
            <thead className="bg-[#fafafa]">
                <tr>
                <th className="border border-gray-300 w-[300px]">Tên kho</th>
                <th className="border border-gray-300 ">Địa chỉ</th>
                <th className="border border-gray-300 w-[300px]">Trạng thái</th>
                <th className="border border-gray-300 w-[300px]">Hành động</th>
                </tr>
            </thead>
            <tbody>
                {sampleData.map((item, idx) => (
                <tr key={idx}>
                    <td className="border border-gray-300">{item.name}</td>
                    <td className="border border-gray-300">{item.location}</td>
                    <td className="border border-gray-300">
                    {item.status === "Hoạt động" ? (
                        <p className="border border-[#c4efa2] bg-[#f6ffed] text-[#87ac6d] p-2.5 rounded-[8px] text-center w-fit">
                        Hoạt động
                        </p>
                    ) : (
                        <p className="border border-[#f6d8d8] bg-[#fef0f0] text-[#ac6d6d] p-2.5 rounded-[8px] text-center w-fit">
                        Ngừng hoạt động
                        </p>
                    )}
                    </td>
                    <td className="border border-gray-300">
                    <button className="border border-[#2b83ff] text-[#2b83ff] p-[8px_24px] rounded-[8px] mr-5">Sửa</button>
                    <button className="border border-[#ff5052] text-[#ff5052] p-[8px_24px] rounded-[8px]">Xóa</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div>
            <Pagination />
        </div>
    </div>
  )
}
