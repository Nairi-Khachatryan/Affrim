import { ROUTES } from '../../routes/routhPaths';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import s from './Header.module.scss';
import { Button } from 'antd';

export const Header = () => {
  const isAdmin = useAppSelector((state) => state.user.user.isAdmin);

  const navigate = useNavigate();
  return (
    <div className={s.header}>
      <div className={s.logoContainer}>
        <img
          onClick={() => navigate(ROUTES.HOME_PATH)}
          src={logo}
          alt="logo"
          className={s.logo}
        />
      </div>

      {isAdmin && (
        <Button onClick={() => navigate(ROUTES.ADMIN_PAGE)}>Admin</Button>
      )}
    </div>
  );
};
