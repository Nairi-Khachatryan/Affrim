import { Card, Button, Radio, Input } from 'antd';
import { useAppSelector } from '../../app/hooks';
import { useToast } from '../../hooks/useToast';
import React, { useState } from 'react';
import s from './Replenish.module.scss';
import {
  createRequestWithHerCard,
  createRequestWithOurCard,
} from '../../api/user/createRequest';
import { useNavigate } from 'react-router-dom';

export const Replenish: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [cvc, setCvc] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [yearAndMounth, setYearAndMounth] = useState('');
  const [amount, setAmount] = useState<number | null>(null);
  const [method, setMethod] = useState<string | null>(null);
  const USER_ID = useAppSelector((state) => state.user.user.id);
  const amounts = [3000, 5000, 7000, 10000, 12000, 15000, 17000, 20000];

  const handleSubmit = async () => {
    if (!amount || !method) {
      return showToast({
        type: 'warning',
        message: 'Please select amount and method',
        duration: 5000,
      });
    }

    if (method === 'hisCard') {
      const cardData = {
        value: amount,
        cardNumber,
        cvc,
        yearAndMounth,
      };

      const res = await createRequestWithHerCard(USER_ID, cardData);

      if (!res.success) {
        return showToast({ type: 'error', message: res.message });
      }

      return navigate(-1);
    }
    if (method === 'ourCard') {
      const res = await createRequestWithOurCard(USER_ID, amount);

      console.log(res, 'ourCard');
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
            <Radio value="hisCard">Pay with your card </Radio>
            <Radio value="ourCard">Send to our card</Radio>
          </Radio.Group>
        </div>

        {/* 3. Метод 1 — Форма карты (только UI, без реальных данных!) */}
        {method === 'hisCard' && (
          <div className={s.block}>
            <h3>Your Card Details</h3>

            <Input
              maxLength={19}
              value={cardNumber}
              placeholder="Card Number (xxxx xxxx xxxx xxxx)"
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className={s.smallInputs}>
              <Input
                maxLength={5}
                placeholder="MM/YY"
                value={yearAndMounth}
                onChange={(e) => setYearAndMounth(e.target.value)}
              />
              <Input
                value={cvc}
                maxLength={3}
                placeholder="CVV"
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>

            <div className={s.warning}>⚠️ Enter real payment data.</div>
          </div>
        )}

        {/* 4. Метод 2 — Пополнение на вашу карту */}
        {method === 'ourCard' && (
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
