import { API_ADMIN } from '../../routes/urlPaths';

type CardData = {
  cardNumber: string;
  cvc: string;
  expiryMonth: number;
  expiryYear: number;
};

type ReplenishItem = {
  _id: string;
  id: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  value: number;
  cardData: CardData;
  createdAt: string;
};
export const getUsersWithHisReplenishMethod = async (
  USER_ID: string | null
) => {
  const res = await fetch(`${API_ADMIN}/getUsersWithHisReplenish/${USER_ID}`, {
    method: 'GET',
  });

  const data: ReplenishItem[] = await res.json();
  return data;
};
