// export const APP_ROUTES = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('./login.component').then((m) => m.LoginComponent),
//   },
//   {
//     path: 'enter',
//     loadComponent: () =>
//       import('./dashboard/admin.component').then(
//         (m) => m.AdminDashboardComponent,
//       ),
//   },
// ];
import { roleGuard } from './role.guard';

export const APP_ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'enter',
    canMatch: [roleGuard], // ✅ Uses CanMatch to prevent direct access
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
  },
  {
    path: 'admin-dashboard',
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
  },
  {
    path: 'manager-dashboard',
    loadComponent: () =>
      import('./dashboard/manager.component').then(
        (m) => m.ManagerDashboardComponent,
      ),
  },
  // {
  //   path: 'client-dashboard',
  //   loadComponent: () =>
  //     import('./dashboard/client.component').then(
  //       (m) => m.ClientDashboardComponent,
  //     ),
  // },
];
