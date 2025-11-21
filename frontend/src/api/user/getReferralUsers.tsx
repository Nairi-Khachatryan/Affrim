import { API_USER } from '../../routes/urlPaths';

interface ReferralUser {
  _id: string;
  name: string;
  surname: string;
  phone: number;
  passwordHash: string;
  hamsterClickCount: number;
  referralCode: string;
  referredBy: string | null;
  referrals: string[];
  balance: number;
  registrationIp: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export const getReferralUsers = async (
  refUsersIdArr: string[]
): Promise<ReferralUser[]> => {
  const res = await fetch(`${API_USER}/getRefUsers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids: refUsersIdArr }),
  });

  const data = await res.json();
  return data as ReferralUser[];
};
