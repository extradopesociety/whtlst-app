// src/admin/routes/adminRoutes.tsx
//import React from 'react';
import type { RouteObject } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import InventoryPage from '../pages/InventoryPage';
// (later: import other admin pages)

const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'inventory', element: <InventoryPage /> },
      // other pages like 'rewards', 'users', etc.
    ],
  },
];

export default adminRoutes;
