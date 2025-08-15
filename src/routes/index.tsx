import { RouteObject, useRoutes, Navigate } from "react-router-dom";
import memberRoutes from "./memberRoutes";
// If your admin already exports a RouteObject[], import it:
import adminRoutes from "../admin/routes/adminRoutes";

// Public pages
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Splash from "../pages/Splash";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/splash", element: <Splash /> },
  { path: "/about", element: <About /> },
  { path: "/shop", element: <Shop /> },
  { path: "/explore", element: <Explore /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },

  // Member dashboard
  ...memberRoutes,

  // Admin
  ...adminRoutes,

  // Fallback
  { path: "*", element: <Navigate to="/dashboard" replace /> },
];

export default function AppRoutes() {
  return useRoutes(routes);
}
