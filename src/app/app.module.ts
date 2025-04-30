import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ServicesComponent } from './components/services/services.component';
import { CartComponent } from './components/cart/cart.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { SuccessComponent } from './components/success/success.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment';

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
    FormsModule,   // This is for ngModel
    MatSnackBarModule,
    CommonModule,  // This is for ngClass
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
