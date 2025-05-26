// cart.service.ts
import { Injectable } from '@angular/core';
import { Service } from '../../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedServices: Service[] = [];

  addService(service: Service) {
    // Prevent duplicates
    if (!this.selectedServices.find(s => s.id === service.id)) {
      this.selectedServices.push(service);
    }
  }

  getServices(): Service[] {
    console.log('Cart items:', this.selectedServices);
    return this.selectedServices;
  }

  removeService(service: Service) {
    this.selectedServices = this.selectedServices.filter(s => s.id !== service.id);
  }

  clearCart() {
    this.selectedServices = [];
    }
  }