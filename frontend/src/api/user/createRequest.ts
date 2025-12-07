import { API_USER } from '../../routes/urlPaths';

interface CardData {
  value: number;
  cvc: string;
  cardNumber: string;
  yearAndMounth: string;
}
export const createRequestWithHerCard = async (
  USER_ID: string | null,
  cardData: CardData
) => {
  const res = await fetch(`${API_USER}/createReplenishWithHisCard/${USER_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cardData }),
  });

  return await res.json();
};

export const createRequestWithOurCard = async (
  USER_ID: string | null,
  value: number
) => {
  const res = await fetch(`${API_USER}/createReplenishWithOurCard/${USER_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value }),
  });

  return await res.json();
};
