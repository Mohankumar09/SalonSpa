import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignIn() {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
  
    if (savedUser.email === this.email && savedUser.password === this.password) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials. Please signup first or check your details.');
    }
  }
  
}
