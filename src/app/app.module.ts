import { SideNavComponent } from './pages/admin/admin-layouts/side-nav/side-nav.component';
import { SaleByCategoryComponent } from './pages/admin/Admin-chart/sale-by-category/sale-by-category.component';
import { AdminMainComponent } from './pages/admin/admin-main/admin-main.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaymentComponent } from './pages/payment/payment.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminAppComponent} from './pages/admin/admin-app/admin-app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { LastFewTransactionsComponent } from './pages/admin/Admin-chart/last-few-transactions/last-few-transactions.component';
import { SaleByMonthComponent } from './pages/admin/Admin-chart/sale-by-month/sale-by-month.component';
import { TopThreeProductsComponent } from './pages/admin/Admin-chart/top-three-products/top-three-products.component';
import { TopWidgetsComponent } from './pages/admin/admin-layouts/top-widgets/top-widgets.component';
import { FilterPipe } from './shared/filter.pipe';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    ForgotpasswordComponent,
    HomeComponent,
    PaymentComponent,
    ProductComponent,
    UserComponent,
    AdminAppComponent,
    LastFewTransactionsComponent,
    AdminMainComponent,
    SaleByMonthComponent,
    SaleByCategoryComponent,
    SideNavComponent,
    TopThreeProductsComponent,
    TopWidgetsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
