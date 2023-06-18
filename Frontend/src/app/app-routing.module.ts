import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AllordersComponent } from './Components/orders/allorders/allorders.component';
import { OrderdetailsComponent } from './Components/orders/orderdetails/orderdetails.component';

import { StoreDetailsComponent } from './Components/stores/store-details/store-details.component';
import { CreateStoreComponent } from './Components/stores/create-store/create-store.component';
import { UpdateStoreComponent } from './Components/stores/update-store/update-store.component';
import { DeleteStoreComponent } from './Components/stores/delete-store/delete-store.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';

import { CreateFeedbackComponent } from './Components/feedbacks/create-feedback/create-feedback.component';
import { DeleteFeedbackComponent } from './Components/feedbacks/delete-feedback/delete-feedback.component';

import { CreateMenuItemComponent } from './Components/menus/create-menu-item/create-menu-item.component';
import { DeleteMenuItemComponent } from './Components/menus/delete-menu-item/delete-menu-item.component';
import { UpdateMenuItemComponent } from './Components/menus/update-menu-item/update-menu-item.component';
import { ProfileComponent } from './Components/profile/profile/profile.component';
import { UpdateProfileComponent } from './Components/profile/update-profile/update-profile.component';
import { CheckoutComponent } from './Components/orders/checkout/checkout.component';
import { ForgetpasswordComponent } from './Components/passwordreset/forgetpassword/forgetpassword.component';
import { PasswordresetComponent } from './Components/passwordreset/passwordreset/passwordreset.component';
import { OtpComponent } from './Components/passwordreset/otp/otp.component';
import { AllStoresComponent } from './Components/stores/all-stores/all-stores.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  // -------------------- user routes ------------------------------------------------------

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'profile/update/:id', component: UpdateProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword', component: PasswordresetComponent },
  { path: 'otp', component: OtpComponent },
  // -------------------- order routes ------------------------------------------------------

  { path: 'orders', component: AllordersComponent },
  { path: 'orders/:id', component: OrderdetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  // -------------------- stores routes ------------------------------------------------------
  { path: 'stores', component: AllStoresComponent },
  { path: 'stores/create', component: CreateStoreComponent },
  { path: 'stores/update/:id', component: UpdateStoreComponent },
  { path: 'stores/delete/:id', component: DeleteStoreComponent },
  { path: 'stores/:id', component: StoreDetailsComponent },
  // -------------------- feedback routes --------------------------------------------------
  { path: 'feedbacks/create', component: CreateFeedbackComponent },
  { path: 'feedbacks/delete/:id', component: DeleteFeedbackComponent },

  // -------------------- menu routes ------------------------------------------------------
  { path: 'menu/create', component: CreateMenuItemComponent },
  { path: 'menu/delete/:id', component: DeleteMenuItemComponent },

  { path: 'menu/update/:id', component: UpdateMenuItemComponent },

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
