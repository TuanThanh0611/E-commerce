import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Component, inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {BaseUser, ConnectedUser, ShowUser} from "../../shared/model/user.model";
import {CommonModule, DatePipe} from "@angular/common";
import{AuthService} from "../service/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    CommonModule
  ],
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;
  connectedUser$: Observable<ConnectedUser> | undefined;
  userInfo: ConnectedUser | undefined;




  constructor(private fb: FormBuilder, private router: Router,private authService:AuthService ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]],
      imageUrl: ['']
    }, { validator: this.passwordMatchValidator });
    this.connectedUser$ = this.authService.getAuthenticatedUser();

    // Subscribe vào Observable để lấy dữ liệu và gán cho userInfo
    this.connectedUser$.subscribe(
        (user: ConnectedUser) => {
          this.userInfo = user;
        },
        (error) => {
          console.error('Error fetching user information:', error);
        }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  submitForm(): void {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
      // Gửi dữ liệu form đi, ví dụ gọi API để cập nhật thông tin
    }
  }
  goToChangePassword(): void {
    // Điều hướng đến trang thay đổi mật khẩu
    this.router.navigate(['/change-password']);
  }
}