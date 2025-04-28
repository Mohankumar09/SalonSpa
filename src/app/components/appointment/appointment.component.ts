import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent {
  date: string = '';
  time: string = '';
  staff: string = '';

  staffList = ['John', 'Emma', 'Mike', 'Sophia'];

  constructor(private router: Router) {}

  continueBooking() {
    if (this.date && this.time && this.staff) {
      this.router.navigate(['/booking-form']);
    } else {
      alert('Please select date, time, and staff!');
    }
  }
}
