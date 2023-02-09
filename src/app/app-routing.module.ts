import { inject, NgModule } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';

const authGuardFn: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.isLoggedIn();
}

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuardFn],
    title: 'Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
