import { Alert, Button, Card, Col, Input, Row, Spin, Typography } from 'antd';
import { getRefferals } from '../../api/referrals/getRefferals';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import s from './Team.module.scss';

const { Title, Paragraph } = Typography;

export const Team: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const [refId, setRefId] = useState<string[]>();
  const referralCode = user.referralCode;

  useEffect(() => {
    const getReferralsFn = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getRefferals(user.id);

        if (res.success) {
          setRefId(res.data);
        } else {
          setError('Failed to fetch referrals');
        }
      } catch (error) {
        if (error instanceof Error)
          setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    getReferralsFn();
  }, [user.id]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const referralLink = `${window.location.origin}/sign-up?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied!');
  };

  return (
    <div className={s.container}>
      <Row gutter={16}>
        <Col span={8}>
          <Card className={s.statCard}>
            <Title level={4}>Team Members</Title>
            {loading ? <Spin /> : <Title level={2}>{refId?.length ?? 0}</Title>}
          </Card>
        </Col>
        <Col span={8}>
          <Card className={s.statCard}>
            <Title level={4}>All Income</Title>
            <Title level={2}>0</Title>
          </Card>
        </Col>
        <Col span={8}>
          <Card className={s.statCard}>
            <Title level={4}>Team Replenish</Title>
            <Title level={2}>0</Title>
          </Card>
        </Col>
      </Row>

      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ marginTop: 16 }}
        />
      )}

      <Card className={s.referralCard} style={{ marginTop: 20 }}>
        <Paragraph>Your referral link:</Paragraph>
        <Input
          className={s.referralInput}
          value={referralLink}
          readOnly
          style={{ width: 300, marginRight: 10 }}
        />
        <Button onClick={copyToClipboard} type="primary">
          Copy
        </Button>
      </Card>
    </div>
  );
};
