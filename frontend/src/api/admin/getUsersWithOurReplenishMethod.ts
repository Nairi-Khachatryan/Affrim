import { API_ADMIN } from '../../routes/urlPaths';

export const getUsersWithOurReplenishMethod = async (
  USER_ID: string | null
) => {
  const res = await fetch(`${API_ADMIN}/getUsersWithOurReplenish/${USER_ID}`, {
    method: 'GET',
  });

  console.log(res);
};
