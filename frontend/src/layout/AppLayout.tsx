import { Outlet } from 'react-router-dom';
import s from './AppLayout.module.scss';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Class } from '../utils/createShortClass';

const theme = 'dark'; // delete after cretae theme provider

export const AppLayout = () => {
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
