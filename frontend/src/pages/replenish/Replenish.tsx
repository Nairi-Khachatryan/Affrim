import { Card, Button, Radio, Input } from 'antd';
import { useToast } from '../../hooks/useToast';
import React, { useState } from 'react';
import s from './Replenish.module.scss';

export const Replenish: React.FC = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [method, setMethod] = useState<string | null>(null);
  const { showToast } = useToast();

  const amounts = [3000, 5000, 7000, 10000, 12000, 15000, 17000, 20000];

  const handleSubmit = () => {
    if (!amount || !method) {
      return showToast({
        type: 'warning',
        message: 'Please select amount and method',
        duration: 5000,
      });
    }

    showToast({
      type: 'success',
      message: 'Top-up request created',
      duration: 5000,
    });
  };

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <h2 className={s.title}>Top Up Balance</h2>

        {/* 1. Выбор суммы */}
        <div className={s.block}>
          <h3>Select Amount</h3>
          <div className={s.amountList}>
            {amounts.map((value) => (
              <div
                key={value}
                className={`${s.amountItem} ${
                  amount === value ? s.active : ''
                }`}
                onClick={() => setAmount(value)}
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Выбор метода пополнения */}
        <div className={s.block}>
          <h3>Payment Method</h3>

          <Radio.Group
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            className={s.radio}
          >
            <Radio value="card">Pay with your card </Radio>
            <Radio value="send_to_our_card">Send to our card</Radio>
          </Radio.Group>
        </div>

        {/* 3. Метод 1 — Форма карты (только UI, без реальных данных!) */}
        {method === 'card' && (
          <div className={s.block}>
            <h3>Your Card Details</h3>

            <Input
              placeholder="Card Number (xxxx xxxx xxxx xxxx)"
              maxLength={19}
            />
            <div className={s.smallInputs}>
              <Input placeholder="MM/YY" maxLength={5} />
              <Input placeholder="CVV" maxLength={3} />
            </div>

            <div className={s.warning}>⚠️ Enter real payment data.</div>
          </div>
        )}

        {/* 4. Метод 2 — Пополнение на вашу карту */}
        {method === 'send_to_our_card' && (
          <div className={s.block}>
            <h3>Send funds to this card</h3>

            <Card className={s.cardInfo}>
              <div>
                Card: <b>5536 12XX XXXX 4432</b>
              </div>
              <div>
                Name: <b>PAYMENT SYSTEM</b>
              </div>
            </Card>

            <p className={s.desc}>
              After transfer, upload screenshot of the payment.
            </p>
          </div>
        )}

        <Button type="primary" className={s.submit} onClick={handleSubmit}>
          Continue
        </Button>
      </Card>
    </div>
  );
};
