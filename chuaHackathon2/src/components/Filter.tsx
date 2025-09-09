import { Select } from "antd";

interface FilterProps {
  filter: string;
  setFilter: (val: string) => void;
  onCreate: () => void;
}

export default function Filter({ filter, setFilter, onCreate }: FilterProps) {
  return (
    <div className="flex flex-col w-fit gap-4 justify-center p-5 rounded-2xl border-[2px] border-[hsl(0,0%,100%,0.3)] bg-[hsl(0,0%,100%,0.2)] mx-auto">
      <div className="flex items-center gap-2">
        <span className="text-white">Lọc theo:</span>
        <Select
          value={filter}
          style={{ width: 180 }}
          onChange={setFilter}
          options={[
            { value: "all", label: "Tất cả bài viết" },
            { value: "liked", label: "Yêu thích" },
            { value: "notLiked", label: "Không yêu thích" },
          ]}
        />
      </div>
      <button
        className="mx-auto mt-2 px-8 py-2 rounded-full bg-gradient-to-r from-[#ff6a3d] to-[#ff4e91] text-white font-semibold shadow"
        onClick={onCreate}
      >
        Tạo bài viết
      </button>
    </div>
  );
}