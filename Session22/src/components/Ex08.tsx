
import { Form, Input, Button, Select, Row, Col } from 'antd';

const { Option } = Select;

export default function Ex08() {
  return (
    <div style={{ maxWidth: 500, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0001', padding: 32 }}>
      <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: 32, marginBottom: 32 }}>Đăng ký tài khoản</h1>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Email">
              <Input placeholder="Nhập email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Mật khẩu">
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Họ và tên">
          <Input placeholder="Ví dụ: Nguyễn Văn A" />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Thành phố">
              <Select defaultValue="Hà Nội">
                <Option value="Hà Nội">Hà Nội</Option>
                <Option value="TP.HCM">TP.HCM</Option>
                <Option value="Đà Nẵng">Đà Nẵng</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Quận">
              <Select defaultValue="Thanh Xuân">
                <Option value="Thanh Xuân">Thanh Xuân</Option>
                <Option value="Hoàng Mai">Hoàng Mai</Option>
                <Option value="Cầu Giấy">Cầu Giấy</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Mã bưu điện">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', height: 40, fontSize: 18 }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
