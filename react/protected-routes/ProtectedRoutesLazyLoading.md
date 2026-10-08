## This comes AppLazyLoading.jsx file first
```js
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {
  const token = localStorage.getItem("AccessToken");
  if (!token) {
    return <Navigate to="/login" replace />
  }

  return (
    <Suspense fallback={"Loading...."}>
      <Outlet />
    </Suspense>
  )
}

export default ProtectedRoutes;

```
