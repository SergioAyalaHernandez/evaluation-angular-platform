import { Component } from '@angular/core';
import {AuthServiceService} from "./auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthServiceService) {}

  isUserAuthenticated(): boolean {
    if (window.location.pathname === '/create-user') {
      return true;
    }

    // Para otras rutas, verifica la autenticación normalmente
    return this.authService.isAuthenticated();
  }
}
