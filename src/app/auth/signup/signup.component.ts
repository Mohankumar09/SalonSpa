import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSignup() {
    if (this.email && this.password) {
      const user = {
        email: this.email,
        password: this.password
      };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/']);
    } else {
      alert('Please fill all fields');
    }
  }
  
}
