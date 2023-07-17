import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  myForm: FormGroup = this.fb.group({
    email: ['luisger3434@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    if (this.myForm.invalid) return;
    const { email, password } = this.myForm.value;
    this.authService.login(email, password).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: errorMessage => {
        Swal.fire('Error', errorMessage, 'error');
      },
    });
  }
}
