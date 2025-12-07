import { API_ADMIN } from '../../routes/urlPaths';

export const getUsersWithHisReplenishMethod = async (
  USER_ID: string | null
) => {
  const res = await fetch(`${API_ADMIN}/getUsersWithHisReplenish/${USER_ID}`, {
    method: 'GET',
  });

  console.log(res);
};
