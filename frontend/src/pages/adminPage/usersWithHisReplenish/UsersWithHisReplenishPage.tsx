import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../../app/hooks';
import { getUsersWithHisReplenishMethod } from '../../../api/admin/getUsersWithHisReplenishMethod';
import { Card, List, Spin, Alert, Tag } from 'antd';
import s from './UsersWithHisRep.module.scss';
type CardData = {
  cardNumber: string;
  cvc: string;
  expiryMonth: number;
  expiryYear: number;
};

type ReplenishItem = {
  _id: string;
  id: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  value: number;
  cardData: CardData;
  createdAt: string;
};

export const UsersWithHisReplenishPage = () => {
  const USER_ID = useAppSelector((state) => state.user.user.id);

  const { data, isLoading, error } = useQuery<ReplenishItem[]>({
    queryKey: ['replenishMethods', USER_ID],
    queryFn: () => getUsersWithHisReplenishMethod(USER_ID),
    enabled: !!USER_ID,
  });

  if (isLoading) return <Spin />;
  if (error) return <Alert type="error" message="Failed to load data" />;

  return (
    <div className={s.wrapper}>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item className={s.listItem}>
            <Card
              className={s.card}
              title={<span className={s.title}>Amount: {item.value}</span>}
              extra={
                <Tag
                  className={
                    item.status === 'Pending'
                      ? s.pending
                      : item.status === 'Approved'
                      ? s.approved
                      : s.rejected
                  }
                >
                  {item.status}
                </Tag>
              }
            >
              <p className={s.row}>
                <span className={s.label}>Card:</span>{' '}
                {item.cardData.cardNumber}
              </p>
              <p className={s.row}>
                <span className={s.label}>CVC:</span> {item.cardData.cvc}
              </p>
              <p className={s.row}>
                <span className={s.label}>Expiry:</span>
                {item.cardData.expiryMonth}/{item.cardData.expiryYear}
              </p>
              <p className={s.row}>
                <span className={s.label}>Created:</span>
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
