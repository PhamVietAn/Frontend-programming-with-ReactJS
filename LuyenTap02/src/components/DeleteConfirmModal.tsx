import { Modal, Button, Space, Typography } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { Book } from '../types/book';

const { Text, Title } = Typography;

interface DeleteConfirmModalProps {
  book: Book;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmModal = ({ book, onClose, onConfirm }: DeleteConfirmModalProps) => {
  return (
    <Modal
      title={
        <Space>
          <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />
          Xác nhận xóa
        </Space>
      }
      open={true}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Hủy
        </Button>,
        <Button key="delete" danger type="primary" onClick={onConfirm}>
          Xóa
        </Button>,
      ]}
      width={400}
    >
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <DeleteOutlined style={{ fontSize: '48px', color: '#d9d9d9', marginBottom: '16px' }} />
        <Title level={4} style={{ marginBottom: '8px' }}>
          Bạn có chắc chắn muốn xóa sách này?
        </Title>
        <Text type="secondary" style={{ fontSize: '14px' }}>
          "{book.title}" - {book.author}
        </Text>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;
