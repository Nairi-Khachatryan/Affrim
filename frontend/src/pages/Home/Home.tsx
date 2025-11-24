import headphones from '../../assets/headphones.jpg';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPaths';
import { useNavigate } from 'react-router-dom';
import coffe from '../../assets/coffe.webp';
import shoes from '../../assets/shoes.avif';
import watch from '../../assets/watch.avif';
import ring from '../../assets/ring.webp';
import s from './Home.module.scss';
import { Carousel } from 'antd';

export const Home = () => {
  const navigate = useNavigate();
  const user = useAppSelector((user) => user.user.user);
  const carouselImages = [ring, headphones, coffe, shoes, watch];

  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <h5>ID {user.id}</h5>
        <div className={s.balance}>Balance {user.balance}</div>
      </div>

      <div className={s.carousel}>
        <Carousel autoplay>
          {carouselImages.map((img, index) => (
            <div key={index} className={s.carouselItem}>
              <img className={s.carouselImg} src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={s.row}>
        <div onClick={() => navigate(ROUTES.REPLENISH)} className={s.item}>
          <img
            className={s.images}
            src="/money-back-guarantee.png"
            alt="money"
          />
          <p>replenish</p>
        </div>
        <div onClick={() => navigate(ROUTES.WIDTDRAW)} className={s.item}>
          <img className={s.images} src="/salary.png" alt="withdraw" />
          <p>withdraw</p>
        </div>
        <div onClick={() => navigate(ROUTES.DAILY_REWARDS)} className={s.item}>
          <img className={s.images} src="/check-in.png" alt="checkIn" />
          <p>check in gift</p>
        </div>
      </div>

      <div className={s.row}>
        <div onClick={() => navigate(ROUTES.DEPOSIT)} className={s.item}>
          <img className={s.pigImg} src="/piggy-bank.png" alt="pig" />
          <p>deposit</p>
        </div>
        <div onClick={() => navigate(ROUTES.SLOT)} className={s.item}>
          <img className={s.slotImg} src="/arcade-machine.png" alt="slot" />
          <p>Slot</p>
        </div>
        <div onClick={() => navigate(ROUTES.CREDIT)} className={s.item}>
          <img className={s.images} src="/bank.png" alt="credit" />
          <p>credit</p>
        </div>
      </div>
    </div>
  );
};
