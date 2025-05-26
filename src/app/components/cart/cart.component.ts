import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Import this
import { Router } from '@angular/router';

import { CartService } from '../services/cart.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [CommonModule], // ⬅️ Add this line
})
export class CartComponent implements OnInit {
  selectedServices: Service[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.selectedServices = this.cartService.getServices();
  }

  proceedToAppointment() {
    if (this.selectedServices.length === 0) {
      alert('No services selected!');
      return;
    }

    const selectedServiceNames = this.selectedServices.map(service => service.name);

    console.log('Selected service names:', selectedServiceNames);
    console.log('Navigating with service:', selectedServiceNames.join(', '));

    this.router.navigate(['/booking-form'], {
      queryParams: {
        service: encodeURIComponent(this.selectedServices.map(s => s.name).join(', '))
      }
    });       
  }    

  removeFromCart(service: Service) {
    this.cartService.removeService(service);
    this.selectedServices = this.cartService.getServices();
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}