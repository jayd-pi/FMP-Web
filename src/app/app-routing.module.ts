import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserComponent } from './pages/user/user.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductComponent } from './pages/product/product.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { AdminAppComponent } from './pages/admin/admin-app/admin-app.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  },
  {
    path:'forgotPassword',
    component: ForgotpasswordComponent
  },
  {
    path:'admin',
    component: AdminAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
