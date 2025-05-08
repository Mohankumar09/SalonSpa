import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [CommonModule, FormsModule],
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    standalone: true
})
export class AppointmentComponent {
  date: string = '';
  time: string = '';
  staff: string = '';

  staffList = ['John', 'Emma', 'Mike', 'Sophia', 'Olivia', 'Liam', 'Noah', 'Ava', 'Isabella', 'Mia'];

  constructor(private router: Router) {}

  continueBooking() {
    if (this.date && this.time && this.staff) {
      this.router.navigate(['/booking-form']);
    } else {
      alert('Please select date, time, and staff!');
    }
  }
}
