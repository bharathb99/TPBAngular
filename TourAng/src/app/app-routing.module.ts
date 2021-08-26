import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { BookingbillComponent } from './bookingbill/bookingbill.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CustomerBookingsComponent } from './customer-bookings/customer-bookings.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomereditComponent } from './customeredit/customeredit.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PackadminComponent } from './packadmin/packadmin.component';
import { PackbookcreateComponent } from './packbookcreate/packbookcreate.component';
import { PackcreateComponent } from './packcreate/packcreate.component';
import { PackeditComponent } from './packedit/packedit.component';
import { PacklistCustomerComponent } from './packlist-customer/packlist-customer.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'navbar-admin', component: NavbarAdminComponent },
  { path: 'navbar-user', component: NavbarUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-bookings/:cid', component: CustomerBookingsComponent },
  { path: 'packadmin', component: PackadminComponent },
  { path: 'packcreate', component: PackcreateComponent },
  { path: 'packedit/:pid', component: PackeditComponent },
  { path: 'packlist-customer/:cid', component: PacklistCustomerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'packbookcreate/:cid/:pid', component: PackbookcreateComponent },
  { path: 'customeredit/:cid', component: CustomereditComponent },
  { path: 'bookings/:cid', component: BookingsComponent },
  { path: 'bookingbill/:cid/:pid/:ap/:dp/:tp', component: BookingbillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  SignUpComponent,
  NavbarComponent,
  NavbarAdminComponent,
  NavbarUserComponent,
  FooterComponent,
  HomeComponent,
  AdminComponent,
  CustomerListComponent,
  CustomerBookingsComponent,
  PackadminComponent,
  PackcreateComponent,
  PackeditComponent,
  PacklistCustomerComponent,
  AboutUsComponent,
  PackbookcreateComponent,
  CustomereditComponent,
  BookingbillComponent,
  BookingsComponent];