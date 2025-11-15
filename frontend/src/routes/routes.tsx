import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routhPaths';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/auth/SignIn/SignIn';
import { SignUp } from '../pages/auth/SignUp/Signup';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PATH,
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: ROUTES.HOME_PATH,
        element: <Home />,
      },
      {
        path: ROUTES.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUp />,
      },
    ],
  },
]);
