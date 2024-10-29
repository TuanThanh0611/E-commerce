import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { of, from } from 'rxjs';
import { catchError, map, switchMap, timeout } from 'rxjs/operators';
import {AuthService} from "./service/auth.service";

export const roleCheckGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const authorities = next.data['authorities'];

    // Sử dụng AuthService để kiểm tra quyền
    return from(authService.fetchUserHttp(false)).pipe(
        map((user) => {
          return (
              !authorities ||
              authorities.length === 0 ||
              authService.hasAnyAuthorities(user, authorities)
          );
        }),
        catchError(() => of(false)), // Nếu có lỗi, trả về false
        timeout(3000) // Timeout sau 3 giây
    );
  } else {
    return of(false);
  }
};