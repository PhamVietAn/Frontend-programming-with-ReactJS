import { Modal, Form, Input, InputNumber, Select, Button, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import type { Book, BookFormData } from '../types/book';

interface EditBookModalProps {
  book: Book;
  onClose: () => void;
  onSave: (bookData: BookFormData) => void;
}

const EditBookModal = ({ book, onClose, onSave }: EditBookModalProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSave(values as BookFormData);
    } catch (error) {
      console.log('Validation failed:', error);
    }
  };

  return (
    <Modal
      title={
        <Space>
          <EditOutlined />
          Chỉnh sửa thông tin sách
        </Space>
      }
      open={true}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Cập nhật
        </Button>,
      ]}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: book.title,
          author: book.author,
          genre: book.genre,
          publishedYear: book.publishedYear,
          quantity: book.quantity,
          isbn: book.isbn,
          status: book.status
        }}
      >
        <Form.Item
          label="Tên sách"
          name="title"
          rules={[{ required: true, message: 'Vui lòng nhập tên sách!' }]}
        >
          <Input placeholder="Nhập tên sách" />
        </Form.Item>

        <Form.Item
          label="Tác giả"
          name="author"
          rules={[{ required: true, message: 'Vui lòng nhập tên tác giả!' }]}
        >
          <Input placeholder="Nhập tên tác giả" />
        </Form.Item>

        <Form.Item
          label="Thể loại"
          name="genre"
          rules={[{ required: true, message: 'Vui lòng nhập thể loại!' }]}
        >
          <Input placeholder="Nhập thể loại sách" />
        </Form.Item>

        <Form.Item
          label="Năm xuất bản"
          name="publishedYear"
          rules={[
            { required: true, message: 'Vui lòng nhập năm xuất bản!' },
            { type: 'number', min: 1000, max: new Date().getFullYear(), message: 'Năm xuất bản không hợp lệ!' }
          ]}
        >
          <InputNumber
            style={{ width: '100%' }}
            min={1000}
            max={new Date().getFullYear()}
          />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[
            { required: true, message: 'Vui lòng nhập số lượng!' },
            { type: 'number', min: 1, message: 'Số lượng phải lớn hơn 0!' }
          ]}
        >
          <InputNumber
            style={{ width: '100%' }}
            min={1}
          />
        </Form.Item>

        <Form.Item
          label="ISBN"
          name="isbn"
          rules={[
            { required: true, message: 'Vui lòng nhập ISBN!' },
            { pattern: /^[0-9-]+$/, message: 'ISBN chỉ được chứa số và dấu gạch ngang!' }
          ]}
        >
          <Input placeholder="Nhập ISBN (ví dụ: 978-0132350884)" />
        </Form.Item>

        <Form.Item
          label="Trạng thái"
          name="status"
          rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
        >
          <Select>
            <Select.Option value="available">Có sẵn</Select.Option>
            <Select.Option value="out_of_stock">Hết hàng</Select.Option>
            <Select.Option value="discontinued">Ngừng kinh doanh</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBookModal;
