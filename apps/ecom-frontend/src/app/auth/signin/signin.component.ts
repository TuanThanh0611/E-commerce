import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from "../service/jwt.service";
import { switchMap } from 'rxjs/operators';
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-signin',
    standalone: true,
    templateUrl: './signin.component.html',
    imports: [ReactiveFormsModule],
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    signinForm!: FormGroup;
    isLoading = false; // Trạng thái tải

    constructor(
        private service: JwtService,
        private fb: FormBuilder,
        private router: Router,
        private authService:AuthService
    ) {}

    ngOnInit(): void {
        this.signinForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }



    submitForm() {
        if (this.signinForm?.valid) {
            console.log(this.signinForm.value);

            this.service.signin(this.signinForm.value).subscribe(
                (response) => {
                    const isAuthenticate=response?.result?.authenticated;
                    const token=response?.result?.token;
                    if(isAuthenticate){
                        this.authService.saveToken(token);
                        alert("Login Success");
                        this.router.navigateByUrl("/");
                    }
                }
            );
        } else {
            alert("Form is invalid");
        }
    }
}