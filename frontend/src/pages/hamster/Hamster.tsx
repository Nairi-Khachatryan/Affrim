import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getClicks } from '../../api/hamster/getClicks';
import { addClick } from '../../api/hamster/addClick';
import hamsterImg from '../../../public/lizzard.png';
import { useState, useEffect, useRef } from 'react';
import { useAppSelector } from '../../app/hooks';
import coinImg from '../../../public/coin.png';
import type { Click } from './hamster.type';
import s from './Hamster.module.scss';

export const Hamster = () => {
  const userId = useAppSelector((state) => state.user.user.id);
  const [clicks, setClicks] = useState<Click[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['clickCount', userId],
    queryFn: () => getClicks(userId),
    enabled: !!userId,
  });

  const clickCountRef = useRef(clickCount);

  useEffect(() => {
    clickCountRef.current = clickCount;
  }, [clickCount]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (clickCountRef.current > 0) {
        await addClick(userId, clickCountRef.current);
        setClickCount(0);

        queryClient.invalidateQueries({
          queryKey: ['clickCount', userId],
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [userId]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Math.random();

    // Анимация клика
    setClicks((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== id));
    }, 800);

    setClickCount((prev) => prev + 1);
  };
  return (
    <div className={s.game}>
      <div className={s.header}>
        <img className={s.coin} src={coinImg} alt="" />
        <h2 className={s.score}>{(data ?? 0) + clickCount}</h2>
      </div>

      <div className={s.circle} onClick={handleClick}>
        <img src={hamsterImg} alt="" />

        {clicks.map((c) => (
          <span
            key={c.id}
            className={s.floating}
            style={{ left: c.x, top: c.y }}
          >
            +1
          </span>
        ))}
      </div>
    </div>
  );
};
