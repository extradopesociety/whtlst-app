import { RouteObject } from "react-router-dom/dist/index.d.mts";
import MemberDashboardLayout from "../layouts/MemberDashboardLayout";
import Membership from "../pages/dashboard/Membership";
import Certificates from "../pages/dashboard/Certificates";
import Rewards from "../pages/dashboard/Rewards";
import MyAccount from "../pages/dashboard/MyAccount";

const memberRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <MemberDashboardLayout />,
    children: [
      { index: true, element: <Membership /> }, // /dashboard
      { path: "certificates", element: <Certificates /> }, // /dashboard/certificates
      { path: "rewards", element: <Rewards /> }, // /dashboard/rewards
      { path: "account", element: <MyAccount /> }, // /dashboard/account
    ],
  },
];

export default memberRoutes;
