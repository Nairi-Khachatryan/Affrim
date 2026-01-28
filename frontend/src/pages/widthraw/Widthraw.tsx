import React, { useState } from 'react';
import { Card, Input, Button } from 'antd';
import s from './Widthdraw.module.scss';
import { useToast } from '../../hooks/useToast';

export const Widthraw: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');

  const { showToast } = useToast();

  const handleSubmit = () => {
    if (cardNumber.length !== 16) {
      console.log('err');
      return showToast({
        type: 'error',
        message: 'Card number must be 16 digits',
      });
    }

    return showToast({
      type: 'success',
      message:
        'Your withdrawal request has been created. Processing time: up to 48 hours.',
      duration: 5000,
    });
  };

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <h2 className={s.title}>Withdraw Funds</h2>

        <div className={s.block}>
          <p>Enter your card number (16 digits)</p>

          <Input
            maxLength={16}
            placeholder="Enter 16-digit card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
            className={s.input}
          />

          <div className={s.warning}>
            ⚠️ Enter real card data. Actual withdrawals must be done through a
            secure payment provider.
          </div>
        </div>

        <div className={s.infoBox}>
          Your request will be processed within <b>48 hours</b>.
        </div>

        <Button type="primary" onClick={handleSubmit} className={s.submit}>
          Submit Request
        </Button>
      </Card>
    </div>
  );
};
