import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common'; // Import CommonModule for standalone components

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterModule, CommonModule], // Add CommonModule here
})
export class AppComponent {
  constructor(private router: Router, private auth: Auth) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
      this.router.navigate(['/signin']);
    }
  }

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    signOut(this.auth).then(() => {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('user');
      this.router.navigate(['/signin']);
    }).catch(error => {
      console.error('Logout error:', error);
    });
  }
}
