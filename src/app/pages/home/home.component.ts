import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'CanActivateFn';
  private AuthService = inject(AuthService)

  logOut() {
    this.AuthService.logout();
  }
}
