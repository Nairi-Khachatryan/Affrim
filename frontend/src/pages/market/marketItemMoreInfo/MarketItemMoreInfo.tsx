import { useLocation } from 'react-router-dom';
import s from './MarketItemMore.module.scss';

export const MarketItemMoreInfo = () => {
  const location = useLocation();

  console.log(location.state, 'loc');

  return <div>More Info</div>;
};
