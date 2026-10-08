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

/** Routes with Lazy loading */

import { Suspense } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuthenticated = Boolean(
    localStorage.getItem("accessToken")
  );
  // const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default ProtectedRoute;






