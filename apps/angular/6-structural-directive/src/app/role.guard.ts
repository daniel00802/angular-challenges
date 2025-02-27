import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserStore } from './user.store'; // Import user store

export const roleGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[],
): Observable<boolean> => {
  const userStore = inject(UserStore);
  const router = inject(Router);

  return userStore.user$.pipe(
    map((user) => {
      if (!user) {
        router.navigate(['/']); // Redirect to login if no user
        return false;
      }

      // Check user role and dynamically redirect
      if (user.isAdmin) {
        router.navigate(['/admin-dashboard']);
      } else if (user.roles.includes('MANAGER')) {
        router.navigate(['/manager-dashboard']);
      } else if (user.roles.includes('CLIENT')) {
        router.navigate(['/client-dashboard']);
      } else {
        router.navigate(['/']); // Redirect unknown roles to login
      }

      return false; // Prevent `/enter` from matching directly
    }),
  );
};
