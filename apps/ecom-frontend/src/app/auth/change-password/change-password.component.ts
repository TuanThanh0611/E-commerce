import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from "../service/auth.service";
import {JwtService} from "../service/jwt.service";
import {Router} from "@angular/router";
import {ConnectedUser} from "../../shared/model/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  connectedUser$: Observable<ConnectedUser> | undefined;
  userInfo: ConnectedUser | undefined


  constructor(private fb: FormBuilder, private router: Router,private authService:AuthService,private jwtService:JwtService) {}

  ngOnInit(): void {
    this.connectedUser$ = this.authService.getAuthenticatedUser();
    this.changePasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
    this.connectedUser$.subscribe(
        (user: ConnectedUser) => {
          this.userInfo = user;
          this.changePasswordForm.patchValue({
            email:user.email
          })
        },
        (error) => {
          console.error('Error fetching user information:', error);
        }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmNewPassword = form.get('confirmNewPassword')?.value;
    return password === confirmNewPassword ? null : { mismatch: true };
  }

  submitForm(): void {
    if (this.changePasswordForm.valid) {
      // Tạo một bản sao dữ liệu form và loại bỏ confirmNewPassword
      const formData = { ...this.changePasswordForm.value };
      delete formData.confirmNewPassword;

      // Gọi API với formData mà không bao gồm confirmNewPassword
      this.jwtService.updatePass(formData).subscribe(
          (response) => {
            alert("Password changed successfully");
            this.router.navigate(['/']);
          },
          (error) => {
            console.error("Error changing password:", error);
            alert("Failed to change password");
          }
      );
    } else {
      alert("Form is invalid");
    }
  }
}
