import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token   = localStorage.getItem('token');
    const payload = localStorage.getItem('token_payload');
    if (!token || !payload) {
      this.router.navigateByUrl('/login');
      return false;
    }
    const formattedPayload = JSON.parse(payload);
    if (new Date().getTime() < formattedPayload.exp * 1000) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
