import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routhPaths';
import { Button } from 'antd';

export const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Button onClick={() => navigate(ROUTES.USERS_WITH_OUR_REP)}>
          See users replenish with our card
        </Button>
        <Button onClick={() => navigate(ROUTES.USERS_WITH_HIS_REP)}>
          See users replenish with his card
        </Button>
      </div>
    </div>
  );
};
