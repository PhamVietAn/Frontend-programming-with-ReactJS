import { Modal, Form, Input, Button } from "antd";

interface ModalPostProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (title: string, content: string) => void;
}

export default function ModalPost({ open, onCancel, onSubmit }: ModalPostProps) {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        onSubmit(values.title, values.content);
        form.resetFields();
      })
      .catch(() => {});
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Bài viết của bạn"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
        >
          <Input placeholder="Tiêu đề*" />
        </Form.Item>
        <Form.Item
          label="Nội dung"
          name="content"
          rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
        >
          <Input placeholder="Nội dung*" />
        </Form.Item>
        <div className="flex justify-end gap-2">
          <Button onClick={handleCancel}>Huỷ</Button>
          <Button type="primary" htmlType="submit" onClick={handleOk}>
            Đăng
          </Button>
        </div>
      </Form>
    </Modal>
  );
}