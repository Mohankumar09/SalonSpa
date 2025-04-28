import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Service } from '../../models/service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  services: Service[] = [
    { id: 1, name: 'Hair Cut', price: 30, category: 'Hair' },
    { id: 2, name: 'Hair Color', price: 50, category: 'Hair' },
    { id: 3, name: 'Hair Highlights', price: 80, category: 'Hair' },
    { id: 4, name: 'Hair Straightening', price: 120, category: 'Hair' },
    { id: 5, name: 'Hair Spa', price: 60, category: 'Hair' },
    { id: 6, name: 'Hair Smoothening', price: 140, category: 'Hair' },
    { id: 7, name: 'Kids Haircut', price: 20, category: 'Hair' },
    { id: 8, name: 'Facial', price: 45, category: 'Skin' },
    { id: 9, name: 'Waxing - Full Body', price: 80, category: 'Skin' },
    { id: 10, name: 'Threading', price: 10, category: 'Skin' },
    { id: 11, name: 'Eyebrow Shaping', price: 15, category: 'Skin' },
    { id: 12, name: 'Manicure', price: 25, category: 'Nails' },
    { id: 13, name: 'Pedicure', price: 30, category: 'Nails' },
    { id: 14, name: 'Nail Art', price: 40, category: 'Nails' },
    { id: 15, name: 'Massage - Head', price: 35, category: 'Spa' },
    { id: 16, name: 'Massage - Body', price: 90, category: 'Spa' },
    { id: 17, name: 'Makeup - Party', price: 100, category: 'Bridal' },
    { id: 18, name: 'Bridal Makeup', price: 250, category: 'Bridal' },
    { id: 19, name: 'Beard Trim', price: 20, category: 'Men' },
    { id: 20, name: 'Hair Treatment - Anti Dandruff', price: 70, category: 'Hair' },
  ];

  selectedCategory: string = 'All';

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(service: Service) {
    this.cartService.addService(service);
  }

  get filteredServices(): Service[] {
    if (this.selectedCategory === 'All') {
      return this.services;
    }
    return this.services.filter(service => service.category === this.selectedCategory);
  }

  selectService(serviceName: string) {
    this.router.navigate(['/booking-form'], { queryParams: { service: serviceName } });
  }
}
