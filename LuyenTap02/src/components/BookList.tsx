import { Table, Tag, Button, Space, Empty } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { Book } from '../types/book';
import type { ColumnsType } from 'antd/es/table';

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
}

const BookList = ({ books, onEdit, onDelete }: BookListProps) => {
  const getStatusTag = (status: string) => {
    switch (status) {
      case 'available':
        return <Tag color="green">CÓ SẴN</Tag>;
      case 'out_of_stock':
        return <Tag color="red">HẾT HÀNG</Tag>;
      case 'discontinued':
        return <Tag color="default">NGỪNG KINH DOANH</Tag>;
      default:
        return <Tag>{status}</Tag>;
    }
  };

  const columns: ColumnsType<Book> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: 'TÊN SÁCH',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
    },
    {
      title: 'TÁC GIẢ',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'THỂ LOẠI',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'NĂM XUẤT BẢN',
      dataIndex: 'publishedYear',
      key: 'publishedYear',
      width: 120,
    },
    {
      title: 'SỐ LƯỢNG',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
    },
    {
      title: 'TRẠNG THÁI',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: string) => getStatusTag(status),
    },
    {
      title: 'THAO TÁC',
      key: 'actions',
      width: 150,
      render: (_, record: Book) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            size="small"
            onClick={() => onEdit(record)}
          >
            Sửa
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => onDelete(record)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={books}
      rowKey="id"
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} của ${total} sách`,
      }}
      locale={{
        emptyText: (
          <Empty
            description="Không tìm thấy sách nào phù hợp với tiêu chí tìm kiếm"
          />
        ),
      }}
      scroll={{ x: 800 }}
    />
  );
};

export default BookList;
