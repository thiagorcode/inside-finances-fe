import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
} from '@mui/icons-material';
import { Card, Col, Row, Statistic } from 'antd';
import * as S from './styles';

interface TransactionsCardProps {
  loading: boolean;
  totalBalance: number;
  recipe: number;
  expense: number;
}

export const TransactionsCard = ({
  loading,
  totalBalance,
  recipe,
  expense,
}: TransactionsCardProps) => {
  return (
    <S.ContainerCards>
      <Row gutter={12}>
        <Col span={24}>
          <Card
            bordered={false}
            style={{ backgroundColor: '#2b2e35', marginBottom: '10px' }}
          >
            <Statistic
              title="Saldo total"
              value={totalBalance}
              precision={2}
              style={{ color: '#fff' }}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpwardOutlined />}
              loading={loading}
            />
          </Card>
        </Col>
        {/* <Col span={12}>
          <Card bordered={false} style={{ backgroundColor: '#2b2e35' }}>
            <Statistic
              title="Saldo mensal total"
              value={totalBalance}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowDownwardOutlined />}
              loading={loading}
            />
          </Card>
        </Col> */}
      </Row>
      <Row gutter={12}>
        <Col span={12}>
          <Card
            bordered={false}
            style={{ backgroundColor: '#2b2e35', marginBottom: '10px' }}
          >
            <Statistic
              title="Receita total"
              value={recipe}
              precision={2}
              style={{ color: '#fff' }}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpwardOutlined />}
              loading={loading}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} style={{ backgroundColor: '#2b2e35' }}>
            <Statistic
              title="Despesa total"
              value={expense}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownwardOutlined />}
              loading={loading}
            />
          </Card>
        </Col>
      </Row>
    </S.ContainerCards>
  );
};
