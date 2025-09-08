import { Card, Row, Col, Statistic } from 'antd';
import { BookOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import type { BookStats } from '../types/book';

interface SummaryCardsProps {
  stats: BookStats;
}

const SummaryCards = ({ stats }: SummaryCardsProps) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      <Col xs={24} sm={8}>
        <Card>
          <Statistic
            title="Tổng số sách"
            value={stats.totalBooks}
            prefix={<BookOutlined />}
            valueStyle={{ color: '#667eea' }}
          />
        </Card>
      </Col>
      
      <Col xs={24} sm={8}>
        <Card>
          <Statistic
            title="Có sẵn"
            value={stats.availableBooks}
            prefix={<CheckCircleOutlined />}
            valueStyle={{ color: '#52c41a' }}
          />
        </Card>
      </Col>
      
      <Col xs={24} sm={8}>
        <Card>
          <Statistic
            title="Hết hàng"
            value={stats.outOfStockBooks}
            prefix={<CloseCircleOutlined />}
            valueStyle={{ color: '#ff4d4f' }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default SummaryCards;
