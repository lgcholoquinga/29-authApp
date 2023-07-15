import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login.component';
import { RegisterPageComponent } from './pages/register-page/register.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
