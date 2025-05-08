import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Service } from '../../models/service.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common'; // Add this import
import { FormsModule } from '@angular/forms'; // Assuming you're using this too

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule is included here
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
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
    { id: 20, name: 'Haircut', price: 25, category: 'Men' },
    { id: 21, name: 'Shave', price: 15, category: 'Men' },
    { id: 22, name: 'Facial', price: 30, category: 'Men' },
    { id: 23, name: 'Hair Color', price: 40, category: 'Men' },
    { id: 24, name: 'Hair Treatment - Anti Dandruff', price: 70, category: 'Hair' },
    { id: 25, name: 'Bridal Hair Styling', price: 150, category: 'Bridal' },
    { id: 26, name: 'Pre-Wedding Skincare', price: 120, category: 'Bridal' },
    { id: 27, name: 'Bridal Henna', price: 80, category: 'Bridal' },
    { id: 28, name: 'Aromatherapy', price: 70, category: 'Spa' },
    { id: 29, name: 'Hot Stone Massage', price: 100, category: 'Spa' },
    { id: 30, name: 'Facial Treatment', price: 85, category: 'Spa' },
    { id: 31, name: 'Gel Manicure', price: 45, category: 'Nails' },
    { id: 32, name: 'Gel Pedicure', price: 50, category: 'Nails' },
    { id: 33, name: 'Acrylic Nails', price: 60, category: 'Nails' },
    { id: 34, name: 'Microdermabrasion', price: 70, category: 'Skin' },
    { id: 35, name: 'Chemical Peel', price: 100, category: 'Skin' },
    { id: 36, name: 'Hydrafacial', price: 120, category: 'Skin' }
];

  selectedCategory: string = 'All';

  constructor(private cartService: CartService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    const isUserSignedUp = localStorage.getItem('userSignedUp'); // Check if the user is signed up
    if (!isUserSignedUp) {
      this.router.navigate(['/signup']); // Redirect to signup if not signed up
    }
  }

  addToCart(service: Service) {
    console.log('Adding to cart:', service);
    this.cartService.addService(service);
    this.snackBar.open(`${service.name} added to cart!`, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-success']
    });
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
