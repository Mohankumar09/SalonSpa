import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

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

  continueWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider)
      .then(result => {
        // You can now access the result, e.g., user info, token, etc.
        console.log(result);
      })
      .catch(error => {
        console.error('Error during Google sign-in:', error);
      });
  }
  
}
