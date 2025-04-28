import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Service } from '../../models/service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
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
    console.log('Joining for URL:', selectedServiceNames.join(', '));
  
    this.router.navigate(['/appointment'], { 
      queryParams: { services: selectedServiceNames.join(', ') }  // ✅ no manual encode
    });
  }
  

  removeFromCart(service: Service) {
    this.cartService.removeService(service);
    this.selectedServices = this.cartService.getServices();
  }
}
