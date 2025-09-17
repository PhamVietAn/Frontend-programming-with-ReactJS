import { Button } from "antd";

export default function DeleteWork() {
  return (
    <div className="flex gap-4 justify-between mt-4">
        <Button color="danger" variant="solid" size={"large"} className="w-[250px]">
            Xoá công việc hoàn thành
          </Button>
        <Button color="danger" variant="solid" size={"large"} className="w-[250px]">
            Xoá tất cả công việc
        </Button>
    </div>
  )
}
