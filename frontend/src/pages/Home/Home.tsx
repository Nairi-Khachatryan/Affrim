import replenish from '../../../public/money-back-guarantee.png';
import slotImg from '../../../public/arcade-machine.png';
import pigImg from '../../../public/piggy-bank.png';
import checkIn from '../../../public/check-in.png';
import widthraw from '../../../public/salary.png';
import { ROUTES } from '../../routes/routhPaths';
import { useNavigate } from 'react-router-dom';
import credit from '../../../public/bank.png';
import s from './Home.module.scss';
import { Carousel } from 'antd';

export const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <h1>ID 454543</h1>
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
          <img className={s.images} src={replenish} alt="" />
          <p>replenish</p>
        </div>
        <div onClick={() => navigate(ROUTES.WIDTDRAW)} className={s.item}>
          <img className={s.images} src={widthraw} alt="" />
          <p>withdraw</p>
        </div>
        <div onClick={() => navigate(ROUTES.CHECK_IN_GIFT)} className={s.item}>
          <img className={s.images} src={checkIn} alt="checkIn" />
          <p>check in gift</p>
        </div>
      </div>

      <div className={s.row}>
        <div onClick={() => navigate(ROUTES.DEPOSIT)} className={s.item}>
          <img className={s.pigImg} src={pigImg} alt="pig" />
          <p>deposit</p>
        </div>
        <div onClick={() => navigate(ROUTES.SLOT)} className={s.item}>
          <img className={s.slotImg} src={slotImg} alt="slot" />
          <p>Slot</p>
        </div>
        <div onClick={() => navigate(ROUTES.CREDIT)} className={s.item}>
          <img className={s.images} src={credit} alt="credit" />
          <p>credit</p>
        </div>
      </div>
    </div>
  );
};
