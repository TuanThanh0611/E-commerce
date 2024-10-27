import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'ecom-authenticate',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss',
})
export class AuthenticateComponent {
  authenticateRequest={
    email:'',
    password:''
  }
  constructor(private http: HttpClient, private router: Router) {}
  onSubmit() {
    this.http.post('/auth/regis', this.authenticateRequest).subscribe(
        (response) => {
            console.log('Đăng nhap thành công:', response);
            this.router.navigate(['/']);
        },
        (error) => {
            console.error('Lỗi đăng ký:', error);
            // Có thể hiển thị thông báo lỗi cho người dùng
        }
    );
}
}
