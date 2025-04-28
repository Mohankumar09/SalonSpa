import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { CartComponent } from './components/cart/cart.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
