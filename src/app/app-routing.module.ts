import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { CartComponent } from './components/cart/cart.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { SuccessComponent } from './components/success/success.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignupGuard } from '../../src/app/auth/signup.guard';

export const routes: Routes = [
  { path: '', component: ServicesComponent, canActivate: [SignupGuard] },  
  { path: 'cart', component: CartComponent, canActivate: [SignupGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'appointment', component: AppointmentComponent, canActivate: [SignupGuard] },
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
