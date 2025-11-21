import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPaths';
import { useNavigate } from 'react-router-dom';
import s from './Home.module.scss';
import { Carousel } from 'antd';
import ring from '../../assets/ring.webp';
import headphones from '../../assets/headphones.jpg';
import coffe from '../../assets/coffe.webp';
import shoes from '../../assets/shoes.avif';
// import bag from '../../assets/bag3.jpg';
import watch from '../../assets/watch.avif';

export const Home = () => {
  const navigate = useNavigate();
  const ID = useAppSelector((user) => user.user.user.id);

  const carouselImages = [ring, headphones, coffe, shoes, watch];

  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <h5>ID {ID}</h5>
        <div className={s.balance}>Balance 0</div>
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
        <div onClick={() => navigate(ROUTES.CHECK_IN_GIFT)} className={s.item}>
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
