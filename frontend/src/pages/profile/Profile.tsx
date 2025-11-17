import { removeUser } from '../../features/user/userSlice';
import { ROUTES } from '../../routes/routhPaths';
import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'antd';
import s from './Profile.module.scss';

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={s.profile}>
      <h1 className={s.title}>Profile</h1>

      <Row gutter={[16, 16]} className={s.infoRow}>
        <Col xs={24} sm={8}>
          <Card className={s.infoCard}>
            <div className={s.infoLabel}>На счету</div>
            <div className={s.infoValue}>0 ₽</div>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className={s.infoCard}>
            <div className={s.infoLabel}>Сегодняшний доход</div>
            <div className={s.infoValue}>0 ₽</div>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className={s.infoCard}>
            <div className={s.infoLabel}>Общий доход</div>
            <div className={s.infoValue}>0 ₽</div>
          </Card>
        </Col>
      </Row>

      <Card className={s.idCard}>
        <h2>ID</h2>
        <div>12345</div>
      </Card>

      <Row gutter={[16, 16]} className={s.buttonRow}>
        <Col xs={12} sm={8}>
          <Button
            onClick={() => navigate(ROUTES.REPLENISH)}
            type="primary"
            block
          >
            Пополнение
          </Button>
        </Col>
        <Col xs={12} sm={8}>
          <Button
            onClick={() => navigate(ROUTES.WIDTDRAW)}
            type="default"
            block
          >
            Вывод
          </Button>
        </Col>
        <Col xs={24} sm={8}>
          <Button
            onClick={() => navigate(ROUTES.ADD_BANK_CARD)}
            type="dashed"
            block
          >
            Связать банковскую карту
          </Button>
        </Col>
        <Col xs={24} sm={12}>
          <Button
            onClick={() => navigate(ROUTES.WIDTDRAW_LIST)}
            type="default"
            block
          >
            Заметки о выводах
          </Button>
        </Col>
        <Col xs={24} sm={12}>
          <Button
            onClick={() => navigate(ROUTES.CHANGE_PASSWORD)}
            type="default"
            block
          >
            Смена пороля
          </Button>
        </Col>
        <Col xs={24}>
          <Button
            onClick={() => navigate(ROUTES.WIDTDRAW_PASSWORD)}
            type="default"
            block
          >
            Ввести код пороля для вывода средств
          </Button>
        </Col>
        <Col xs={24}>
          <Button type="default" block>
            App
          </Button>
        </Col>
        <Col xs={24}>
          <Button onClick={() => dispatch(removeUser())} type="default" block>
            Выход
          </Button>
        </Col>
      </Row>
    </div>
  );
};
