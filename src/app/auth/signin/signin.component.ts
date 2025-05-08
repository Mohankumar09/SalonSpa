import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router, private auth: Auth) {}

  async onSignIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      localStorage.setItem('loggedIn', 'true');

      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      this.router.navigate(['/']);
    } catch (error: any) {
      console.error('Login error:', error);
      alert('Invalid credentials or user not found.');
    }
  }

  ngOnInit() {
    const remembered = localStorage.getItem('rememberedEmail');
    if (remembered) {
      this.email = remembered;
      this.rememberMe = true;
    }
  }

  forgotPassword() {
    if (!this.email) {
      alert('Please enter your email address to reset your password.');
      return;
    }

    sendPasswordResetEmail(this.auth, this.email)
      .then(() => alert('Password reset email sent!'))
      .catch((error) => {
        console.error(error);
        alert('Error sending reset email. Make sure the email is correct and registered.');
      });
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }
}
