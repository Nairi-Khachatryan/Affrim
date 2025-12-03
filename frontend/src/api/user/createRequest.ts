import { API_USER } from '../../routes/urlPaths';

export const createRequestWithHerCard = async (
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

export const createRequestWithOurCard = async (
  USER_ID: string | null,
  value: number
) => {
  const res = await fetch(`${API_USER}/createReplenishWithHisCard/${USER_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value }),
  });

  return await res.json();
};
