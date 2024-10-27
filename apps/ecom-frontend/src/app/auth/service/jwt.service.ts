import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

const BASE_URL = ["http://localhost:8080/"]

@Injectable({
    providedIn: 'root'
})
export class JwtService {

    constructor(private http: HttpClient) { }

    register(signRequest: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/auth/regis', signRequest)
    }

    signin(signinRequest: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/auth/regis', signinRequest)
    }

    hello(): Observable<any> {
        const headers = this.createAuhtorizationHeader();
        // Kiểm tra xem headers có tồn tại không
        if (headers) {
            return this.http.get(BASE_URL + 'api/hello', { headers });
        } else {
            console.error("JWT token not found, unable to call /api/hello");
            return of({ error: 'No JWT token found' }); // Trả về observable rỗng hoặc thông báo lỗi
        }
    }

    private createAuhtorizationHeader() {
        const jwtToken = localStorage.getItem('jwt');
        if (jwtToken) {
            console.log("JWT token found in local storage", jwtToken);
            return new HttpHeaders().set(
                "Authorization", "Bearer " + jwtToken
            )
        } else {
            console.log("JWT token not found in local storage");
        }
        return undefined;
    }

}