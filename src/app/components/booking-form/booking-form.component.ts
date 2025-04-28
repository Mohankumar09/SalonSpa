import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent {
  name: string = '';
  email: string = '';
  mobile: string = '';

  constructor(private router: Router) {}

  submitBooking() {
    if (this.name && this.email && this.mobile) {
      this.router.navigate(['/success']);
    } else {
      alert('Please fill all details!');
    }
  }
}
