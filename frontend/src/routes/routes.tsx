import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routhPaths';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/auth/SignIn/SignIn';
import { SignUp } from '../pages/auth/SignUp/SignUp';
import { Profile } from '../pages/profile/Profile';
import { Hamster } from '../pages/hamster/Hamster';
import { Gift } from '../pages/gift/Gift';
import { Market } from '../pages/market/Market';
import { Team } from '../pages/team/Team';
import ProtectedRoute from './ProtectedRoute';
import { NotFoundPage } from '../components/notFoundPage/NotFoundPage';

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
      {
        path: ROUTES.NOT_FOUND_PAGE,
        element: <NotFoundPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.PROFILE,
            element: <Profile />,
          },
          {
            path: ROUTES.HAMSTER,
            element: <Hamster />,
          },
          {
            path: ROUTES.GIFT,
            element: <Gift />,
          },
          {
            path: ROUTES.MARKET,
            element: <Market />,
          },
          {
            path: ROUTES.TEAM,
            element: <Team />,
          },
        ],
      },
    ],
  },
]);
