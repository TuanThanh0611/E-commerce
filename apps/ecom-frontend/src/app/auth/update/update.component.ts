import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConnectedUser } from "../../shared/model/user.model";
import { CommonModule, DatePipe } from "@angular/common";
import { AuthService } from "../service/auth.service";
import { Observable } from "rxjs";
import { JwtService } from "../service/jwt.service";

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

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private jwtService: JwtService
    ) {}

    ngOnInit(): void {
        this.updateForm = this.fb.group({
            firstname: [''],
            lastname: [''],
            email: [''],
            dob: [''],
            phoneNumber: ['', [Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]],
            imageUrl: [''],
            addresses: this.fb.array([])
        });

        // Lấy thông tin người dùng đã xác thực
        this.connectedUser$ = this.authService.getAuthenticatedUser();

        // Subscribe để gán thông tin người dùng vào form
        this.connectedUser$.subscribe(
            (user: ConnectedUser) => {
                this.userInfo = user;
                this.updateForm.patchValue({
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    dob: user.dob,
                    phoneNumber: user.phoneNumber,
                    imageUrl: user.imageUrl
                });

                // Thiết lập địa chỉ từ dữ liệu người dùng
                this.setAddresses(user.userAddresses || []);
            },
            (error) => {
                console.error('Error fetching user information:', error);
            }
        );
    }
    oko():void{
        alert(this.userInfo?.email)
}

    // Getter cho FormArray addresses
    get addresses(): FormArray {
        return this.updateForm.get('addresses') as FormArray;
    }

    // Thêm một FormGroup địa chỉ vào FormArray addresses
    addAddress(): void {
        this.addresses.push(
            this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zipCode: [''],
                country: ['']
            })
        );
    }

    // Xóa một địa chỉ theo chỉ số
    removeAddress(index: number): void {
        this.addresses.removeAt(index);
    }

    // Thiết lập các địa chỉ hiện có trong form nếu có
    setAddresses(addresses: any[]): void {
        addresses.forEach((address) => {
            this.addresses.push(this.fb.group({
                street: [address.street],
                city: [address.city],
                state: [address.state],
                zipCode: [address.zipCode],
                country: [address.country]
            }));
        });
    }

    submitForm(): void {
        if (this.updateForm.valid) {
            console.log(this.updateForm.value);

            this.jwtService.updateUser(this.updateForm.value).subscribe(
                (response) => {
                    alert("Update success");
                    this.router.navigateByUrl("/");
                },
                (error) => {
                    console.error("Error updating user information:", error);
                    alert("Update failed");
                }
            );
        } else {
            alert("Please correct the errors in the form.");
        }
    }

    goToChangePassword(): void {
        this.router.navigate(['/change-password']);
    }
}