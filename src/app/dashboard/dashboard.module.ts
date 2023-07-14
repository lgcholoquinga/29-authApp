import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [DashboardLayoutComponent, HomeComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
