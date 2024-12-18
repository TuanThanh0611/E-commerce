import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ClickOutside } from 'ngxtension/click-outside';
import { UserProductService } from '../../shared/service/user-product.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { CartService } from '../../shop/cart.service';
import { AuthService } from '../../auth/service/auth.service';
import {TestComponent} from "../../auth/service/test.component";

@Component({
  selector: 'ecom-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FaIconComponent, ClickOutside, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);
  authService = inject(AuthService);
  productService = inject(UserProductService);
  cartService = inject(CartService);
  testComponent=inject(TestComponent);

  nbItemsInCart = 0;

  connectedUserQuery = this.authService.connectedUserQuery;

  categoryQuery = injectQuery(() => ({
    queryKey: ['categories'],
    queryFn: () => lastValueFrom(this.productService.findAllCategories()),
  }));

  signin(): void {
    this.router.navigate(['/signin']);

  }

  register(): void {
    this.router.navigate(['/register']);
  }
  update():void{
    this.router.navigate(['/update']);

  }
  oko():void{
    this.testComponent.okok();
  }

  logout(): void {
    this.closeDropDownMenu();
    this.authService.logout();
    window.location.reload();
  }
 test():void{
    this.router.navigate(['/test']);
 }
  isConnected(): boolean {
    if (this.connectedUserQuery?.status() === 'success') {
      return true;
    } else {

      return false;
    }
  }

  closeDropDownMenu() {
    const bodyElement = document.activeElement as HTMLBodyElement;
    if (bodyElement) {
      bodyElement.blur();
    }
  }

  closeMenu(menu: HTMLDetailsElement) {
    menu.removeAttribute('open');
  }

  ngOnInit(): void {
    this.listenToCart();
  }

  private listenToCart() {
    this.cartService.addedToCart.subscribe((productsInCart) => {
      this.nbItemsInCart = productsInCart.reduce(
          (acc, product) => acc + product.quantity,
          0
      );
    });
  }
}