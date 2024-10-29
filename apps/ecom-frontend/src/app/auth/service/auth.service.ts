import {Inject, inject, Injectable, PLATFORM_ID} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConnectedUser } from '../../shared/model/user.model';
import {CreateQueryResult, injectQuery} from "@tanstack/angular-query-experimental";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly tokenKey = 'authToken';
    introspectForm!: FormGroup;
    notConnected = 'NOT_CONNECTED';
    connectedUserQuery: CreateQueryResult<ConnectedUser> | undefined;

    constructor(private fb: FormBuilder, private router: Router,
                private http: HttpClient,@Inject(PLATFORM_ID)private platformId:Object) {
    }

    saveToken(token: string): void {
        if(isPlatformBrowser(this.platformId))
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string | null {
        if(isPlatformBrowser(this.platformId))
        return localStorage.getItem(this.tokenKey);
        else
            return null;
    }

    checkAuth(): boolean {
        const token = this.getToken();
        if (!token || !this.isTokenValid(token)) {
            return false;
        }

        // Khai báo một biến để lưu kết quả kiểm tra token
        let isAuthenticated = false;

        // Gọi introspect API để xác thực token
        this.introspect({ token }).subscribe(
            (response) => {
                isAuthenticated = response?.result?.valid ?? false;
            },
            (error) => {
                console.error('Lỗi introspect:', error);
                isAuthenticated = false;
            }
        );

        // Trả về kết quả đã lưu trữ
        return isAuthenticated;
    }

    private isTokenValid(token: string): boolean {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const exp = payload.exp;
            const currentTime = Math.floor(Date.now() / 1000);
            return exp > currentTime;
        } catch (error) {
            return false;
        }
    }

    introspect(introspectRequest: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/auth/token', introspectRequest);
    }

    logout(): void {
        if(isPlatformBrowser(this.platformId)){
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/']);
    }}

    async initAuthentication(): Promise<void> {
        const isAuthenticated = await this.checkAuth();
        if (isAuthenticated) {
            console.log('connected');
        } else {
            console.log('not connected');
            this.router.navigate(['/login']); // Điều hướng nếu không xác thực
        }
    }

    hasAnyAuthorities(user: ConnectedUser, roles: Array<string> | string): boolean {
        if (!Array.isArray(roles)) {
            roles = [roles];
        }
        return user.roles ? user.roles.some((role) => roles.includes(role)) : false;
    }

    fetch(): CreateQueryResult<ConnectedUser> {
        return injectQuery(() => ({
            queryKey: ['connected-user'],
            queryFn: () => firstValueFrom(this.fetchUserHttp(false)),
        }));
    }

    fetchUserHttp(forceResync: boolean): Observable<ConnectedUser> {
        const params = new HttpParams().set('forceResync', forceResync);
        return this.http.get<ConnectedUser>(
            `http://localhost:8080/api/auth/authenticated`,
            { params }
        );
    }
}