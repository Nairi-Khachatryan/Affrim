import { useState } from 'react';
// import s from './SlotMachine.module.scss';
import s from './SlotMashine.module.scss'

const symbols = ['🍒', '🍋', '⭐', '🍇', '🍉', '7️⃣'];

export const SlotMachine = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [results, setResults] = useState(['🍒', '🍋', '⭐']);

  const [coins, setCoins] = useState(0);
  const [clicks, setClicks] = useState(0); // количество спинов до выигрыша
  const [lastWinClicks, setLastWinClicks] = useState<number | null>(null);

  const [win, setWin] = useState(false);

  const roll = () => {
    if (isRolling) return;

    setIsRolling(true);
    setWin(false);

    // увеличиваем количество нажатий
    setClicks((prev) => prev + 1);

    const isWin = Math.random() < 0.1;
    let newResults;

    if (isWin) {
      const sym = symbols[Math.floor(Math.random() * symbols.length)];
      newResults = [sym, sym, sym];

      // задержка пока барабаны вращаются
      setTimeout(() => {
        setWin(true);
        setCoins((prev) => prev + 10); // добавляем монеты
        setLastWinClicks(clicks + 1); // сохраняем, сколько раз нажали
        setClicks(0); // сбрасываем после победы
      }, 1500);
    } else {
      newResults = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ];

      // не позволяем случайно выиграть
      if (newResults[0] === newResults[1] && newResults[1] === newResults[2]) {
        const filtered = symbols.filter((sym) => sym !== newResults[0]);
        newResults[2] = filtered[Math.floor(Math.random() * filtered.length)];
      }
    }

    setResults(newResults);

    setTimeout(() => {
      setIsRolling(false);
    }, 1500);
  };

  return (
    <div className={s.slotContainer}>
      <div className={s.info}>
        <div>
          Монеты: <b>{coins}</b>
        </div>
        <div>
          Спинов до выигрыша: <b>{clicks}</b>
        </div>

        {lastWinClicks !== null && (
          <div className={s.lastWin}>
            Последний выигрыш был через <b>{lastWinClicks}</b> нажатий 🎉
          </div>
        )}
      </div>

      <div className={s.slotsRow}>
        {results.map((symbol, index) => (
          <div key={index} className={`${s.reel} ${win ? s.win : ''}`}>
            <div
              className={`${s.reelInner} ${isRolling ? s.spin : ''}`}
              style={{
                transform: isRolling
                  ? undefined
                  : `translateY(-${symbols.indexOf(symbol) * 80}px)`,
              }}
            >
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className={s.item}>
                    {symbols[i % symbols.length]}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={roll} className={s.spinBtn} disabled={isRolling}>
        {isRolling ? '...' : 'SPIN'}
      </button>

      {win && <div className={s.winMessage}>🎉 WIN +10 coins!</div>}
    </div>
  );
};
