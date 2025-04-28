import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { CartComponent } from './components/cart/cart.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { SuccessComponent } from './components/success/success.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  
  { path: '', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'appointment', component: BookingFormComponent },
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
