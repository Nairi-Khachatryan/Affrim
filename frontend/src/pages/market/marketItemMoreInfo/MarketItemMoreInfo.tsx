import { useLocation, useNavigate } from 'react-router-dom';
import s from './MarketItemMore.module.scss';
import { Card, Button } from 'antd';
import React from 'react';

export const MarketItemMoreInfo: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <div className={s.error}>No item data provided</div>;
  }

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <img src={item.img} alt={item.name} className={s.image} />

        <div className={s.infoBlock}>
          <h1 className={s.title}>{item.name}</h1>
          <p className={s.label}>Category: {item.label}</p>
          <p className={s.price}>Price: {item.price}</p>
          <p className={s.desc}>
            This is a premium product with exclusive access. Quantity left:{' '}
            <b>50</b>
          </p>

          <Button type="primary">Buy</Button>

          <Button
            type="primary"
            className={s.backBtn}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </Card>
    </div>
  );
};
