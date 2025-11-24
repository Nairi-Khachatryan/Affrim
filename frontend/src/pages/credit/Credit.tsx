import React, { useState } from 'react';
import { Card, Button, Radio, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import s from './Credit.module.scss';

export const Credit: React.FC = () => {
  const [docUploaded, setDocUploaded] = useState(false);
  const [loanType, setLoanType] = useState<
    'basic' | 'standard' | 'premium' | null
  >(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [term, setTerm] = useState<number | null>(null);

  const loanOptions = {
    basic: { name: 'Basic Loan', max: 10000, rate: 5, fee: 2 },
    standard: { name: 'Standard Loan', max: 30000, rate: 4, fee: 1.5 },
    premium: { name: 'Premium Loan', max: 60000, rate: 3, fee: 1 },
  };

  const terms = [30, 60, 90];

  const calculateTotal = () => {
    if (!loanType || !amount || !term) return 0;
    const info = loanOptions[loanType];
    const interest = (amount * info.rate) / 100;
    const fee = (amount * info.fee) / 100;
    return amount + interest + fee;
  };

  const handleSend = () => {
    if (!docUploaded) return message.error('Upload your ID (UI only)');
    if (!loanType) return message.error('Select loan type');
    if (!amount) return message.error('Select loan amount');
    if (!term) return message.error('Select loan term');

    message.success('Loan request created (UI only)');
  };

  return (
    <div className={s.container}>
      <div className={s.banner}>
        <h2>Loan Center</h2>
        <p>Fast, secure and simple. UI version only.</p>
      </div>

      <Card className={s.infoCard}>
        <h3>How it works?</h3>
        <ul>
          <li>Upload your ID document (UI only)</li>
          <li>Select loan type based on your needs</li>
          <li>Choose amount and term</li>
          <li>System will calculate total amount</li>
          <li>Your request will be reviewed manually</li>
        </ul>
      </Card>

      {/* Document upload */}
      <Card className={s.card}>
        <h3>ID Verification</h3>
        <Upload
          beforeUpload={() => {
            setDocUploaded(true);
            message.success('Document uploaded (mock only)');
            return false;
          }}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Upload Document</Button>
        </Upload>

        {docUploaded && <div className={s.ok}>✔ Document uploaded</div>}
      </Card>

      {/* Loan type */}
      <Card className={s.card}>
        <h3>Select Loan Type</h3>

        <div className={s.loanTypes}>
          {Object.entries(loanOptions).map(([key, v]) => (
            <div
              key={key}
              className={`${s.typeCard} ${loanType === key ? s.active : ''}`}
              onClick={() => setLoanType(key as any)}
            >
              <div className={s.typeTitle}>{v.name}</div>
              <div>Max: {v.max}</div>
              <div>Rate: {v.rate}%</div>
              <div>Fee: {v.fee}%</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Amount */}
      {loanType && (
        <Card className={s.card}>
          <h3>Select Loan Amount</h3>

          <div className={s.amountList}>
            {[5000, 10000, 20000, 50000].map((v) => {
              const max = loanOptions[loanType].max;
              if (v > max) return null;

              return (
                <div
                  key={v}
                  onClick={() => setAmount(v)}
                  className={`${s.amountItem} ${amount === v ? s.active : ''}`}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Term */}
      {amount && (
        <Card className={s.card}>
          <h3>Select Loan Term</h3>

          <Radio.Group
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            className={s.radio}
          >
            {terms.map((t) => (
              <Radio key={t} value={t}>
                {t} days
              </Radio>
            ))}
          </Radio.Group>
        </Card>
      )}

      {/* Summary */}
      {term && (
        <Card className={s.summaryCard}>
          <h3>Summary</h3>

          <div className={s.summaryRow}>
            <span>Loan Type:</span>
            <b>{loanOptions[loanType!].name}</b>
          </div>

          <div className={s.summaryRow}>
            <span>Amount:</span>
            <b>{amount}</b>
          </div>

          <div className={s.summaryRow}>
            <span>Term:</span>
            <b>{term} days</b>
          </div>

          <div className={s.total}>
            Total to repay: <b>{calculateTotal()}</b>
          </div>

          <Button type="primary" className={s.submit} onClick={handleSend}>
            Submit Loan Request
          </Button>
        </Card>
      )}
    </div>
  );
};
