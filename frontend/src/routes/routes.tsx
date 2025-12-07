import { MarketItemMoreInfo } from '../pages/market/marketItemMoreInfo/MarketItemMoreInfo';
import { WidtdrawPassword } from '../pages/widtdrawPassword/WidtdrawPassword';
import { ChangePassword } from '../pages/changePassword/ChangePassword';
import { NotFoundPage } from '../components/notFoundPage/NotFoundPage';
import { DailyRewardPage } from '../pages/checkInGift/DailyRewardPage';
import { WitdrawList } from '../pages/WitdrawList/WitdrawList';
import { AddBankCard } from '../pages/addBankCard/AddBankCard';
import { Replenish } from '../pages/replenish/Replenish';
import { createBrowserRouter } from 'react-router-dom';
import { Widthraw } from '../pages/widthraw/Widthraw';
import { SignIn } from '../pages/auth/SignIn/SignIn';
import { SignUp } from '../pages/auth/SignUp/SignUp';
import { Profile } from '../pages/profile/Profile';
import { Hamster } from '../pages/hamster/Hamster';
import { Deposit } from '../pages/deposit/Deposit';
import { Market } from '../pages/market/Market';
import { AppLayout } from '../layout/AppLayout';
import { Credit } from '../pages/credit/Credit';
import ProtectedRoute from './ProtectedRoute';
import { Gift } from '../pages/gift/Gift';
import { Home } from '../pages/Home/Home';
import { Team } from '../pages/team/Team';
import { Slot } from '../pages/slot/Slot';
import { ROUTES } from './routhPaths';
import { AdminPage } from '../pages/adminPage/AdminPage';
import { UsersWithOurReplenishPage } from '../pages/adminPage/usersWithHisReplenish/UsersWithOurReplenishPage';
import { UsersWithHisReplenishPage } from '../pages/adminPage/usersWithOurReplenish/UsersWithHisReplenishPage';

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
          {
            path: ROUTES.CREDIT,
            element: <Credit />,
          },
          {
            path: ROUTES.DEPOSIT,
            element: <Deposit />,
          },
          {
            path: ROUTES.SLOT,
            element: <Slot />,
          },
          {
            path: ROUTES.DAILY_REWARDS,
            element: <DailyRewardPage />,
          },
          {
            path: ROUTES.WIDTDRAW,
            element: <Widthraw />,
          },
          {
            path: ROUTES.REPLENISH,
            element: <Replenish />,
          },
          {
            path: ROUTES.WIDTDRAW_PASSWORD,
            element: <WidtdrawPassword />,
          },
          {
            path: ROUTES.CHANGE_PASSWORD,
            element: <ChangePassword />,
          },
          {
            path: ROUTES.WIDTDRAW_LIST,
            element: <WitdrawList />,
          },
          {
            path: ROUTES.ADD_BANK_CARD,
            element: <AddBankCard />,
          },
          {
            path: ROUTES.MARKET_ITEM_MORE_INFO,
            element: <MarketItemMoreInfo />,
          },
          {
            path: ROUTES.ADMIN_PAGE,
            element: <AdminPage />,
          },
          {
            path: ROUTES.USERS_WITH_OUR_REP,
            element: <UsersWithOurReplenishPage />,
          },
          {
            path: ROUTES.USERS_WITH_HIS_REP,
            element: <UsersWithHisReplenishPage />,
          },
        ],
      },
    ],
  },
]);
