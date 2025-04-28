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
  date: string = '';
  time: string = '';
  phone: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('Query Params:', params);

      if (params['services']) {
        console.log('Services from URL:', params['services']);
        this.service = params['services'];  // ✅ correctly set the service
      } else {
        console.warn('No service information found in URL!');
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
      date: this.date,
      time: this.time,
      phone: this.phone
    };

    console.log('Sending booking data:', templateParams);

    emailjs.send('service_1c4k8gi', 'template_n3n2g1j', templateParams, 'wxC8wuHRPtoTqP_sY')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Appointment booked successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Oops! Something went wrong.');
      });
  }
}
