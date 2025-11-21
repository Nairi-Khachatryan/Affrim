import React, { useState } from 'react';
import { Button, message } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import Confetti from 'react-confetti';
import s from './Gift.module.scss';

export const Gift: React.FC = () => {
  const [isConfetti, setIsConfetti] = useState(false);
  const [openedGift, setOpenedGift] = useState<number | null>(null);
  const [animatingGift, setAnimatingGift] = useState<number | null>(null);

  const handleGiftClick = (index: number) => {
    if (openedGift !== null || animatingGift !== null) return;

    setAnimatingGift(index); 

    setTimeout(() => {
      setAnimatingGift(null); 
      setOpenedGift(index); 
      setIsConfetti(true);

      setTimeout(() => {
        setIsConfetti(false);
        message.success(`Поздравляем! Вы получили подарок #${index + 1}!`);
      }, 5000);
    }, 900); 
  };

  const handleMoneyClick = () => {
    message.success('Вы получили 100 монет за посещение!');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Выберите подарок</h1>

      <div className={s.gifts}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${s.gift} ${animatingGift === i ? s.animating : ''} ${
              openedGift === i ? s.opened : ''
            }`}
            onClick={() => handleGiftClick(i)}
          >
            <GiftOutlined style={{ fontSize: 48 }} />
            <span>Подарок {i + 1}</span>
          </div>
        ))}
      </div>

      <Button type="primary" onClick={handleMoneyClick} className={s.moneyBtn}>
        Получить деньги
      </Button>

      {isConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </div>
  );
};
