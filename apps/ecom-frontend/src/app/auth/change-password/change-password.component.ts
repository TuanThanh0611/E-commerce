import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from "../service/auth.service";
import {JwtService} from "../service/jwt.service";

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

  constructor(private fb: FormBuilder,private authService:AuthService,private jwtService:JwtService) {}

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmNewPassword = form.get('confirmNewPassword')?.value;
    return newPassword === confirmNewPassword ? null : { mismatch: true };
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
