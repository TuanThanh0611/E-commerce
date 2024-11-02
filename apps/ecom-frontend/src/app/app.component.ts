import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FaConfig,
  FaIconComponent,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { ToastService } from './shared/toast/toast.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/service/auth.service';
import {ConnectedUser} from "./shared/model/user.model";
import {Observable} from "rxjs"; // Import AuthService

@Component({
  standalone: true,
  imports: [
    RouterModule,
    FaIconComponent,
    NavbarComponent,
    FooterComponent,
    NgClass,
    FormsModule,
  ],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService] // Đảm bảo AuthService được cung cấp
})
export class AppComponent implements OnInit {
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);


  private authService = inject(AuthService); // Sử dụng AuthService mới

  toastService = inject(ToastService);

  platformId = inject(PLATFORM_ID);

  // @ts-ignore
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.initAuthentication();
    }
    this.authService.connectedUserQuery = this.authService.toQueryResult();




  }

  ngOnInit(): void {
    this.initFontAwesome();



    // this.checkAuthentication(); // Kiểm tra xác thực khi khởi tạo component
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  // private async checkAuthentication() {
  //   try {
  //     const isAuthenticated = await this.authService.checkAuth();
  //     if (!isAuthenticated) {
  //       this.authService.logout(); // Đăng xuất nếu xác thực không thành công
  //     }
  //   } catch (error) {
  //     console.error('Lỗi xác thực token:', error);
  //     this.authService.logout(); // Đăng xuất khi có lỗi
  //   }
  // }
}