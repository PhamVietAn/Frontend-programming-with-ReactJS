import { Button } from "antd";


export default function Filter() {
  return (
    <div className="flex gap-4 justify-center p-3 mb-5 rounded-md" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <Button color="primary" variant="solid" size={"large"}>
            Tất cả
          </Button>
        <Button color="primary" variant="solid" size={"large"}>
            Hoàn Thành
          </Button>
        <Button color="primary" variant="solid" size={"large"}>
            Đang thực hiện
          </Button>
    </div>
  )
}
