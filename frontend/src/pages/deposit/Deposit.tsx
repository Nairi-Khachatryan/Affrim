import React, { useState } from 'react';
import { Card, Button, message } from 'antd';
import s from './Deposit.module.scss';

export const Deposit: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const deposits = [
    {
      name: 'Starter Deposit',
      percent: 3,
      days: 30,
      min: 5000,
    },
    {
      name: 'Growth Deposit',
      percent: 6,
      days: 90,
      min: 15000,
    },
    {
      name: 'Premium Deposit',
      percent: 12,
      days: 180,
      min: 30000,
    },
  ];

  const handleConfirm = () => {
    if (selected === null) {
      message.error('Please select a deposit');
      return;
    }

    message.success('Deposit request created (UI only)');
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Bank Deposits</h2>

      <div className={s.list}>
        {deposits.map((d, i) => (
          <Card
            key={i}
            className={`${s.deposit} ${selected === i ? s.active : ''}`}
            onClick={() => setSelected(i)}
            hoverable
          >
            <div className={s.name}>{d.name}</div>
            <div className={s.row}>
              <span>Term:</span> <b>{d.days} days</b>
            </div>
            <div className={s.row}>
              <span>Interest:</span> <b>{d.percent}%</b>
            </div>
            <div className={s.row}>
              <span>Minimum:</span> <b>{d.min}</b>
            </div>
          </Card>
        ))}
      </div>

      <Button type="primary" className={s.confirmBtn} onClick={handleConfirm}>
        Create Deposit
      </Button>
    </div>
  );
};
