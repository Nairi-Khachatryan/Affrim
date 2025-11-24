import headphones from '../../assets/headphones.jpg';
import { ROUTES } from '../../routes/routhPaths';
import { useNavigate } from 'react-router-dom';
import shoes from '../../assets/shoes.avif';
import coffe from '../../assets/coffe.webp';
import ring from '../../assets/ring.webp';
import bag from '../../assets/bag3.jpg';
import { Card, Col, Row } from 'antd';
import s from './Market.module.scss';
import React from 'react';

export const Market: React.FC = () => {
  const navigate = useNavigate();

  const marketItems = [
    { name: 'Vip 1', img: bag, label: 'Travel', price: 100 },
    { name: 'Vip 2', img: headphones, label: 'Tech', price: 1000 },
    { name: 'Vip 3', img: coffe, label: 'Homeewere', price: 10000 },
    { name: 'Vip 4', img: shoes, label: 'Fashion', price: 10000 },
    { name: 'Vip 5', img: ring, label: 'Luxury', price: 100000 },
  ];

  return (
    <div className={s.marketContainer}>
      <Row gutter={[16, 16]}>
        {marketItems.map((item, idx) => (
          <Col
            onClick={() =>
              navigate(ROUTES.MARKET_ITEM_MORE_INFO, { state: { item } })
            }
            key={idx}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
          >
            <Card hoverable className={s.marketCard}>
              {/* Label сверху */}
              <div className={s.marketLabel}>{item.label}</div>

              {/* Картинка */}
              <img alt={item.name} src={item.img} className={s.marketImg} />

              {/* Контент снизу */}
              <div className={s.marketContent}>
                <div className={s.marketName}>{item.name}</div>
                <div className={s.marketName}>Price: {item.price}</div>
                <div className={s.marketDesc}>Осталось 50</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
