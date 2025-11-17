import { API_AUTH } from '../../routes/urlpaths';

type createUserParams = {
  name: string;
  surname: string;
  phone: number;
  password: string;
};

type createUserResponce = {
  success: boolean;
  message: string;
  data?: {
    name: string;
    surname: string;
    phone: number;
    id: string;
  };
};

export const createUser = async (values: createUserParams) => {
  const res = await fetch(`${API_AUTH}/signUp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  return (await res.json()) as createUserResponce;
};
