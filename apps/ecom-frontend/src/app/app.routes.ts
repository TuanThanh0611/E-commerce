import { Route } from '@angular/router';
import { AdminCategoriesComponent } from './admin/category/admin-categories/admin-categories.component';
import { CreateCategoryComponent } from './admin/category/create-category/create-category.component';
import { roleCheckGuard } from './auth/role-check.guard';
import { CreateProductComponent } from './admin/product/create-product/create-product.component';
import { AdminProductsComponent } from './admin/product/admin-products/admin-products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ProductsComponent } from './shop/products/products.component';
import { CartComponent } from './shop/cart/cart.component';
import { CartSuccessComponent } from './shop/cart-success/cart-success.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthenticateComponent } from './auth/authenticate/authenticate.component';
import {UpdateComponent} from "./auth/update/update.component";
import {ChangePasswordComponent} from "./auth/change-password/change-password.component";
import {RoleGuard} from "./auth/role-guard";
import {TestComponent} from "./auth/service/test.component";
export const appRoutes: Route[] = [
  {
    path: 'authenticate',
    component: AuthenticateComponent
  },
  {
    path: 'test',
    component: TestComponent
  }

  ,
  {
    path: 'register',
    component: RegisterComponent
  },{
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  
  {
    path: 'admin/categories/list',
    component: AdminCategoriesComponent,
    canActivate: [RoleGuard],
  },
  {
    path: 'admin/categories/create',
    component: CreateCategoryComponent,
    canActivate: [RoleGuard],

  },
  {
    path: 'admin/products/create',
    component: CreateProductComponent,
    canActivate: [RoleGuard],
  },
  {
    path: 'admin/products/list',
    component: AdminProductsComponent,
    canActivate: [RoleGuard],

  },
  {
    path: 'admin/orders/list',
    component: AdminOrdersComponent,
    canActivate: [RoleGuard],},
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/:publicId',
    component: ProductDetailComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/success',
    component: CartSuccessComponent,
  },
  {
    path: 'users/orders',
    component: UserOrdersComponent
  },
  
];
