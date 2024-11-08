import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthorizationService} from "./service/authori.service";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthorizationService, private router: Router) {}

    canActivate(): Observable<boolean> {
        const hasAccess = this.authService.hasAccess();

        if (!hasAccess) {
            alert("Error");
            this.router.navigate(['/']);
        }

        return hasAccess;
    }
}