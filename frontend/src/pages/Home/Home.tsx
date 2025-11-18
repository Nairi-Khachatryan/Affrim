import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPaths';
import { useNavigate } from 'react-router-dom';
import s from './Home.module.scss';
import { Carousel } from 'antd';

export const Home = () => {
  const navigate = useNavigate();
  const ID = useAppSelector((user) => user.user.user.id);

  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <h5>ID {ID}</h5>
        <div className={s.balance}>Balance 0</div>
      </div>
      <div className={s.carousel}>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>

      <div className={s.row}>
        <div onClick={() => navigate(ROUTES.REPLENISH)} className={s.item}>
          <img
            className={s.images}
            src="/money-back-guarantee.png"
            alt="maoney"
          />
          <p>replenish</p>
        </div>
        <div onClick={() => navigate(ROUTES.WIDTDRAW)} className={s.item}>
          <img className={s.images} src="/salary.png" alt="widtdraw" />
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
