import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}

export default ProtectedRoutes;
