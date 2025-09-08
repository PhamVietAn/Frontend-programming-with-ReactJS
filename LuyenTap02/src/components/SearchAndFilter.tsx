
import { Input, Select, Button, Row, Col } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
  onAddBook: () => void;
}

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  genres,
  onAddBook
}: SearchAndFilterProps) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      <Col xs={24} sm={12} md={8}>
        <Search
          placeholder="Tìm kiếm theo tên sách hoặc tác giả..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          enterButton={<SearchOutlined />}
          size="large"
        />
      </Col>
      
      <Col xs={24} sm={12} md={8}>
        <Select
          placeholder="Chọn thể loại"
          value={selectedGenre}
          onChange={onGenreChange}
          style={{ width: '100%' }}
          size="large"
        >
          {genres.map((genre) => (
            <Select.Option key={genre} value={genre}>
              {genre}
            </Select.Option>
          ))}
        </Select>
      </Col>
      
      <Col xs={24} sm={24} md={8}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAddBook}
          size="large"
          style={{ width: '100%' }}
        >
          Thêm sách mới
        </Button>
      </Col>
    </Row>
  );
};

export default SearchAndFilter;
