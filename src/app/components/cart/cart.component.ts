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
    this.router.navigate(['/appointment']);
  }

  removeFromCart(service: Service) {
    this.cartService.removeService(service);
    this.selectedServices = this.cartService.getServices();
  }
}
