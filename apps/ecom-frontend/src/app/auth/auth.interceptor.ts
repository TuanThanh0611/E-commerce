import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { switchMap, catchError, throwError } from 'rxjs';
import {JwtService} from "./service/jwt.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const jwtService = inject(JwtService);
    const accessToken = jwtService.getAccessToken();

    let clonedRequest = req;
    if (accessToken) {
        clonedRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }

    return next(clonedRequest).pipe(
        catchError((error) => {
            // Kiểm tra lỗi 401 để làm mới Access Token
            if (error.status === 401 && jwtService.getRefreshToken()) {
                return jwtService.refreshAccessToken().pipe(
                    switchMap((newToken) => {
                        const newRequest = req.clone({
                            setHeaders: {
                                Authorization: `Bearer ${newToken}`,
                            },
                        });
                        return next(newRequest);
                    })
                );
            }
            return throwError(() => error);
        })
    );
};