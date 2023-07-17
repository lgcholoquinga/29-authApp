import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  onLogout() {
    this.authService.logout();
  }
}
