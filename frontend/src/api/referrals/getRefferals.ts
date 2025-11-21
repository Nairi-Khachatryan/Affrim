import { API_REFERRALS } from '../../routes/urlPaths';

interface GetReferralsResponse {
  success: boolean;
  data: string[];
}

export const getRefferals = async (
  userId: string | null
): Promise<GetReferralsResponse> => {
  const res = await fetch(`${API_REFERRALS}/getReferrals/${userId}`, {
    method: 'GET',
  });

  const data: GetReferralsResponse = await res.json();
  return data;
};
