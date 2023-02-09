import { inject, Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenService = inject(TokenService);
  private router = inject(Router);

  login(email?: string, password?: string) {
    this.tokenService.saveToken('123456789X')
    this.router.navigate(['/home']);
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const token = this.tokenService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
