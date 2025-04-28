import { Injectable } from '@angular/core';
import { Service } from '../../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedServices: Service[] = [];

  addService(service: Service) {
    this.selectedServices.push(service);
  }

  removeService(service: Service) {
    this.selectedServices = this.selectedServices.filter(s => s.id !== service.id);
  }

  getServices() {
    return this.selectedServices;
  }

  clearCart() {
    this.selectedServices = [];
  }
}
