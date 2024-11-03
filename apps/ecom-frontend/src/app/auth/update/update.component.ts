import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Component, inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {BaseUser, ConnectedUser, ShowUser} from "../../shared/model/user.model";
import {CommonModule, DatePipe} from "@angular/common";
import{AuthService} from "../service/auth.service";
import {Observable} from "rxjs";
import {JwtService} from "../service/jwt.service";

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




  constructor(private fb: FormBuilder, private router: Router,
              private authService:AuthService,
  private jwtService: JwtService,) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      firstname: [''],
      lastname: [''],
        email:[''],
      dob: [''],
      phoneNumber: ['', [ Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]],
      imageUrl: ['']
    });
    this.connectedUser$ = this.authService.getAuthenticatedUser();

    // Subscribe vào Observable để lấy dữ liệu và gán cho userInfo
    this.connectedUser$.subscribe(
        (user: ConnectedUser) => {
          this.userInfo = user;
          this.updateForm.patchValue({
              email:user.email
          })
        },
        (error) => {
          console.error('Error fetching user information:', error);
        }
    );
  }



  submitForm(): void {

      console.log(this.updateForm.value);
      this.jwtService.updateUser(this.updateForm.value).subscribe(
          (response) => {
              alert("Update success");
              this.router.navigateByUrl("/");
            }
          ,
          (error) => {
              console.error("Error updating user information:", error);
              alert("Update failed");}

      );

    }

  goToChangePassword(): void {
    // Điều hướng đến trang thay đổi mật khẩu
    this.router.navigate(['/change-password']);
  }
}