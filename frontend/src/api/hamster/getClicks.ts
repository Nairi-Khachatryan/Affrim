import { API_HAMSTER } from '../../routes/urlPaths';

export const getClicks = async (userId: string | null) => {
  const res = await fetch(`${API_HAMSTER}/getClicks/${userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch clicks');
  }

  const data = await res.json();

  return data.clickCount ?? 0; 
};
