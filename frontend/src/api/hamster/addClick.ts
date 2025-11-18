import { API_HAMSTER } from '../../routes/urlPaths';

export const addClick = async (userId: string | null, clickCount: number) => {
  const res = await fetch(`${API_HAMSTER}/addClick`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, clickCount }),
  });

  return res.json();
};
