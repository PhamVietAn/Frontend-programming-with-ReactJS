
import { Typography, Space } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Header = () => {
  return (
    <div className="header" style={{ padding: '20px 0', textAlign: 'center', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: 24 }}>
      <Space direction="vertical" align="center" size="small">
        <Title level={1} style={{ margin: 0, color: '#4a5568' }}>
          <BookOutlined style={{ marginRight: 16, color: '#667eea' }} />
          Quản Lý Thư Viện
        </Title>
        <Text type="secondary" style={{ fontSize: '1.1rem' }}>
          Hệ thống quản lý sách hiện đại và thông minh
        </Text>
      </Space>
    </div>
  );
};

export default Header;
