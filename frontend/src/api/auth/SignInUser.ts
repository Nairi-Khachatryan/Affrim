import { API_AUTH } from '../../routes/urlpaths';

type signInReqParams = {
  phone: number;
  password: string;
};

type signInResponce = {
  success: boolean;
  message: string;
  data: {
    name: string;
    surname: string;
    phone: number;
    id: string;
  };
};

export const signInUser = async (userData: signInReqParams) => {
  const res = await fetch(`${API_AUTH}/signIn`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  return (await res.json()) as signInResponce;
};
