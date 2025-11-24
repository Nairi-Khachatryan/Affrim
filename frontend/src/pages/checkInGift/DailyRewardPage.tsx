import React, { useState } from 'react';
import { Card, Button, message } from 'antd';
import s from './DailyRew.module.scss';

export const DailyRewardPage: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(0); // 0 = день 1

  const rewards = [
    { day: 1, reward: 100 },
    { day: 2, reward: 150 },
    { day: 3, reward: 200 },
    { day: 4, reward: 300 },
    { day: 5, reward: 400 },
    { day: 6, reward: 500 },
    { day: 7, reward: 700 },
  ];

  const claimReward = () => {
    message.success(`Reward collected: +${rewards[currentDay].reward}`);
    if (currentDay < rewards.length - 1) {
      setCurrentDay(currentDay + 1);
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Daily Reward</h2>

      <div className={s.list}>
        {rewards.map((r, i) => (
          <Card
            key={i}
            className={`${s.rewardCard} ${
              i === currentDay ? s.active : i < currentDay ? s.completed : ''
            }`}
          >
            <div className={s.day}>Day {r.day}</div>
            <div className={s.amount}>+{r.reward}</div>

            {i === currentDay && (
              <Button
                type="primary"
                onClick={claimReward}
                className={s.claimBtn}
              >
                Claim
              </Button>
            )}

            {i < currentDay && <div className={s.collected}>Collected</div>}
          </Card>
        ))}
      </div>
    </div>
  );
};
