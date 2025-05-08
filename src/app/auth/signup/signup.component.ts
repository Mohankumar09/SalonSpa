import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private auth: Auth) {}

  onSignupSuccess() {
    // Set a flag to indicate the user has signed up
    localStorage.setItem('userSignedUp', 'true'); // Store in localStorage (or your preferred auth service)
    this.router.navigate(['/home']); // Navigate to home after successful signup
  }

  async onSignup() {
    if (this.email && this.password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
        console.log('User signed up:', userCredential.user);

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        localStorage.setItem('loggedIn', 'true');

        // Optionally, use a flag to indicate successful signup
        localStorage.setItem('userSignedUp', 'true');  // Store flag for successful signup

        // Wait for a short delay before redirecting to allow for updates
        setTimeout(() => {
          this.router.navigate(['/']); // Redirect to home after signup
        }, 500);  // Add a small delay (e.g., 500ms)
      } catch (error: any) {
        console.error('Signup error:', error);
        alert(error.message);  // Display error message to the user
      }
    } else {
      alert('Please fill all fields');
    }
  }

  // Marked as async to support await
  async continueWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log('Google sign-in result:', result.user);
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/']);
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      alert(error.message);
    }
  }
}
