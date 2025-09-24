import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "./MenuSlice";

import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import type { AppDispatch, RootState } from "../../stores";

export default function MenuSidebar() {
      const collapsed = useSelector((state: RootState) => state.menuSidebar.collapsed);
  
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      style={{
        width: collapsed ? "fit-content" : "fit-content",
        height: "300px",
        background: "#001529",
        color: "white",
        transition: "all 0.3s",
        padding: "20px",
      }}
    >
      <div className="menu-item">
        <DashboardOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Bảng điều khiển</span>}
      </div>
      <div className="menu-item">
        <UserOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Tài khoản</span>}
      </div>
      <div className="menu-item">
        <DollarOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Tài sản</span>}
      </div>
      <div className="menu-item">
        <BarChartOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Thống kê</span>}
      </div>
      <div className="menu-item">
        <FileTextOutlined />
        {!collapsed && <span style={{ marginLeft: 10 }}>Tài liệu</span>}
      </div>
      <div
        className="menu-item"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(toggleMenu())}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
        {!collapsed && <span style={{ marginLeft: 10 }}>Thu gọn</span>}
      </div>
    </div>
  );
}