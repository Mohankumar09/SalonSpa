import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Check if the user is logged in or has completed signup
    const userLoggedIn = localStorage.getItem('loggedIn');
    if (userLoggedIn === 'true') {
      return true;
    } else {
      // Redirect to the signup page if not logged in
      this.router.navigate(['/signup']);
      return false;
    }
  }
}
