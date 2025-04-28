import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Import all components
import { ServicesComponent } from './components/services/services.component';
import { CartComponent } from './components/cart/cart.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { SuccessComponent } from './components/success/success.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CartComponent,
    AppointmentComponent,
    BookingFormComponent,
    SuccessComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
