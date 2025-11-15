import s from './Footer.module.scss';
import {
  HomeOutlined,
  GiftOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routhPaths';

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={s.footer}>
      <div className={s.navbar}>
        <div onClick={() => navigate(ROUTES.HOME_PATH)} className={s.navItem}>
          <HomeOutlined style={{ fontSize: 24 }} />
          <p>Home</p>
        </div>
        <div onClick={() => navigate(ROUTES.MARKET)} className={s.navItem}>
          <ShoppingCartOutlined style={{ fontSize: 24 }} />
          <p>Shop</p>
        </div>
        <div onClick={() => navigate(ROUTES.GIFT)} className={s.navItem}>
          <GiftOutlined style={{ fontSize: 24 }} />
          <p>Gift</p>
        </div>
        <div onClick={() => navigate(ROUTES.TEAM)} className={s.navItem}>
          <TeamOutlined style={{ fontSize: 24 }} />
          <p>Team</p>
        </div>
        <div onClick={() => navigate(ROUTES.HAMSTER)} className={s.navItem}>
          <FaGithub size={24} />
          <p>Hamster</p>
        </div>
        <div onClick={() => navigate(ROUTES.PROFILE)} className={s.navItem}>
          <UserOutlined style={{ fontSize: 24 }} />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};
