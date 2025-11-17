import { Class } from '../utils/createShortClass';
import { Outlet } from 'react-router-dom';
import s from './AppLayout.module.scss';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const AppLayout = () => {
  const theme = 'dark';
  return (
    <>
      <Header />
      <main className={Class(s, 'main', theme)}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
