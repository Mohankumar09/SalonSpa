import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    standalone: true,
})
export class SuccessComponent {
  constructor(private cartService: CartService) {
    this.cartService.clearCart();
  }
}
