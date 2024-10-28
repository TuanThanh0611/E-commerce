import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {
    CreateQueryResult,
    injectQuery,
} from '@tanstack/angular-query-experimental';

import { firstValueFrom, Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {ConnectedUser} from "../../shared/model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    http = inject(HttpClient);
    private readonly tokenKey='authToken';
    introspectForm!: FormGroup;
    connectedUserQuery: CreateQueryResult<ConnectedUser> | undefined;

    notConnected = 'NOT_CONNECTED';
    constructor(private fb: FormBuilder,
                private router: Router) {
    }
    saveToken(token:string):void{
        localStorage.setItem(this.tokenKey,token);
    }
    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    checkAuth(): boolean {
        const token = this.getToken();
        let introspect=true;
        this.introspectForm = this.fb.group({
            token: ['', [Validators.required]],
        });
        if (!token) {
            return false;
        }
        this.introspect(this.introspectForm.value).subscribe(
            (response) => {
                introspect=response?.result?.valid

            }
        );

        return introspect&&this.isTokenValid(token);
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

    introspect(introspectRequest:any):Observable<any>{
        return this.http.post('http://localhost:8080/api/auth/token', introspectRequest)
    }
    logout(): void {
        localStorage.removeItem(this.tokenKey);
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
            `${environment.apiUrl}/users/authenticated`,
            { params }
        );
    }






    initAuthentication(): void {
        const isAuthenticated = this.checkAuth();
        if (isAuthenticated) {
            console.log('connected');
        } else {
            console.log('not connected');
        }
    }

    // hasAnyAuthorities(
    //     connectedUser: ConnectedUser,
    //     roles: Array<string> | string
    // ): boolean {
    //     if (!Array.isArray(roles)) {
    //         roles = [roles];
    //     }
    //     if (connectedUser.roles) {
    //         return connectedUser.roles.some((authority: string) =>
    //             roles.includes(authority)
    //         );
    //     } else {
    //         return false;
    //     }
    // }
}
