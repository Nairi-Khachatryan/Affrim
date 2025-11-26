import React, { useState } from 'react';
import { Card, Input, Select, Button, message } from 'antd';
import s from './AddBankCard.module.scss'

export const AddBankCard: React.FC = () => {
  const [bank, setBank] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState("");

  const banks = [
    "Bank of America",
    "HSBC",
    "American Express",
    "Capital One",
    "Chase Bank",
    "Wells Fargo",
    "Citibank",
    "Revolut",
    "Tinkoff",
    "Raiffeisen",
  ];

  const handleSave = () => {
    if (!bank || cardNumber.length !== 12) {
      message.error("Please select bank and enter 12-digit card number (UI only)");
      return;
    }

    message.success("Card added (UI only)");
  };

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <h2 className={s.title}>Add Bank Card</h2>

        {/* Выпадающее меню банков */}
        <div className={s.block}>
          <h3>Select Bank</h3>

          <Select
            placeholder="Choose your bank"
            style={{ width: "100%" }}
            onChange={(value) => setBank(value)}
          >
            {banks.map((b) => (
              <Select.Option key={b} value={b}>
                {b}
              </Select.Option>
            ))}
          </Select>
        </div>

        {/* Номер карты */}
        <div className={s.block}>
          <h3>Card Number (12 digits)</h3>

          <Input
            maxLength={12}
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
          />

          <div className={s.warning}>
            ⚠️ Do NOT enter a real card.  
            This is only a visual interface (UI).
          </div>
        </div>

        <Button type="primary" className={s.saveBtn} onClick={handleSave}>
          Save Card
        </Button>
      </Card>
    </div>
  );
};

