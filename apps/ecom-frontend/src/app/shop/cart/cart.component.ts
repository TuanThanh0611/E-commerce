import { Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CartService } from '../cart.service';

import { ToastService } from '../../shared/toast/toast.service';
import { CartItem, CartItemAdd, StripeSession } from '../cart.model';
import {
  injectMutation,
  injectQuery,
} from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';
import { StripeService } from 'ngx-stripe';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'ecom-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  authService = inject(AuthService); // Sử dụng AuthService
  toastService = inject(ToastService);
  stripeService = inject(StripeService);

  cart: Array<CartItem> = [];

  platformId = inject(PLATFORM_ID);

  labelCheckout = 'Login to checkout';
  action: 'login' | 'checkout' = 'login';
  isInitPaymentSessionLoading = false;

  cartQuery = injectQuery(() => ({
    queryKey: ['cart'],
    queryFn: () => lastValueFrom(this.cartService.getCartDetail()),
  }));

  initPaymentSession = injectMutation(() => ({
    mutationFn: (cart: Array<CartItemAdd>) =>
        lastValueFrom(this.cartService.initPaymentSession(cart)),
    onSuccess: (result: StripeSession) => this.onSessionCreateSuccess(result),
  }));

  constructor() {
    this.extractListToUpdate();
    this.checkUserLoggedIn(); // Kiểm tra đăng nhập bằng AuthService
  }

  private extractListToUpdate() {
    effect(() => {
      if (this.cartQuery.isSuccess()) {
        this.cart = this.cartQuery.data().products;
      }
    });
  }

  private async checkUserLoggedIn() {
    const isAuthenticated = await this.authService.checkAuth(); // Kiểm tra đăng nhập bằng AuthService
    if (isAuthenticated) {
      this.labelCheckout = 'Checkout';
      this.action = 'checkout';
    } else {
      this.labelCheckout = 'Login to checkout';
      this.action = 'login';
    }
  }

  ngOnInit(): void {
    this.cartService.addedToCart.subscribe((cart) => this.updateQuantity(cart));
  }

  private updateQuantity(cartUpdated: Array<CartItemAdd>) {
    for (const cartItemToUpdate of this.cart) {
      const itemToUpdate = cartUpdated.find(
          (item) => item.publicId === cartItemToUpdate.publicId
      );
      if (itemToUpdate) {
        cartItemToUpdate.quantity = itemToUpdate.quantity;
      } else {
        this.cart.splice(this.cart.indexOf(cartItemToUpdate), 1);
      }
    }
  }

  addQuantityToCart(publicId: string) {
    this.cartService.addToCart(publicId, 'add');
  }

  removeQuantityToCart(publicId: string, quantity: number) {
    if (quantity > 1) {
      this.cartService.addToCart(publicId, 'remove');
    }
  }

  removeItem(publicId: string) {
    const itemToRemoveIndex = this.cart.findIndex(
        (item) => item.publicId === publicId
    );
    if (itemToRemoveIndex !== -1) {
      this.cart.splice(itemToRemoveIndex, 1);
    }
    this.cartService.removeFromCart(publicId);
  }

  computeTotal() {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  checkIfEmptyCart(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return (
          this.cartQuery.isSuccess() &&
          this.cartQuery.data().products.length === 0
      );
    } else {
      return false;
    }
  }

  checkout() {
    if (this.action === 'login') {
      this.authService.logout(); // Đăng xuất và chuyển hướng đến trang đăng nhập
    } else if (this.action === 'checkout') {
      this.isInitPaymentSessionLoading = true;
      const cartItemsAdd = this.cart.map(
          (item) =>
              ({ publicId: item.publicId, quantity: item.quantity } as CartItemAdd)
      );
      this.initPaymentSession.mutate(cartItemsAdd);
    }
  }

  private onSessionCreateSuccess(sessionId: StripeSession) {
    this.cartService.storeSessionId(sessionId.id);
    this.stripeService
        .redirectToCheckout({ sessionId: sessionId.id })
        .subscribe((results) => {
          this.isInitPaymentSessionLoading = false;
          if (results.error) {
            this.toastService.show(`Order error: ${results.error.message}`, 'ERROR');
          }
        });
  }
}