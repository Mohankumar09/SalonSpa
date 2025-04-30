import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent implements OnInit {

  name: string = '';
  email: string = '';
  service: string = '';
  staff: string = '';
  date: string = '';
  time: string = '';
  phone: string = '';

  // ✅ Declare staffList here
  staffList: string[] = ['Hairstylist', 'Beautician', 'Skincare Specialist', 'Nail Technician', 'Massage Therapist', 'Makeup Artist', 'Spa Therapist', 'Hair Colorist', 'Threading Specialist', 'Brow Artist', 'Skincare Consultant',];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['services']) {
        this.service = params['services'];
      }
    });
  }

  onSubmit() {
    const serviceListFormatted = this.service
      ? this.service.split(',').map((s: string) => `• ${s.trim()}`).join('\n')
      : '';

    const templateParams = {
      name: this.name,
      email: this.email,
      service: serviceListFormatted,
      staff: this.staff,
      date: this.date,
      time: this.time,
      phone: this.phone
    };

    emailjs.send('service_1c4k8gi', 'template_n3n2g1j', templateParams, 'wxC8wuHRPtoTqP_sY')
      .then((response: EmailJSResponseStatus) => {
        alert('Appointment booked successfully!');
      }, (error) => {
        alert('Oops! Something went wrong.');
      });
  }
}
