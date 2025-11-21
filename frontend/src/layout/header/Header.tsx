import s from './Header.module.scss';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routhPaths';

export const Header = () => {
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
    </div>
  );
};
