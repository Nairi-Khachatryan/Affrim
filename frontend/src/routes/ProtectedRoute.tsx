import { Outlet, Navigate } from 'react-router-dom';
import { ROUTES } from './routhPaths';
// import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = () => {
  // const isAuth = useAuth();
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
